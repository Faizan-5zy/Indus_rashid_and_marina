import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Amenities from "./components/Amenities";
import Location from "./components/Location";
import Contact from "./components/Contact";
import "leaflet/dist/leaflet.css";

function App() {
  return (
    <div className="App ">
      <Header />
      <Home />
      <About />
      <Projects />
      <Amenities />
      <Location />
      <Contact />
    </div>
  );
}

export default App;
