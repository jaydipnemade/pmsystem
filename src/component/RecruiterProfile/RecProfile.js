import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";

import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import axios from "axios";

// import CarService from "../../services/CarService";
// import RecService from "../../services/RecService";
// import BookingService from "../../services/BookingService";
import "./RecProfile.css";

const RecProfile = () => {
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
  //
  //
  //

  useEffect(() => {
    const navigateTimeout = setTimeout(() => {
      if (shouldNavigate) {
        // Navigate to another component
        // You can replace '/another-component' with the desired path
        window.location.href = "/CreateJob";
      }
    }, 2000);

    return () => {
      clearTimeout(navigateTimeout);
    };
  }, [shouldNavigate]);
  //
  //
  //
  const handleClick = () => {
    setLoading(true);
    setShouldNavigate(true);
  };
  //
  //
  //

  const handleClose = () => setShow(false);

  const [show, setShow] = useState(false);
  const [jobTitles, setJobTitles] = useState([]);

  const handleShow = async () => {
    try {
      const response = await axios.get("/api/recruiter/jobtitles"); // Replace with your API endpoint
      setJobTitles(response.data);
      setShow(true);
    } catch (error) {
      console.error("Error fetching job titles:", error);
    }
  };
  //
  //
  //
  const MoveToContactInfo = () => {
    // Find the element with the id "contactSection"
    const section = document.getElementById("contactSection");

    // Scroll to the section
    section.scrollIntoView({ behavior: "smooth" });
  };
  //
  //
  //
   const [userData, setUserData] = useState({
     name: "",
     personalInfo: "",
     profileImage: null, // Initialize with null
   });
    useEffect(() => {
      const fetchUserData = async () => {
        try {
          const response = await axios.get("/api/recruiter/profile"); // Replace with your API endpoint
          const userDataFromApi = response.data;
          setUserData(userDataFromApi);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };

      fetchUserData();
    }, []);
  const defaultProfileImage = require("./noimagefounf.jpeg");
  // 
  // 
  // 

  return (
    <>
      <section className="RecProfile">
        <Container>
          <div className="RecProfile_container">
            <div className="RecProfile_form_container">
              <div className="RecProfile_form_container_inner profHead">
                {/* <div className="profHead"></div> */}
                <div className="profilePictureContainer">
                  <img
                    src={userData.profileImage || defaultProfileImage}
                    className="card-img-top  roundedCircle border "
                    alt="Profile Pic"
                  />
                </div>
              </div>
              <div>
                <Link to="/RecruiterInfo" className="rounded-button">
                  <i
                    className="fa-solid fa-pencil fa-2xl"
                    style={{ color: "#130f40" }}
                  ></i>
                </Link>
              </div>
              <div className="RecProfileInfoContainer">
                {/* Rec name */}
                <h1>{userData.company_name}.</h1>
                {/* head tag that is education */}
                <p>{userData.heading}</p>
                <hr />
                <Button size="lg" disabled={isLoading} onClick={handleClick}>
                  {isLoading ? "Loading…" : "Create Job"}
                </Button>
                <Button
                  size="lg"
                  className="blue-border-button"
                  onClick={MoveToContactInfo}
                >
                  Contact Info.
                </Button>
                <Link>
                  <Button
                    size="lg"
                    className="blue-border-button"
                    onClick={handleShow}
                  >
                    Jobs Created
                  </Button>
                </Link>
                <Offcanvas show={show} onHide={handleClose}>
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Jobs Created by you</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    {jobTitles.length === 0 ? (
                      <p>No jobs created yet.</p>
                    ) : (
                      <ol>
                        {jobTitles.map((title, index) => (
                          <li key={index}>{title}</li>
                        ))}
                      </ol>
                    )}
                  </Offcanvas.Body>
                </Offcanvas>
              </div>
            </div>
          </div>
          <div className="RecProfile_container">
            <div className="RecProfile_form_container2">
              <div>
                <div className="internal_rounded-button">
                  <Link to="/RecruiterInfo">
                    <i
                      className="fa-solid fa-pencil fa-2xl"
                      style={{ color: "#130f40" }}
                    ></i>
                  </Link>
                </div>
                <h1> About</h1>

                <p>{userData.description}</p>
              </div>
            </div>
          </div>
          <div className="RecProfile_container">
            <div className="RecProfile_form_container2">
              <div>
                <div className="internal_rounded-button">
                  <Link to="/RecruiterInfo">
                    <i
                      className="fa-solid fa-pencil fa-2xl"
                      style={{ color: "#130f40" }}
                    ></i>
                  </Link>
                </div>
                <h1>Technologies</h1>

                <p>{userData.technologies}</p>
              </div>
            </div>
          </div>

          <div className="RecProfile_container" id="contactSection">
            <div className="RecProfile_form_container2">
              <div>
                <div className="internal_rounded-button">
                  <Link to="/RecruiterInfo">
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
                      <li>Phone No:- {userData.cno}</li>
                      <li>Email Id:-{userData.email}</li>
                      
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
export default RecProfile;
