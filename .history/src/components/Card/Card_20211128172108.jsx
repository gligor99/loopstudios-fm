import "./card.css";

const Card = ({ item }) => {
  return (
    <div
      className="card-container"
      style={{
        backgroundImage: `url(${item.img})`,
        backgroundRepeat: "no-repeat",
        
        width: '20%'
      }}
    >
      <h4 className="card-title">{item.title}</h4>
    </div>
  );
};

export default Card;
