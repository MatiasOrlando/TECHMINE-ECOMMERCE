import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Button } from "react-bootstrap";
import { BsCart3 } from "react-icons/bs";

export default function ItemCount({ stock }) {
  const [count, setCount] = useState(1);
  const [buttonDecreaseActive, setButtonDecreaseActive] = useState(false);
  const [buttonAddActive, setButtonAddActive] = useState(false);
  const [maxStock, setMaxStock] = useState(null);
  const handleAddItem = () => {
    if (count < stock) {
      setCount(count + 1);
      setButtonDecreaseActive(true);
    }
    if (count === stock) {
      setMaxStock("Ha alcanzado el numero maximo de stock disponible");
      setButtonAddActive(true);
    }
  };

  useEffect(() => {
    if (count !== stock) {
      setButtonAddActive(false);
    }
    if (count === 1) {
      setButtonDecreaseActive(false);
    }
    if (count < stock) {
      setMaxStock(null);
    }
  }, [count]);

  const handleDecrementItem = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCartButton = () => {
    if (count === 1) {
      toast.success(`Has añadido ${count} item al carrito`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.success(`Has añadido ${count} items al carrito`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  // Componente de presentación
  const AddButton = ({ handleOnSubmit }) => {
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            paddingRight: "40px",
            marginTop: "30px",
          }}
        >
          <Button
            style={{
              color: "#0077f9",
              backgroundColor: "white",
              borderRadius: "4px",
            }}
            className="add-button"
            onClick={() => handleOnSubmit()}
          >
            Añadir al carrito
            <BsCart3
              style={{ height: "15px", width: "15px", color: "0077f9" }}
            />
          </Button>
          <Button variant="primary">Comprar</Button>
        </div>
      </>
    );
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="itemCounter">
        <button
          type="button"
          onClick={handleDecrementItem}
          disabled={!buttonDecreaseActive}
          className="btn btn-secondary"
        >
          -
        </button>
        <div className="valueItem">
          <div>
            <p className="counterP">{count}</p>
          </div>
        </div>
        <button
          type="button"
          onClick={handleAddItem}
          disabled={buttonAddActive}
          className="btn btn-secondary"
        >
          +
        </button>
      </div>
      <div>
        <AddButton handleOnSubmit={handleAddToCartButton} />
        <div className="maxStock">
          <p>{maxStock}</p>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
