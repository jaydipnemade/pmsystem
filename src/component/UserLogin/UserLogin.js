import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import axios from "axios";
import "./Userlogin.css";
import React, { Component } from "react";
const api = axios.create({
  baseURL: "http://localhost:9090/",
});

const UserLogin = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("logstatus");
    if (token) {
      // User already logged in, redirect to home page
      navigate("/");
    }
  }, [navigate]);

  const handleChange = ({ target }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));

    if (target.name === "email") {
      if (!emailRegex.test(target.value)) {
        setEmailError("Invalid email format");
      } else {
        setEmailError("");
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/login", data);

      if (response.status === 200) {
        // const token = response.data.token;
        localStorage.setItem("name", response.data.name);
        localStorage.setItem("id", response.data.id);
        localStorage.setItem("email", response.data.email);

        localStorage.setItem("role", response.data.role);
        localStorage.setItem("logstatus", true);

        if (response.data.role === "candidate") navigate("/UserProfile");
        else if (response.data.role === "recruiter") navigate("/RecProfile");
        else navigate("/UserLogin");
      } else {
        setError("Invalid username or password");
      }
    } catch (error) {
      setError(error.message);
      setTimeout(() => {
        setError("");
      }, 5000); // Clear error message after 5 seconds
    }
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  useEffect(() => {
    const handleScroll = (event) => {
      if (window.scrollY > 0) {
        document.querySelector(".header").classList.add("active");
      } else {
        document.querySelector(".header").classList.remove("active");
      }
      let menu = document.querySelector("#menu-btn1");
      let navbar = document.querySelector(".navbar");
      menu.classList.remove("fa-times");
      navbar.classList.remove("active");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section>
        <div className="login_container">
          <div className="login_form_container">
            <div className="left">
              <form className="form_container" onSubmit={handleSubmit}>
                <h1>Login to Your Account</h1>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  value={data.email}
                  required
                  className="input"
                />
                {emailError && <div className="error_msg">{emailError}</div>}
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  value={data.password}
                  required
                  className="input"
                />
                {error && <div className="error_msg">{error}</div>}
                <button type="submit" className="white_btn">
                  Sign In
                </button>
                <h3>
                  Don't have an account ? Create
                  <Link to="/UserRegistration"> One</Link>
                </h3>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserLogin;
