import { NavLink } from "react-router-dom";

export default function CartWidget() {
  return (
    <>
      <NavLink to="/cart">
        <img
          src="/images/cartImg.png"
          alt="Carrito"
          style={{ height: "32px", width: "32px" }}
        />
        <div className="number">0</div>
      </NavLink>
    </>
  );
}
