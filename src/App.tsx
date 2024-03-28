import CarouselComponent from "./components/carouselComponent/CarouselComponent";
import Header from "./components/header/Header";
import MainOptions from "./components/mainOptions/MainOptions";
import PizzaOptions from "./components/pizzaOptions/PizzaOptions";
import ContactFormSection from "./components/contactFormSection/ContactFormSection";
import Stores from "./components/stores/Stores";
import Footer from "./components/footer/Footer";
import image1 from "./assets/carousel-1.png";
import image2 from "./assets/carousel-2.png";
import image3 from "./assets/carousel-3.png";
import { useEffect } from "react";
import { fetchPizzas } from "./state/slices/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./state/store";
import { ICart } from "./Interfaces";
import { jwtDecode } from "jwt-decode";
import { storeUserData } from "./state/slices/UserSlice";
import { useCookies } from "react-cookie";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const pizzaList: ICart = useSelector((state: RootState) => state.pizzaList);
  const [cookies, setCookie] = useCookies(["user"]);

  useEffect(() => {
    if (!pizzaList.items.length) dispatch(fetchPizzas());
  }, []);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const tokenParam = searchParams.get("token");
    const userCookieData = cookies["user"];
    if (tokenParam) {
      const decodedJwt = jwtDecode(tokenParam);
      setCookie("user", decodedJwt);
      dispatch(storeUserData(decodedJwt));
    }
    if (userCookieData && !tokenParam) {
      dispatch(storeUserData(userCookieData));
    } else {
      console.log("No params or cookies!");
    }
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
