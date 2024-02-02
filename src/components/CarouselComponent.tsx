import image1 from "../../../img/arugula-prosciutto-3862d4e24-4493-4269-a58f-460abc571f7d.jpg";
import image2 from "../assets/react.svg";
import image3 from "../../../img/4-cheese-19e04e25a-8c95-4d95-8794-a2b424c8ee42.jpg";
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
          <img
            style={{ width: "30rem", margin: "0 auto" }}
            src={image1}
            alt=""
          />
        </div>
        <div>
          <img
            style={{ width: "30rem", margin: "0 auto" }}
            src={image2}
            alt=""
          />
        </div>
        <div>
          <img
            style={{ width: "30rem", margin: "0 auto" }}
            src={image3}
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default CarouselComponent;
