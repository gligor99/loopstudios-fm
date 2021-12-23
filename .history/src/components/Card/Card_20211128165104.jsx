import "./card.css";

const Card = ({ item }) => {
  return (
    <div className="card-container">
      <img src={item.image} alt="" />
    </div>
  );
};

export default Card;
