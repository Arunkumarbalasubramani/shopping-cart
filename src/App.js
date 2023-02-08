import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarcomponent from "./Navbar";
import Carouselpage from "./carouselpage";
import Productspage from "./Productspage";
import Footer from "./Footer";
import { useState } from "react";

function App() {
  const [existingCart, setExistingCart] = useState([]);

  return (
    <div className="App">
      <Navbarcomponent existingCart={existingCart} />
      <Carouselpage />
      <Productspage setExistingCart={setExistingCart} />
      <Footer />
    </div>
  );
}

export default App;
