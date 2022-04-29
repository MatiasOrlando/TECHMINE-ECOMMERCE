import ItemsListContainer from "./components/ItemsContainer/ProductsContainer";
import NavBar from "./components/Navbar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemsListContainer greeting="Hola a todos! Aqui va la lista de productos" />
    </div>
  );
}

export default App;
