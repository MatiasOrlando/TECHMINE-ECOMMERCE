import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer";
import ItemsListContainer from "../../components/ItemsContainer/ProductsContainer";

export default function Tienda() {
  return (
    <div>
      <ItemsListContainer title="Nuestros productos / " />
      <ItemDetailContainer titleDetalleProducto="Detalle del producto / " />
    </div>
  );
}
