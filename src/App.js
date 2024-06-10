import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Experinece from "./Components/Experinece";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Home />
        <Experinece />
        <Skills />
        <Contact />
      </div>
      <Footer />
    </div>
    // <div className="App">
    //   <Navbar />
    //   <div className="container">
    //   </div>
    // </div>
  );
}

export default App;
