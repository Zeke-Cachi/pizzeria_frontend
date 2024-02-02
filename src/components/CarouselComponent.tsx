import image1 from "../assets/carousel-1.png";
import image2 from "../assets/carousel-2.png";
import image3 from "../assets/carousel-3.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "../index.css";

const CarouselComponent = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function SampleNextArrow(props: any) {
    const { onClick } = props;
    return <FaAngleRight onClick={onClick} className="left-arrow" />;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function SamplePrevArrow(props: any) {
    const { onClick } = props;
    return <FaAngleLeft onClick={onClick} className="right-arrow" />;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src={image1} alt="" />
        </div>
        <div>
          <img src={image2} alt="" />
        </div>
        <div>
          <img src={image3} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default CarouselComponent;
