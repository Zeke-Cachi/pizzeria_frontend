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
import { useEffect } from "react";
import { fetchPizzas } from "./state/slices/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./state/store";
import { ICart } from "./Interfaces";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const pizzaList: ICart = useSelector((state: RootState) => state.pizzaList);

  useEffect(() => {
    if (!pizzaList.items.length) dispatch(fetchPizzas());
  }, []);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const tokenParam = searchParams.get("token");
    tokenParam ? console.log(tokenParam) : console.log("No params!");
  }, []);

  return (
    <>
      <Header />
      <CarouselComponent
        $img1={image1}
        $img2={image2}
        $img3={image3}
        $paddingtop="calc(500 / 1920 * 100%)"
      />
      <MainOptions />
      <PizzaOptions pizzaList={pizzaList} />
      <Stores />
      <ContactFormSection />
      <Footer />
    </>
  );
}

export default App;
