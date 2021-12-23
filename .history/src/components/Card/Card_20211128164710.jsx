import './card.css'

const Card = ({item}) => {
    return (
        <div className="card-container">
            <img className="card-image" src={item.img} alt={item.title} />
            <h2 className="card-title">{item.title}</h2>
        </div>
    )
}

export default Card
