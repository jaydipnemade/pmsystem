import React from "react";
import { useParams, Link } from "react-router-dom";
import { Component, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

// import CarService from "../../services/CarService";
// import UserService from "../../services/UserService";
// import BookingService from "../../services/BookingService";
import "./UserProfile.css";

const UserProfile = () => {
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
  const [isLoading, setLoading] = useState(false);
  const [shouldNavigate, setShouldNavigate] = useState(false);

  useEffect(() => {
    const navigateTimeout = setTimeout(() => {
      if (shouldNavigate) {
        // Navigate to another component
        // You can replace '/another-component' with the desired path
        window.location.href = "/UserLogin";
      }
    }, 2000);

    return () => {
      clearTimeout(navigateTimeout);
    };
  }, [shouldNavigate]);

  const handleClick = () => {
    setLoading(true);
    setShouldNavigate(true);
  };

  return (
    <>
      <section className="UserProfile">
        <Container>
          <div className="UserProfile_container">
            <div className="UserProfile_form_container">
              <div className="UserProfile_form_container_inner profHead">
                {/* <div className="profHead"></div> */}
                <div className="profilePictureContainer">
                  <img
                    src={require("./test0.jpg")}
                    className="card-img-top  roundedCircle border "
                    alt="Profile Pic"
                  />
                </div>
              </div>
              <div>
                <Link to="/edit-profile" className="rounded-button">
                  <i
                    className="fa-solid fa-pencil fa-2xl"
                    style={{ color: "#130f40" }}
                  ></i>
                </Link>
              </div>
              <div className="UserProfileInfoContainer">
                {/* user name */}
                <h1> Jaydip Nemade.</h1>
                {/* head tag that is education */}
                <p>
                  Pursuing PG - DAC at Centre for Development of Advanced
                  Computing (C-DAC),Mumbai
                </p>
                <hr />
                <Button size="lg" disabled={isLoading} onClick={handleClick}>
                  {isLoading ? "Loading…" : "Genrate Resume"}
                </Button>
                <Button size="lg" variant="outline-primary">
                  Contact Info
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
export default UserProfile;
