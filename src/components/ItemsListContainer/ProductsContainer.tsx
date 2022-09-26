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
  QueryDocumentSnapshot,
  DocumentData,
} from "firebase/firestore";
import { ItemsListProps, Item } from "./ProductsContainer.interface";

const ItemsListContainer: React.FC<ItemsListProps> = ({
  title,
  title2,
  categoryId,
  data,
  checkedState,
  selectedProducts,
}: ItemsListProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [items, setItems] = useState<Item[]>([]);
  const [productsList, setProductsList] = useState<Item[]>([]);
  const navigateTo404 = useNavigate();
  const db = getFirestore();
  const itemsRef = collection(db, "productos");

  const getAllItems = async (): Promise<Item[]> => {
    const snapshots = await getDocs(itemsRef);
    return snapshots.docs.map((doc: QueryDocumentSnapshot<any>) => ({
      //  QueryDocumentSnapshot<DocumentData?
      id: doc.id,
      ...doc.data(),
    }));
  };

  async function getPlacas(): Promise<Item[]> {
    const categoryFilter = query(
      collection(db, "productos"),
      where("price", "<", 35000),
      where("categoryId", "==", "placas-de-video")
    );
    const snapshots = await getDocs(categoryFilter);
    return [
      ...snapshots.docs.map((doc: QueryDocumentSnapshot<any>) => ({
        id: doc.id,
        ...doc.data(),
      })),
    ];
  }

  async function getProcesadores(): Promise<Item[]> {
    const categoryFilter = query(
      collection(db, "productos"),
      where("price", "<", 8000),
      where("categoryId", "==", "procesadores")
    );
    const snapshots = await getDocs(categoryFilter);
    return [
      ...snapshots.docs.map((doc: QueryDocumentSnapshot<any>) => ({
        id: doc.id,
        ...doc.data(),
      })),
    ];
  }

  async function getAllSSD(): Promise<Item[]> {
    const categoryFilter = query(
      collection(db, "productos"),
      where("price", "<", 3500),
      where("categoryId", "==", "discos-ssd")
    );
    const snapshots = await getDocs(categoryFilter);
    return [
      ...snapshots.docs.map((doc: QueryDocumentSnapshot<any>) => ({
        id: doc.id,
        ...doc.data(),
      })),
    ];
  }

  useEffect(() => {
    (async () => {
      const allProducts: Item[] = await getAllItems();
      setProductsList(allProducts);
    })();
  }, [data, selectedProducts]);

  useEffect(() => {
    (async () => {
      switch (data) {
        case "normal":
        case "default": {
          break;
        }
        case "mayor": {
          setProductsList(productsList.sort((a, b) => b.price - a.price));
          break;
        }
        case "minor": {
          setProductsList(productsList.sort((a, b) => a.price - b.price));
          break;
        }
      }
      setItems(productsList);
      setLoading(false);
    })();
  }, [data, productsList, selectedProducts]);

  useEffect(() => {
    async function queryFilter(): Promise<void> {
      setLoading(true);
      if (!selectedProducts && !categoryId) {
        setProductsList(productsList);
        setLoading(false);
      } else {
        const checkboxSelection: Item[] = [];
        if (selectedProducts.includes("Placas de video")) {
          const placasSale = await getPlacas();
          checkboxSelection.push(...placasSale);
        }
        if (selectedProducts.includes("Procesadores")) {
          const procesadoresSale = await getProcesadores();
          checkboxSelection.push(...procesadoresSale);
        }
        if (selectedProducts.includes("Discos SSD")) {
          const discosSale = await getAllSSD();
          checkboxSelection.push(...discosSale);
        }
        setProductsList(checkboxSelection);
        setLoading(false);
      }
    }

    async function renderProductsFilter(): Promise<void> {
      setLoading(true);
      if (categoryId) {
        let itemsRef: any; //type Query<DocumentData>?
        if (data === "minorCategory") {
          itemsRef = query(
            collection(db, "productos"),
            where("categoryId", "==", categoryId),
            orderBy("price", "asc")
          );
        } else if (data === "mayorCategory") {
          itemsRef = query(
            collection(db, "productos"),
            where("categoryId", "==", categoryId),
            orderBy("price", "desc")
          );
        } else {
          itemsRef = query(
            collection(db, "productos"),
            where("categoryId", "==", categoryId)
          );
        }
        getDocs(itemsRef)
          .then((snapshots: any) => {
            if (snapshots.docs.length === 0) {
              navigateTo404("/404");
            } else {
              setProductsList(
                snapshots.docs.map((doc: QueryDocumentSnapshot<any>) => ({
                  id: doc.id,
                  ...doc.data(),
                }))
              );
            }
          })
          .finally(() => setLoading(false));
      } else {
        queryFilter();
      }
    }
    renderProductsFilter();
  }, [data, categoryId, checkedState, selectedProducts]);

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
