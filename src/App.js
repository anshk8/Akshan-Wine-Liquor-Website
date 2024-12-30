
import { Footer } from "./components/Footer";
import NavBar from "./components/NavBar";
import Order from "./components/Order";
import { Parralax } from "./components/Parralax";
import ReviewScroll from "./components/ReviewScroll";
import Contact from "./components/Contact";
import About from "./components/About";
  
function App() {

  const text = "000000"
  const fontFamily = "Cinzel"
  return (
    <div>

      <NavBar text={text} fontFamily={fontFamily} />
      
      <Parralax />
      
      <Order text={text} fontFamily={fontFamily} />
      <ReviewScroll />
      <About text={text} fontFamily={fontFamily} />
      <Contact text={text} fontFamily={fontFamily} />
      <Footer />
    </div>
  );
}

export default App;
