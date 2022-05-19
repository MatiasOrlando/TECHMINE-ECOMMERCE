import React from "react";
import ItemsListContainer from "../../components/ItemsListContainer/ProductsContainer";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

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
      <ItemsListContainer
        categoryId={categoryId}
        title={
          <NavLink to="/tienda" className="linkToAllProducts">
            Nuestros productos
          </NavLink>
        }
        title2={`${categoryId}`}
      />
    </>
  );
};

export default Category;
