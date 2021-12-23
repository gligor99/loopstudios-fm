import './about.css'
import image from '../../assets/desktop/image-interactive.jpg'

const About = () => {
  return <div className="about-container">
      <img className="image-interactive" src={image} alt="interactive.jpg" />
      <div className="about-content">
          <h1 className="about-title">
              The leader in interative VR
          </h1>
      </div>
  </div>;
};

export default About;
