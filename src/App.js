import ItemsListContainer from "./components/ItemsContainer/ProductsContainer";
import NavBar from "./components/Navbar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemsListContainer title="Nuestros productos / PLACAS DE VIDEO" />
    </div>
  );
}

export default App;
