import "./card.css";

const Card = ({ item }) => {
  return (
    <div className="card-container">
      <img className="card-img" src={item.img} alt={item.title} />
    </div>
  );
};

export default Card;
