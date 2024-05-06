// import CSS
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// Import components
import Entete from "./components/entete/Entete";
import ProductDetails from "./components/productDetails/ProductDetails";

function App() {
  return (
    <div className="App">
      {/* Navbar */} <Entete />
      {/* Product info */} <ProductDetails />
    </div>
  );
}

export default App;
