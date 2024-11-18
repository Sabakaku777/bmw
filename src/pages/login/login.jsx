import back from "../../assets/register.jpg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./login.css";
import { useState } from "react";

// Create a validation schema using Yup
const schema = yup.object().shape({
  FirstName: yup
    .string()
    .required("First Name is required")
    .min(4, "must be at least 4 characters"),
  LastName: yup
    .string()
    .required("Last Name is required")
    .min(6, "must be at least 6 characters"),
  Email: yup.string().email("Invalid email").required("Email is required"),
  Phone: yup
    .string()
    .matches(/^[0-9]+$/, "Phone number must be only digits")
    .required("Phone number is required")
    .min(9, "wrong number"),
  Password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function Register({ loged, setLoged }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [userData, setUserData] = useState({}); // Manages submitted form data

  const onSubmit = (data) => {
    console.log(data);
    setUserData(data); // Store form data
    setLoged(true); // Set logged-in state to true
  };

  return (
    <div>
      <img className="background" src={back} alt="background" />
      {loged ? (
        // Display this when the user is logged in
        <div className="welcome-text">
          <h1>Welcome {userData.FirstName}</h1>
          <div className="details-box">
            <h1>Your Profile</h1>
            <h1>Account limit: 4 Year</h1>
            <h1>
              Username: {userData.FirstName} {userData.LastName}
            </h1>
            <h1>Gmail: {userData.Email}</h1>
            <h1>Phone Number : {userData.Phone}</h1>
            <div className="Log-out">
              <button className="btn-out" onClick={() => setLoged(false)}>
                Log Out
              </button>
            </div>
          </div>
        </div>
      ) : (
        // Display this when the user is not logged in
        <form className="center" onSubmit={handleSubmit(onSubmit)}>
          <div className="reg-container">
            <h1 className="reg-title">Register</h1>

            <div className="input-box">
              <i className="fa-regular fa-user"></i>
              <input
                placeholder="First Name"
                type="text"
                {...register("FirstName")}
              />
            </div>
            {errors.FirstName && (
              <p className="error-message">{errors.FirstName.message}</p>
            )}

            <div className="input-box">
              <i className="fa-regular fa-user"></i>
              <input
                placeholder="Last Name"
                type="text"
                {...register("LastName")}
              />
            </div>
            {errors.LastName && (
              <p className="error-message">{errors.LastName.message}</p>
            )}

            <div className="input-box">
              <i className="fa-regular fa-envelope"></i>
              <input placeholder="Email" type="text" {...register("Email")} />
            </div>
            {errors.Email && (
              <p className="error-message">{errors.Email.message}</p>
            )}

            <div className="input-box">
              <i className="fa-solid fa-phone"></i>
              <input
                placeholder="Phone Number"
                type="text"
                {...register("Phone")}
              />
            </div>
            {errors.Phone && (
              <p className="error-message">{errors.Phone.message}</p>
            )}

            <div className="input-box">
              <i className="fa-solid fa-lock"></i>
              <input
                placeholder="Password"
                type="password"
                {...register("Password")}
              />
            </div>
            {errors.Password && (
              <p className="error-message">{errors.Password.message}</p>
            )}

            <button className="reg-button" type="submit">
              Register
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
