import "./about.css";
import image from "../../assets/desktop/image-interactive.jpg";

const About = () => {
  return (
    <div className="about-container">
      <img className="image-interactive" src={image} alt="interactive.jpg" />
      <div className="about-content">
        <h1 className="about-title">The leader in <br />interative VR</h1>
        <p className="about-p">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
          molestiae commodi libero repellendus, aut quod accusamus! Rerum
          repellat voluptatibus repudiandae? Dolor eligendi doloribus esse
          dolorum accusamus ducimus facere consectetur quidem!Dolor eligendi doloribus esse
          dolorum accusamus ducimus facere consectetur quidem!
        </p>
      </div>
    </div>
  );
};

export default About;
