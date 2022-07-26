import ItemsListContainer from "../../components/ItemsListContainer/ProductsContainer";
import { NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import SwiperTest from "../../components/SwiperTest/SwiperTest";
import { contexto } from "../../CustomProvider/CustomProvider";

export default function Tienda() {
  const { data, setData } = useContext(contexto);
  const [isChecked, setIsChecked] = useState(false);
  const [isCheckedProcesadores, setIsCheckedProcesadores] = useState(false);
  const [isCheckedDiscos, setIsCheckedDiscos] = useState(false);

  const handleCheck = () => {
    setData("placas");
    setIsChecked(!isChecked);
    if (isChecked) {
      setData("default");
    }
  };

  const handleCheckProcesadores = () => {
    setData("procesadores");
    setIsCheckedProcesadores(!isCheckedProcesadores);
    if (isCheckedProcesadores) {
      setData("default");
    }
  };

  const handleCheckDiscos = () => {
    setData("discos");
    setIsCheckedDiscos(!isCheckedDiscos);
    if (isCheckedDiscos) {
      setData("default");
    }
  };
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
      <div style={{ display: "flex" }}>
        <div className="orderPerPrice">
          <p className="titleOrderProducts"> Ordenar por:</p>
          <div className="divFiltroPrecios">
            <button
              onClick={() => setData("minor")}
              className="btn btn-outline"
              id="btnPriceFilter"
            >
              Menor precio
            </button>
            <button
              onClick={() => setData("mayor")}
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
          <div className="hotsale">
            <div className="titleProductsHotSale">Productos en oferta:</div>
            <div>
              <div>
                <input
                  type={"checkbox"}
                  name="placas"
                  value={isChecked}
                  onChange={handleCheck}
                />
                <label htmlFor="checkbox">Placas de Vídeo </label>
              </div>
              <div>
                <input
                  type={"checkbox"}
                  name="procesadores"
                  value={isCheckedProcesadores}
                  onChange={handleCheckProcesadores}
                />
                <label htmlFor="checkbox">Procesadores</label>
              </div>
              <div>
                <input
                  type={"checkbox"}
                  name="discos"
                  value={isCheckedDiscos}
                  onChange={handleCheckDiscos}
                />
                <label htmlFor="checkbox">Díscos SSD</label>
              </div>
            </div>
          </div>
        </div>
        <div className="tiendaProductos">
          <ItemsListContainer
            title="Nuestros productos "
            isChecked={isChecked}
            isCheckedProcesadores={isCheckedProcesadores}
            setIsChecked={setIsChecked}
            isCheckedDiscos={isCheckedDiscos}
            data={data}
          />
        </div>
      </div>
      <SwiperTest />
    </div>
  );
}
