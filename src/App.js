import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarcomponent from "./Navbar";
import Carouselpage from "./carouselpage";
function App() {
  return (
    <div className="App">
      <Navbarcomponent />
      <Carouselpage />
      <h1>Welcome to Shoppincart task</h1>
    </div>
  );
}

export default App;
