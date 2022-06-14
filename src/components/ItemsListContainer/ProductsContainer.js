import React, { useEffect, useState } from "react";
import ListItem from "../ItemList/ItemList";
import SpinnerLoader from "../LoadingSpinner/Spinner";
import { useNavigate } from "react-router-dom";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
} from "firebase/firestore";

export default function ItemsListContainer({
  title,
  title2,
  categoryId,
  isChecked,
  isCheckedProcesadores,
  isCheckedDiscos,
}) {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const navigateTo404 = useNavigate();

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    if (isCheckedDiscos) {
      const categoryFilter = query(
        collection(db, "productos"),
        where("price", "<", 3500),
        where("categoryId", "==", "discos-ssd")
      );
      getDocs(categoryFilter)
        .then((snapshots) => {
          setItems(
            snapshots.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
          );
        })
        .finally(() => setLoading(false));
    } else {
      const itemsRef = collection(db, "productos");
      getDocs(itemsRef)
        .then((snapshots) => {
          setItems(
            snapshots.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
          );
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => setLoading(false));
    }

    if (isCheckedProcesadores) {
      const categoryFilter = query(
        collection(db, "productos"),
        where("price", "<", 8000),
        where("categoryId", "==", "procesadores")
      );
      getDocs(categoryFilter)
        .then((snapshots) => {
          setItems(
            snapshots.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
          );
        })
        .finally(() => setLoading(false));
    }

    if (isChecked) {
      const categoryFilter = query(
        collection(db, "productos"),
        where("price", "<", 35000),
        where("categoryId", "==", "placas-de-video")
      );
      getDocs(categoryFilter)
        .then((snapshots) => {
          setItems(
            snapshots.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
          );
        })
        .finally(() => setLoading(false));
    }

    if (categoryId) {
      const categoryFilter = query(
        collection(db, "productos"),
        where("categoryId", "==", categoryId)
      );
      getDocs(categoryFilter)
        .then((snapshots) => {
          if (snapshots.docs.length === 0) {
            navigateTo404("/404");
          } else {
            setItems(
              snapshots.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
            );
          }
        })
        .finally(() => setLoading(false));
    }
  }, [categoryId, isChecked, isCheckedProcesadores, isCheckedDiscos]);

  return (
    <>
      <div className="orderPriceFilter">
        <div style={{ width: "400px" }} className="tienda3">
          {title} / {title2}
        </div>
        <div>
          {loading ? <SpinnerLoader /> : <ListItem productos={items} />}
        </div>
      </div>
    </>
  );
}
