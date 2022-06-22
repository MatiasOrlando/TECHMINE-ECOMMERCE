import ItemsListContainer from "../../components/ItemsListContainer/ProductsContainer";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import SwiperTest from "../../components/SwiperTest/SwiperTest";

export default function Tienda() {
  const [isChecked, setIsChecked] = useState(false);
  const [isCheckedProcesadores, setIsCheckedProcesadores] = useState(false);
  const [isCheckedDiscos, setIsCheckedDiscos] = useState(false);
  const navegarAMinor = useNavigate();
  const navegarAMayor = useNavigate();
  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  const handleCheckProcesadores = () => {
    setIsCheckedProcesadores(!isCheckedProcesadores);
  };

  const handleCheckDiscos = () => {
    setIsCheckedDiscos(!isCheckedDiscos);
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
              onClick={() => navegarAMinor("/minor")}
              className="btn btn-outline"
              id="btnPriceFilter"
            >
              Menor precio
            </button>
            <button
              onClick={() => navegarAMayor("/mayor")}
              className="btn btn-outline"
              id="btnPriceFilter"
            >
              Mayor precio
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
          />
        </div>
      </div>
      <SwiperTest />
    </div>
  );
}
