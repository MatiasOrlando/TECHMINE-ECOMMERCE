import ItemsListContainer from "./components/ItemsContainer/ProductsContainer";
import NavBar from "./components/Navbar/NavBar";
import SpinnerLoader from "./components/LoadingSpinner/Spinner";
import React, { useState } from "react";
function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="App">
      <NavBar />
      <ItemsListContainer title="Nuestros productos / PLACAS DE VIDEO" />
    </div>
  );
}

export default App;
