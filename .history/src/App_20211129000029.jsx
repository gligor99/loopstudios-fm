import { useState } from "react";
import About from "./components/About/About";
import Creations from "./components/Creations/Creations";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
// import Sidebar from "./components/Sidebar/Sidebar";
// import Navbar from "./components/Navbar/Navbar";


function App() {
  const [toggle, setToggle] = useState(false)

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
