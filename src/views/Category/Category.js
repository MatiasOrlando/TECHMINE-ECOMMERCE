import React from "react";
import ItemsListContainer from "../../components/ItemsListContainer/ProductsContainer";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import SwiperTest from "../../components/SwiperTest/SwiperTest";

const Category = () => {
  const { categoryId } = useParams();
  return (
    <>
      <div className="categoriasProductos">
        <NavLink to="/category/placas-de-video" className="categorysLinks">
          Placas de Vídeo
        </NavLink>
        <NavLink to="/category/procesadores" className="categorysLinks">
          Procesadores
        </NavLink>
        <NavLink to="/category/discos-ssd" className="categorysLinks">
          Discos SSD
        </NavLink>
      </div>
      <div
        style={{ marginLeft: "100px", marginTop: "40px", marginBottom: "70px" }}
      >
        <ItemsListContainer
          categoryId={categoryId}
          title={
            <NavLink to="/tienda" className="linkToAllProducts">
              Nuestros productos
            </NavLink>
          }
          title2={`${categoryId}`}
        />
      </div>
      <SwiperTest />
    </>
  );
};

export default Category;
