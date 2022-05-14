import React from "react";
import ItemsListContainer from "../../components/ItemsContainer/ProductsContainer";
import { useParams } from "react-router-dom";

const Category = () => {
  const { categoryId } = useParams();
  return (
    <div>
      <ItemsListContainer categoryId={categoryId} />
    </div>
  );
};

export default Category;
