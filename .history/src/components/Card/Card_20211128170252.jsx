import "./card.css";

const Card = ({ item }) => {
  return (
    <div className="card-container" style={{backgroundImage: `url(${item.img})`}}>
      <img className="card-img" src={item.img} alt={item.title} />
      <h4 className="card-title">{item.title}</h4>
    </div>
  );
};

export default Card;
