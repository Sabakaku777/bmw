import "./cars.css";
import car from "../../assets/cars.webp";
import x6 from "../../assets/bmw 6.jpg";
import f10 from "../../assets/bmw f10.jpg";
import f90 from "../../assets/bmw f90.jpg";
import i4 from "../../assets/bmw i4.jpg";
import i8 from "../../assets/bmw i8.jpg";
import m3 from "../../assets/bmw m3.jpg";
import m5 from "../../assets/bmw m5.jpg";
import e60 from "../../assets/bmwe60.jpg";
import x3 from "../../assets/bmw x3.jpg";

const carsData = [
  {
    id: 0,
    name: "BMW M5",
    price: "$104,000",
    image: m5,
    description:
      "A high-performance sports sedan known for its powerful V8 engine and precise handling.",
  },
  {
    id: 1,
    name: "BMW X6",
    price: "$68,000",
    image: x6,
    description:
      "A midsize luxury SUV with a coupe-like design and sporty driving dynamics.",
  },
  {
    id: 2,
    name: "BMW F10",
    price: "$35,000",
    image: f10,
    description:
      "The fifth generation of the BMW 5 Series, known for its blend of comfort.",
  },
  {
    id: 3,
    name: "BMW i4",
    price: "$57,000",
    image: i4,
    description:
      "An electric gran coupe that combines BMW's performance heritage with sustainability.",
  },
  {
    id: 4,
    name: "BMW F90",
    price: "$110,000",
    image: f90,
    description:
      "The latest generation of the BMW M5, featuring a twin-turbocharged V8.",
  },
  {
    id: 5,
    name: "BMW i8",
    price: "$147,000",
    image: i8,
    description:
      "A plug-in hybrid sports car known for its futuristic design and innovative technology.",
  },
  {
    id: 6,
    name: "BMW M3",
    price: "$73,000",
    image: m3,
    description:
      "A performance version of the BMW 3 Series, renowned for its agility and powerful engine.",
  },
  {
    id: 7,
    name: "BMW E60",
    price: "$25,000",
    image: e60,
    description:
      "The fifth generation of the BMW 5 Series, recognized for its bold design.",
  },
  {
    id: 8,
    name: "BMW X3",
    price: "$48,000",
    image: x3,
    description:
      "A compact luxury SUV that balances practicality with performance.",
  },
];

export default function Cars() {
  return (
    <div>
      <img src={car} className="background" alt="Background" />
      <h1 className="our-cars">Our Cars</h1>
      <div className="cont">
        <div className="cars-container">
          {carsData.map((data) => (
            <div key={data.id} className="box">
              <img
                src={data.image}
                alt={data.name}
                width="300"
                className="cars-image"
              />
              <div className="car-details">
                {" "}
                <h3>{data.name}</h3>
                <h3>{data.description}</h3>
                <p>Price: {data.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
