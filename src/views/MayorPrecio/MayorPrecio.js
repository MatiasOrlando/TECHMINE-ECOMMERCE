import React, { useState, useEffect } from "react";
import ListItem from "../../components/ItemList/ItemList";
import SpinnerLoader from "../../components/LoadingSpinner/Spinner";
import { NavLink } from "react-router-dom";
import {
  orderBy,
  getFirestore,
  query,
  getDocs,
  collection,
} from "firebase/firestore";

const MayorPrecio = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemsRef = query(
      collection(db, "productos"),
      orderBy("price", "desc")
    );

    getDocs(itemsRef)
      .then((snapshots) => {
        setItems(snapshots.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <div className="tienda4">
        <NavLink to="/tienda" className="tienda4">
          Nuestros productos /
        </NavLink>
      </div>
      {loading ? (
        <SpinnerLoader />
      ) : (
        <div style={{ marginLeft: "100px", marginBottom: "60px" }}>
          <ListItem productos={items} />
        </div>
      )}
    </div>
  );
};

export default MayorPrecio;
