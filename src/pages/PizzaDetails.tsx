import { useParams } from "react-router-dom";

const PizzaDetails = () => {
  const {
    pizzaId,
    pizzaName,
    pizzaDescription,
    pizzaBakeType,
    pizzaImg1,
    pizzaImg2,
    pizzaImg3,
  } = useParams();

  return (
    <div>
      {pizzaId}
      {pizzaName}
      {pizzaDescription}
      {pizzaBakeType}
      {pizzaImg1}
      {pizzaImg2}
      {pizzaImg3}
    </div>
  );
};

export default PizzaDetails;
