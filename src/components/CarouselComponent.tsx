import image1 from "../assets/carousel-1.png";
import image2 from "../assets/carousel-2.png";
import image3 from "../assets/carousel-3.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "../index.css";
import { IOnClick } from "../Interfaces";
import { CarouselImg } from "../styledComponents/carouselStyles";

const CarouselComponent = () => {
  function SampleNextArrow(props: IOnClick) {
    const { onClick } = props;
    return <FaAngleRight onClick={onClick} className="left-arrow" />;
  }

  function SamplePrevArrow(props: IOnClick) {
    const { onClick } = props;
    return <FaAngleLeft onClick={onClick} className="right-arrow" />;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };

  return (
    <div style={{ width: "100vw" }}>
      <Slider {...settings}>
        <CarouselImg carouselimg={image1}></CarouselImg>
        <CarouselImg carouselimg={image2}></CarouselImg>
        <CarouselImg carouselimg={image3}></CarouselImg>
      </Slider>
    </div>
  );
};

export default CarouselComponent;
