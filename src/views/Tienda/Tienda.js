// import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer";
import ItemsListContainer from "../../components/ItemsContainer/ProductsContainer";
import { NavLink } from "react-router-dom";

export default function Tienda() {
  return (
    <div className="productosYCategorias">
      <div className="categoriasProductos">
        <NavLink to="/category/Placas-de-video" className="categorysLinks">
          Placas de Vídeo
        </NavLink>
        <NavLink to="/category/Procesadores" className="categorysLinks">
          Procesadores
        </NavLink>
        <NavLink to="/category/Discos-ssd" className="categorysLinks">
          Discos SSD
        </NavLink>
      </div>
      <div className="tiendaProductos">
        <ItemsListContainer title="Nuestros productos " />
      </div>
    </div>
  );
}
