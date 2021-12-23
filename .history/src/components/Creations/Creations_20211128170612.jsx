import './creations.css'
import data from '../../data'
import Card from '../Card/Card';

const Creations = () => {
  return <div className="creation-container">
      <div className="creation-header">
          <h1 className="creation-title">
              Our Creations
          </h1>
          <button className="creation-btn">
              See All
          </button>
      </div>
      <div className="creation-cards">
          {data.map((item) => {
              return <Card key={item.id} item={item} />
          })}
      </div>
  </div>;
};

export default Creations;
