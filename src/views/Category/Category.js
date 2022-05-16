import React from "react";
import ItemsListContainer from "../../components/ItemsContainer/ProductsContainer";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Category = () => {
  const { categoryId } = useParams();
  return (
    <ItemsListContainer
      categoryId={categoryId}
      title={
        <NavLink to="/tienda" className="linkToAllProducts">
          Nuestros productos
        </NavLink>
      }
      title2={`${categoryId}`}
    />
  );
};

export default Category;
