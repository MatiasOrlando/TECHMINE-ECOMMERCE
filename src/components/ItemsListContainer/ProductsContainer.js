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
  const db = getFirestore();
  const itemsRef = collection(db, "productos");

  async function getAllItems() {
    const snapshots = await getDocs(itemsRef);
    return snapshots.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  }

  async function getPlacas() {
    let categoryFilter = query(
      collection(db, "productos"),
      where("price", "<", 35000),
      where("categoryId", "==", "placas-de-video")
    );
    const snapshots = await getDocs(categoryFilter);
    return [
      ...snapshots.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })),
    ];
  }

  async function getProcesadores() {
    let categoryFilter = query(
      collection(db, "productos"),
      where("price", "<", 8000),
      where("categoryId", "==", "procesadores")
    );
    const snapshots = await getDocs(categoryFilter);
    return [
      ...snapshots.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })),
    ];
  }

  async function getAllSSD() {
    let categoryFilter = query(
      collection(db, "productos"),
      where("price", "<", 3500),
      where("categoryId", "==", "discos-ssd")
    );
    const snapshots = await getDocs(categoryFilter);
    return [
      ...snapshots.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })),
    ];
  }

  async function queryFilter() {
    setLoading(true);
    let filteredItems = [];
    if (
      !isCheckedPlacas &&
      !isCheckedProcesadores &&
      !isCheckedDiscos &&
      !categoryId
    ) {
      filteredItems = await getAllItems();
      setItems(orderItems(filteredItems));
      setLoading(false);
      return;
    }

    if (isCheckedPlacas) {
      let placas = await getPlacas();
      filteredItems = filteredItems.concat(placas);
    }
    if (isCheckedProcesadores) {
      let procesadores = await getProcesadores();
      filteredItems = filteredItems.concat(procesadores);
    }
    if (isCheckedDiscos) {
      let discos = await getAllSSD();
      filteredItems = filteredItems.concat(discos);
    }

    function orderItems(itemsList) {
      switch (data) {
        case "normal":
        default:
          return itemsList;
        case "mayor":
          return itemsList.sort((a, b) => b.price - a.price);
        case "minor":
          return itemsList.sort((a, b) => a.price - b.price);
      }
    }
    setLoading(false);
    setItems(orderItems(filteredItems));
  }

  useEffect(() => {
    async function renderProductsFilter() {
      setLoading(true);
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
        queryFilter();
      }
    }
    renderProductsFilter();
  }, [
    isCheckedPlacas,
    isCheckedProcesadores,
    isCheckedDiscos,
    data,
    categoryId,
    navigateTo404,
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
