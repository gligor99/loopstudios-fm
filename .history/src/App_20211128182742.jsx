import About from "./components/About/About";
import Creations from "./components/Creations/Creations";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Creations />
      <Footer />
    </div>
  );
}

export default App;
