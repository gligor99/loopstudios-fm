import "./card.css";

const Card = ({ item }) => {
  return (
    <div className="card-container">
        <div>
        <img className="card-image" src={item.img} alt={item.title} />
      <h2 className="card-title">{item.title}</h2>
        </div>
      
    </div>
  );
};

export default Card;
