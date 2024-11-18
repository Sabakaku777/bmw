import about from "../../assets/about.webp";
import one from "../../assets/about1.jpeg";
import two from "../../assets/about2.png";
import group from "../../assets/bmwgroup.jpeg";
import "./about.css";

export default function About() {
  return (
    <div>
      <img src={about} className="background" />
      <h1 className="about-us">About US</h1>
      <div className="about-box">
        <div className="card1">
          <h1>STRATEGY</h1>
          <p>
            At the BMW Group, we know we have a responsibility to society and
            the world. That’s why we have fixed targets and values that govern
            the way we do business. With the help of our strategic focus, we
            want to make a meaningful contribution to a more sustainable world
            and combine top-flight mobility with innovative technologies.
          </p>
        </div>
        <div className="card2">
          <img src={one} />
        </div>
      </div>
      <div className="about-box">
        <div className="card2">
          <img src={two} />
        </div>
        <div className="card3">
          <h1>BRANDS & SERVICES.</h1>
          <p>
            The BMW Group is the world’s leading provider of premium cars and
            motorcycles and the home of the BMW, MINI, Rolls-Royce and BMW
            Motorrad brands. Our vehicles and products are tailored to the needs
            of our customers and constantly enhanced – with a clear focus on
            sustainability and the conservation of resources.
          </p>
        </div>
      </div>

      <div className="bmw-group">
        <h1 className="apart">HERE’S WHAT SETS THE BMW GROUP APART.</h1>
        <h2 className="apart-text">
          Fascination. At the BMW Group, it’s a global phenomenon. Formed by our
          products and technologies, but also by our innovativeness, pioneering
          spirit and visionary thinking, we have positioned ourselves as the
          market leader. We see the challenges we face as a privilege – because
          to us, driving technological transformation and developing new
          solutions for personal mobility are an opportunity: they are a chance
          to maintain a long-term focus on sustainability and enhance our
          culture of appreciation and equality. After all, it’s our people and
          their passion and commitment that will lead our organisation into the
          future.
        </h2>
        <img src={group} />
      </div>
      <div className="footers">
        <h1>BMW Mottorad</h1>
        <h1>BMW Group</h1>
        <h1>BMW Museum</h1>
        <h1>BMW Group Careers</h1>
        <h1>BMW Welt</h1>
        <h1>BMW Group classic</h1>
      </div>
    </div>
  );
}
