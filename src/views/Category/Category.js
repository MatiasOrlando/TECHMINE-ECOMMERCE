import React, { useContext } from "react";
import ItemsListContainer from "../../components/ItemsListContainer/ProductsContainer.tsx";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import SwiperTest from "../../components/SwiperTest/SwiperTest";
import { contexto } from "../../CustomProvider/CustomProvider";
const Category = () => {
  const { categoryId } = useParams();
  const { data, setData } = useContext(contexto);
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
      <div style={{ display: "flex" }}>
        <div className="orderPerPrice">
          <p className="titleOrderProducts"> Ordenar por:</p>
          <div className="divFiltroPrecios">
            <button
              onClick={() => setData("minorCategory")}
              className="btn btn-outline"
              id="btnPriceFilter"
            >
              Menor precio
            </button>
            <button
              onClick={() => setData("mayorCategory")}
              className="btn btn-outline"
              id="btnPriceFilter"
            >
              Mayor precio
            </button>
            <button
              onClick={() => setData("default")}
              className="btn btn-outline"
              id="btnPriceFilter"
            >
              Vista normal
            </button>
          </div>
        </div>
        <div className="tiendaProductos">
          <ItemsListContainer
            categoryId={categoryId}
            title={
              <NavLink to="/tienda" className="linkToAllProducts">
                Nuestros productos
              </NavLink>
            }
            title2={`${categoryId}`}
            data={data}
          />
        </div>
      </div>
      <SwiperTest />
    </>
  );
};

export default Category;
