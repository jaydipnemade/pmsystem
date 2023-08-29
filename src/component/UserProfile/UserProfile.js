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
  const [candidateInfo, setCandidateInfo] = useState({});

  const [projectData, setProjectData] = useState({});
  const [personalInfoData, setPersonalInfoData] = useState({});
  const [workExperienceData, setWorkExperienceData] = useState({});
  const [educationData, seteducationData] = useState({});

  useEffect(() => {
    // Fetch bio data from the backend
    axios
      .get("/api/candidateinfo")
      .then((response) => {
        setCandidateInfo(response.data);
      })
      .catch((error) => {
        console.error("Error fetching candidate information:", error);
      });
    // Fetch project data from the backend
    axios
      .get("/api/project")
      .then((response) => {
        setProjectData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching project data:", error);
      });

    // Fetch personal info data from the backend
    axios
      .get("/api/personal-info")
      .then((response) => {
        setPersonalInfoData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching personal info data:", error);
      });

    // Fetch work experience data from the backend
    axios
      .get("/api/work-experience")
      .then((response) => {
        setWorkExperienceData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching work experience data:", error);
      });

    // Fetch qualification data from the backend
    axios
      .get("/api/educationData")
      .then((response) => {
        seteducationData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching qualification data:", error);
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
                    src={candidateInfo.profilePic || require("./test1.jpeg")}
                    // src={require("./test0.jpg")}
                    className="card-img-top  roundedCircle border "
                    alt="Profile Pic"
                  />
                </div>
              </div>
              <div>
                <Link to="/BioData" className="rounded-button">
                  <i
                    className="fa-solid fa-pencil fa-xl"
                    style={{ color: "#130f40" }}
                  ></i>
                </Link>
              </div>
              <div className="UserProfileInfoContainer">
                {/* user name */}
                <h1> {candidateInfo.name}</h1>
                {/* head tag that is education */}
                <p>{candidateInfo.bio}</p>
                <hr />
                <Button size="lg" disabled={isLoading} onClick={handleClick}>
                  {isLoading ? "Loading…" : "Genrate Resume"}
                </Button>
                <Button
                  size="lg"
                  className="blue-border-button"
                  onClick={MoveToContactInfo}
                >
                  Personal Info.
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
                      className="fa-solid fa-pencil fa-xl"
                      style={{ color: "#130f40" }}
                    ></i>
                  </Link>
                </div>
                <h1> About</h1>
                {/* <hr /> */}

                <p>{candidateInfo.about}</p>
              </div>
            </div>
          </div>

          <div className="UserProfile_container">
            <div className="UserProfile_form_container2">
              <div>
                <div className="internal_rounded-button">
                  <Link to="/WorkExperience">
                    <i
                      className="fa-solid fa-pencil fa-xl"
                      style={{ color: "#130f40" }}
                    ></i>
                  </Link>
                </div>
                <h1>Work Experience</h1>

                <ul>
                  {workExperienceData.workexperience &&
                    workExperienceData.workexperience.map(
                      (experienceItem, index) => (
                        <li key={index}>
                          <p>
                            {experienceItem.designation} <br /> At{" "}
                            {experienceItem.organization} <br />
                            From:- {experienceItem.fromDate}
                            <br />
                            To:- {experienceItem.toDate}
                            <br />
                            Description:-{experienceItem.description}
                          </p>
                        </li>
                      )
                    )}
                </ul>
              </div>
            </div>
          </div>
          <div className="UserProfile_container">
            <div className="UserProfile_form_container2">
              <div>
                <div className="internal_rounded-button">
                  <Link to="/EduProject">
                    <i
                      className="fa-solid fa-pencil fa-xl"
                      style={{ color: "#130f40" }}
                    ></i>
                  </Link>
                </div>
                <h1> Project</h1>

                <ul>
                  {projectData.projects &&
                    projectData.projects.map((projectItem, index) => (
                      <li key={index}>
                        <p>
                          Project Name: {projectItem.projectname} <br />
                          Project Description: {projectItem.projectdescription}
                        </p>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="UserProfile_container">
            <div className="UserProfile_form_container2">
              <div>
                <div className="internal_rounded-button">
                  <Link to="/Qualification">
                    <i
                      className="fa-solid fa-pencil fa-xl"
                      style={{ color: "#130f40" }}
                    ></i>
                  </Link>
                </div>
                <h1> Education</h1>

                <ul>
                  {educationData.education &&
                    educationData.education.map((educationItem, index) => (
                      <li key={index}>
                        <p>
                          Institution: {educationItem.institution} <br />
                          Degree: {educationItem.degree} <br />
                          Field: {educationItem.field} <br />
                          Start Date: {educationItem.startDate} <br />
                          End Date: {educationItem.endDate} <br />
                          Percentage: {educationItem.percentage}
                        </p>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="UserProfile_container">
            <div className="UserProfile_form_container2">
              <div>
                <div className="internal_rounded-button">
                  <Link to="/BioData">
                    <i
                      className="fa-solid fa-pencil fa-xl"
                      style={{ color: "#130f40" }}
                    ></i>
                  </Link>
                </div>
                <h1> Skills</h1>

                <p>{candidateInfo.skills}</p>
              </div>
            </div>
          </div>
          <div className="UserProfile_container" id="contactSection">
            <div className="UserProfile_form_container2">
              <div>
                <div className="internal_rounded-button">
                  <Link to="/PersonalInfo">
                    <i
                      className="fa-solid fa-pencil fa-xl"
                      style={{ color: "#130f40" }}
                    ></i>
                  </Link>
                </div>
                <h1> Personal Info</h1>
                <div
                  className="row"
                  style={{ marginLeft: "1vw", marginRight: "15%" }}
                >
                  <div className="col ">
                    <ul>
                      <li>Phone No:- {candidateInfo.mobile}</li>
                      <li>Email Id:- {candidateInfo.email}</li>
                      <li>Nationality:-{candidateInfo.nationality}</li>
                      <li>Gender:- {candidateInfo.gender}</li>
                      <li>Languages:- {candidateInfo.languages}</li>
                      <li>Hobbies:- {candidateInfo.hobbies}</li>
                      <li>Achievements:- {candidateInfo.achievements}</li>
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
