// import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer";
import ItemsListContainer from "../../components/ItemsListContainer/ProductsContainer";
import { NavLink } from "react-router-dom";

export default function Tienda() {
  return (
    <div className="productosYCategorias">
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
      <div className="tiendaProductos">
        <ItemsListContainer title="Nuestros productos " />
      </div>
    </div>
  );
}
