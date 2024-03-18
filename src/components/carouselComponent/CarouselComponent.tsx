import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "../../index.css";
import { ICarouselComponent, IOnClick } from "../../Interfaces";
import { CarouselImg, OptionalCarouselStyling } from "./carouselStyles";

const CarouselComponent: React.FC<ICarouselComponent> = ({
  $img1,
  $img2,
  $img3,
  $carouselheight,
  $carouselwidth,
  $paddingtop,
}) => {
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
    <OptionalCarouselStyling
      $carouselheight={$carouselheight}
      $carouselwidth={$carouselwidth}
    >
      <Slider {...settings}>
        <CarouselImg
          $carouselimg={$img1}
          $paddingtop={$paddingtop}
        ></CarouselImg>
        <CarouselImg
          $carouselimg={$img2}
          $paddingtop={$paddingtop}
        ></CarouselImg>
        <CarouselImg
          $carouselimg={$img3}
          $paddingtop={$paddingtop}
        ></CarouselImg>
      </Slider>
    </OptionalCarouselStyling>
  );
};

export default CarouselComponent;
