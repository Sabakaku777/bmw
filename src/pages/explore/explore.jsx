import React from "react";
import "./explore.css";
import car from "../../assets/bmwexplore.jpg";
import m3 from "../../assets/m3.jpg";
import i8 from "../../assets/i8.jpg";
import x5 from "../../assets/x5.jpg";

export default function Explore() {
  const cars = [
    {
      id: 1,
      name: "BMW M3",
      image: m3,
      description:
        "The BMW M3 is a high-performance version of the BMW 3 Series tech.",
      price: "$70,000",
    },
    {
      id: 2,
      name: "BMW X5",
      image: x5,
      description: "The BMW X5 is a luxury SUV with cutting-edge technology.",
      price: "$60,000",
    },
    {
      id: 3,
      name: "BMW i8",
      image: i8,
      description:
        "The BMW i8 is a plug-in hybrid sports car with futuristic design.",
      price: "$150,000",
    },
  ];

  return (
    <div>
      <img src={car} className="background" alt="BMW Background" />
      <div className="explore-container">
        <header className="header">
          <h1>Explore BMW Models</h1>
        </header>
        <section className="gallery">
          {cars.map((car) => (
            <div key={car.id} className="cardd">
              <img src={car.image} alt={car.name} className="car-image" />
              <h2>{car.name}</h2>
              <p>{car.description}</p>
              <p className="price">{car.price}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
