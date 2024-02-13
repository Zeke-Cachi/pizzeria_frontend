import CarouselComponent from "./components/CarouselComponent";
import Header from "./components/Header";
import MainOptions from "./components/MainOptions";
import PizzaOptions from "./components/PizzaOptions";
import ContactFormSection from "./components/ContactFormSection";
import Stores from "./components/Stores";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <CarouselComponent />
      <MainOptions />
      <PizzaOptions />
      <Stores />
      <ContactFormSection />
      <Footer />
    </>
  );
}

export default App;
