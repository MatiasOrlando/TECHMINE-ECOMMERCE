import ItemsListContainer from "./components/ItemsContainer/ProductsContainer";
import NavBar from "./components/Navbar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemsListContainer title="PLACAS DE VIDEO" />
    </div>
  );
}

export default App;
