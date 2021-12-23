import './about.css'
import image from '../../assets/desktop/image-interactive.jpg'

const About = () => {
  return <div className="about-container">
      <img className="image-interactive" src={image} alt="interactive.jpg" />
  </div>;
};

export default About;
