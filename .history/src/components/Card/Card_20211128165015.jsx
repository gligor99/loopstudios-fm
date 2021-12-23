import "./card.css";

const Card = ({ item }) => {
  return (
    <div className="card-container">
      <div className="card-wrap" style={{background: url{item.images}}}>
        <h2 className="card-title">{item.title}</h2>
      </div>
    </div>
  );
};

export default Card;
