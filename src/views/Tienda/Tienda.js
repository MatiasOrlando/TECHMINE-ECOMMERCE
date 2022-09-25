import ItemsListContainer from "../../components/ItemsListContainer/ProductsContainer.tsx";
import { NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import SwiperTest from "../../components/SwiperTest/SwiperTest";
import { contexto } from "../../CustomProvider/CustomProvider";
import { prodHotSale } from "../../utils/prodHotSale";

export default function Tienda() {
  const { data, setData } = useContext(contexto);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [checkedState, setCheckedState] = useState(
    new Array(prodHotSale.length).fill(false)
  );

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    const totalSelectedProducts = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum.concat([prodHotSale[index].name]);
        }
        return sum;
      },
      []
    );
    setSelectedProducts(totalSelectedProducts);
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
              onClick={() => setData("normal")}
              className="btn btn-outline"
              id="btnPriceFilter"
            >
              Vista normal
            </button>
          </div>
          <div className="hotsale">
            <div className="titleProductsHotSale">Productos en oferta:</div>
            {prodHotSale.map(({ name }, index) => {
              return (
                <li
                  key={index}
                  style={{ listStyleType: "none", padding: "5px" }}
                >
                  <div className="prods-list-item">
                    <div className="left-section">
                      <input
                        type="checkbox"
                        id={`custom-checkbox-${index}`}
                        name={name}
                        value={name}
                        checked={checkedState[index]}
                        onChange={() => handleOnChange(index)}
                      />
                      <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                    </div>
                  </div>
                </li>
              );
            })}
            {/* <div>
              <div>
                <input
                  type={"checkbox"}
                  name="placas"
                  value={isCheckedPlacas}
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
            </div> */}
          </div>
        </div>
        <div className="tiendaProductos">
          <ItemsListContainer
            title="Nuestros productos "
            // isCheckedPlacas={isCheckedPlacas}
            // isCheckedProcesadores={isCheckedProcesadores}
            // isCheckedDiscos={isCheckedDiscos}
            data={data}
            checkedState={checkedState}
            selectedProducts={selectedProducts}
          />
        </div>
      </div>
      <SwiperTest />
    </div>
  );
}
