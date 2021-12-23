import './card.css'

const Card = ({item}) => {
    return (
        <div className="card-container">
            <h3>{item.title}</h3>
        </div>
    )
}

export default Card
