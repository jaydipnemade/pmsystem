import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./RecruiterLogin.css";

function RecruiterLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { register, formState: { errors }, handleSubmit } = useForm();

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const onSubmit = async () => {
    if (!email || !password) {
      setErrorMessage("Email and password are required");
      setTimeout(() => {
      setErrorMessage("");
      }, 5000);
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080", {
        email: email,
        password: password,
      });

      if (response.data.success) {
        console.log("Login successful");
      } else {
        setErrorMessage("Email and password do not match");
        setTimeout(() => {
          setErrorMessage("");
        }, 5000);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Network Error");
    }
  };

  return (
    <>
      <div className="row justify-content-center"style={{marginTop:"130px"}}>
        <div className="col-sm-12 col-md-4  m-5 py-5 rounded shadow-lg p-3 mb-5 rounded" style={{backgroundColor:"white"}} >
          <div className="text mb-3 text-center">Login</div>
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="Email">
              <div className="mb-2">Email ID</div>
              <input
                type="email"
                {...register("email", {
                  required:true,
                  pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                })}
                className="email-input form-control form-control-lg mb-2"
                placeholder="Enter Email ID"
                name="email"
                value={email}
                onChange={handleChange}
              />
              <span className="text-danger">
              { errors.email?.type==="required" && "Email is Required"}
              { errors.email?.type==="pattern" && "Enter Valid Email"}
              </span>
            </div>

            <div className="Password">
              <div className="mb-2">Password</div>
              <input
                type="password"
                {...register("password", { required:true })}
                className="password-input form-control form-control-lg mb-2"
                placeholder="Enter Password"
                name="password"
                value={password}
                onChange={handleChange}
              />
              <span className="text-danger">
              { errors.password?.type==="required" && "Password is Required"}
              </span>
            </div>

            {errorMessage && (
              <div className="error-message">{errorMessage}</div>
            )}

            <div className="Button mt-4">
              <button
                type="submit"
                className="Button w-100 btn btn-primary btn-lg mb-5"
              >
                Login
              </button>
            </div>

            <div className=" mb-3 text-center">
              Don't have an Account?  
              <a className="mx-3" href="">Register</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default RecruiterLogin;