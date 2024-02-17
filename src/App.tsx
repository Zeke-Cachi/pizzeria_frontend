import CarouselComponent from "./components/CarouselComponent";
import Header from "./components/Header";
import MainOptions from "./components/MainOptions";
import PizzaOptions from "./components/PizzaOptions";
import ContactFormSection from "./components/ContactFormSection";
import Stores from "./components/Stores";
import Footer from "./components/Footer";
import image1 from "./assets/carousel-1.png";
import image2 from "./assets/carousel-2.png";
import image3 from "./assets/carousel-3.png";

function App() {
  return (
    <>
      <Header />
      <CarouselComponent
        img1={image1}
        img2={image2}
        img3={image3}
        paddingtop="calc(500 / 1920 * 100%)"
      />
      <MainOptions />
      <PizzaOptions />
      <Stores />
      <ContactFormSection />
      <Footer />
    </>
  );
}

export default App;
