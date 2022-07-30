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
  orderBy,
} from "firebase/firestore";

export default function ItemsListContainer({
  title,
  title2,
  categoryId,
  isCheckedPlacas,
  isCheckedProcesadores,
  isCheckedDiscos,
  data,
}) {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const navigateTo404 = useNavigate();

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
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
            if (data === "minorCategory") {
              const itemsRef = query(
                collection(db, "productos"),
                where("categoryId", "==", categoryId),
                orderBy("price", "asc")
              );
              getDocs(itemsRef)
                .then((snapshots) => {
                  setItems(
                    snapshots.docs.map((doc) => ({
                      id: doc.id,
                      ...doc.data(),
                    }))
                  );
                })
                .finally(() => setLoading(false));
            } else if (data === "mayorCategory") {
              const itemsRef = query(
                collection(db, "productos"),
                where("categoryId", "==", categoryId),
                orderBy("price", "desc")
              );
              getDocs(itemsRef)
                .then((snapshots) => {
                  setItems(
                    snapshots.docs.map((doc) => ({
                      id: doc.id,
                      ...doc.data(),
                    }))
                  );
                })
                .finally(() => setLoading(false));
            }
          }
        })
        .finally(() => setLoading(false));
    } else {
      switch (data) {
        case "placas": {
          const categoryFilter = query(
            collection(db, "productos"),
            where("price", "<", 35000),
            where("categoryId", "==", "placas-de-video")
          );
          getDocs(categoryFilter)
            .then((snapshots) => {
              if (items.length === 14) {
                setItems([
                  ...snapshots.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                  })),
                ]);
              } else {
                setItems([
                  ...items,
                  ...snapshots.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                  })),
                ]);
              }
            })
            .finally(() => setLoading(false));
          break;
        }
        case "procesadores": {
          const categoryFilter = query(
            collection(db, "productos"),
            where("price", "<", 8000),
            where("categoryId", "==", "procesadores")
          );
          getDocs(categoryFilter)
            .then((snapshots) => {
              if (items.length === 14) {
                setItems([
                  ...snapshots.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                  })),
                ]);
              } else {
                setItems([
                  ...items,
                  ...snapshots.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                  })),
                ]);
              }
            })
            .finally(() => setLoading(false));
          break;
        }
        case "discos": {
          const categoryFilter = query(
            collection(db, "productos"),
            where("price", "<", 3500),
            where("categoryId", "==", "discos-ssd")
          );
          getDocs(categoryFilter)
            .then((snapshots) => {
              if (items.length === 14) {
                setItems([
                  ...snapshots.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                  })),
                ]);
              } else {
                setItems([
                  ...items,
                  ...snapshots.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                  })),
                ]);
              }
            })
            .finally(() => setLoading(false));
          break;
        }
        case "minor": {
          const itemsRef = query(
            collection(db, "productos"),
            orderBy("price", "asc")
          );
          getDocs(itemsRef)
            .then((snapshots) => {
              setItems(
                snapshots.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
              );
            })
            .finally(() => setLoading(false));
          break;
        }
        case "mayor": {
          const itemsRef = query(
            collection(db, "productos"),
            orderBy("price", "desc")
          );
          getDocs(itemsRef)
            .then((snapshots) => {
              setItems(
                snapshots.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
              );
            })
            .finally(() => setLoading(false));
          break;
        }
        default: {
          const itemsRef = collection(db, "productos");
          getDocs(itemsRef)
            .then((snapshots) => {
              setItems(
                snapshots.docs.map((doc) => ({
                  id: doc.id,
                  ...doc.data(),
                }))
              );
            })
            .catch((error) => {
              console.log(error);
            })
            .finally(() => setLoading(false));
          break;
        }
      }
    }
  }, [
    categoryId,
    isCheckedPlacas,
    isCheckedProcesadores,
    isCheckedDiscos,
    data,
  ]);

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
