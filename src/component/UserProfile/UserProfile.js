import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import axios from "axios"; 
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
  const MoveToContactInfo = () => {
    // Find the element with the id "contactSection"
    const section = document.getElementById("contactSection");

    // Scroll to the section
    section.scrollIntoView({ behavior: "smooth" });
  };
  // 
  // 
  // 
    const [userData, setUserData] = useState({});
  useEffect(() => {
    // Fetch user data from the backend
    axios
      .get("/api/user-profile") // Replace with your API endpoint
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);
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
                <Link to="/BioData" className="rounded-button">
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
                <Button
                  size="lg"
                  className="blue-border-button"
                  onClick={MoveToContactInfo}
                >
                  Contact Info.
                </Button>
                <Link to="/BioData">
                  <Button size="lg" className="blue-border-button">
                    Jobs Applied
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="UserProfile_container">
            <div className="UserProfile_form_container2">
              <div>
                <div className="internal_rounded-button">
                  <Link to="/BioData">
                    <i
                      className="fa-solid fa-pencil fa-2xl"
                      style={{ color: "#130f40" }}
                    ></i>
                  </Link>
                </div>
                <h1> About</h1>

                <p>
                  Enthusiastic CDAC student with a passion for technology and a
                  drive to excel in the world of IT. Currently honing my skills
                  in Advanced Computing, I am dedicated to learning and applying
                  cutting-edge concepts to real-world challenges. I am eager to
                  contribute my knowledge and creativity to innovative projects.
                  As a proactive learner.
                </p>
              </div>
            </div>
          </div>
          <div className="UserProfile_container">
            <div className="UserProfile_form_container2">
              <div>
                <div className="internal_rounded-button">
                  <Link to="/BioData">
                    <i
                      className="fa-solid fa-pencil fa-2xl"
                      style={{ color: "#130f40" }}
                    ></i>
                  </Link>
                </div>
                <h1> Skills</h1>

                <p>
                  Skills: C# · ASP.NET · Node.js · Express.js · REST APIs ·
                  React.js · Spring Boot · Java · HTML5
                </p>
              </div>
            </div>
          </div>
          <div className="UserProfile_container">
            <div className="UserProfile_form_container2">
              <div>
                <div className="internal_rounded-button">
                  <Link to="/BioData">
                    <i
                      className="fa-solid fa-pencil fa-2xl"
                      style={{ color: "#130f40" }}
                    ></i>
                  </Link>
                </div>
                <h1> Experience</h1>

                <p>
                  2 Years
                  <br /> Live Sound EngineerLive Sound Engineer Octave pro snl ·
                  FreelanceOctave pro snl · Freelance May 2017 - Dec 2019 · 2
                  yrs 8 mos May 2017 - Dec 2019 · 2 yrs 8 mos Pune, Maharashtra,
                  India.
                </p>
              </div>
            </div>
          </div>
          <div className="UserProfile_container">
            <div className="UserProfile_form_container2">
              <div>
                <div className="internal_rounded-button">
                  <Link to="/BioData">
                    <i
                      className="fa-solid fa-pencil fa-2xl"
                      style={{ color: "#130f40" }}
                    ></i>
                  </Link>
                </div>
                <h1> Project</h1>

                <p>
                  1 Month
                  <br />
                  The Personnel Management System (PMS) is a comprehensive
                  software solution designed to streamline and automate various
                  human resource management tasks within an organization. This
                  system aims to improve the efficiency, accuracy, and
                  accessibility of managing personnel-related information and
                  processes.
                </p>
              </div>
            </div>
          </div>
          <div className="UserProfile_container" id="contactSection">
            <div className="UserProfile_form_container2">
              <div>
                <div className="internal_rounded-button">
                  <Link to="/BioData">
                    <i
                      className="fa-solid fa-pencil fa-2xl"
                      style={{ color: "#130f40" }}
                    ></i>
                  </Link>
                </div>
                <h1> Contact Info</h1>
                <div
                  className="row"
                  style={{ marginLeft: "1vw", marginRight: "15%" }}
                >
                  <div className="col ">
                    <ul>
                      <li>Phone No:-</li>
                      <li>Email Id:-</li>
                      <li>
                        Permanent address:- <p>{/* address mapping here*/}</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
export default UserProfile;
