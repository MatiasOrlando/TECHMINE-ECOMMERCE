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
import { ItemsListProps, Item } from "./ProductsContainer.interface";

const ItemsListContainer: React.FC<ItemsListProps> = ({
  title,
  title2,
  categoryId,
  isCheckedPlacas,
  isCheckedProcesadores,
  isCheckedDiscos,
  data,
}: ItemsListProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [items, setItems] = useState<Item[]>([]);
  const [awaitedItemsList, setAwaitedItemsList] = useState<Item[]>([]);
  const navigateTo404 = useNavigate();
  const db = getFirestore();
  const itemsRef = collection(db, "productos");

  const getAllItems = async (): Promise<Item[]> => {
    const snapshots = await getDocs(itemsRef);
    return snapshots.docs.map((doc: any) => ({
      id: doc.id,
      ...doc.data(),
    }));
  };

  async function getPlacas(): Promise<Item[]> {
    let categoryFilter = query(
      collection(db, "productos"),
      where("price", "<", 35000),
      where("categoryId", "==", "placas-de-video")
    );
    const snapshots = await getDocs(categoryFilter);
    return [
      ...snapshots.docs.map((doc: any) => ({
        id: doc.id,
        ...doc.data(),
      })),
    ];
  }

  async function getProcesadores(): Promise<Item[]> {
    let categoryFilter = query(
      collection(db, "productos"),
      where("price", "<", 8000),
      where("categoryId", "==", "procesadores")
    );
    const snapshots = await getDocs(categoryFilter);
    return [
      ...snapshots.docs.map((doc: any) => ({
        id: doc.id,
        ...doc.data(),
      })),
    ];
  }

  async function getAllSSD(): Promise<Item[]> {
    let categoryFilter = query(
      collection(db, "productos"),
      where("price", "<", 3500),
      where("categoryId", "==", "discos-ssd")
    );
    const snapshots = await getDocs(categoryFilter);
    return [
      ...snapshots.docs.map((doc: any) => ({
        id: doc.id,
        ...doc.data(),
      })),
    ];
  }

  useEffect(() => {
    (async () => {
      const itemsList: Item[] = await getAllItems();
      setAwaitedItemsList(itemsList);
    })();
  }, [data]);

  useEffect(() => {
    (async () => {
      if (data === "normal") {
        setAwaitedItemsList(awaitedItemsList);
      } else if (data === "mayor") {
        const newList = awaitedItemsList.sort((a, b) => b.price - a.price);
        setAwaitedItemsList(newList);
      } else if (data === "minor") {
        setAwaitedItemsList(awaitedItemsList.sort((a, b) => a.price - b.price));
      }
      setLoading(false);
      setItems(awaitedItemsList);
    })();
  }, [data, awaitedItemsList]);

  useEffect(() => {
    async function queryFilter(): Promise<void> {
      setLoading(true);

      if (isCheckedPlacas) {
        const placasSale = await getPlacas();
        setAwaitedItemsList(placasSale);
      }
      if (isCheckedProcesadores) {
        const procesadoresSale = await getProcesadores();
        setAwaitedItemsList(procesadoresSale);
      }
      if (isCheckedDiscos) {
        const discosSale = await getAllSSD();
        setAwaitedItemsList(discosSale);
      }

      if (
        !isCheckedPlacas &&
        !isCheckedProcesadores &&
        !isCheckedDiscos &&
        !categoryId
      ) {
        setItems(awaitedItemsList);
        setLoading(false);
        return;
      }
    }

    async function renderProductsFilter(): Promise<void> {
      if (categoryId) {
        const categoryFilter = query(
          collection(db, "productos"),
          where("categoryId", "==", categoryId)
        );
        getDocs(categoryFilter)
          .then((snapshots: any) => {
            if (snapshots.docs.length === 0) {
              navigateTo404("/404");
            } else {
              setAwaitedItemsList(
                snapshots.docs.map((doc: { id: any; data: () => any }) => ({
                  id: doc.id,
                  ...doc.data(),
                }))
              );
              if (data === "minorCategory") {
                const itemsRef = query(
                  collection(db, "productos"),
                  where("categoryId", "==", categoryId),
                  orderBy("price", "asc")
                );
                getDocs(itemsRef)
                  .then((snapshots: any) => {
                    setAwaitedItemsList(
                      snapshots.docs.map(
                        (doc: { id: any; data: () => any }) => ({
                          id: doc.id,
                          ...doc.data(),
                        })
                      )
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
                  .then((snapshots: any) => {
                    setAwaitedItemsList(
                      snapshots.docs.map(
                        (doc: { id: any; data: () => any }) => ({
                          id: doc.id,
                          ...doc.data(),
                        })
                      )
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
    db,
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
};

export default ItemsListContainer;
