import video from "../../assets/cda1.mp4";
import image1 from "../../assets/cost3.jpg";
import image2 from "../../assets/cost4.jpg";
import image3 from "../../assets/cost5.jpg";
import "./Background.css";

export default function Background({ heroNum, playVideo }) {
  if (playVideo) {
    return (
      <video className="background" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
    );
  } else if (heroNum === 0) {
    return <img src={image1} className="background" />;
  } else if (heroNum === 1) {
    return <img src={image2} className="background" />;
  } else if (heroNum === 2) {
    return <img src={image3} className="background" />;
  }
}
