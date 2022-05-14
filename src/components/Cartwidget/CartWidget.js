import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";
export default function CartWidget() {
  return (
    <span>
      <Link to="/cart">
        <BsCart3 style={{ height: "30px", width: "30px", color: "white" }} />
      </Link>
    </span>
  );
}
