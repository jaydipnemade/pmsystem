import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import "./AdminProfile.css";

const AdminProfile = () => {
  const [candidates, setCandidates] = useState([]);
  const [recruiters, setRecruiters] = useState([]);
  const [newCandidates, setNewCandidates] = useState([]);
  const [newRecruiters, setNewRecruiters] = useState([]);
  const [recruiterStatus, setRecruiterStatus] = useState(["Pending"]);
  const [selectedValue, setSelectedValue] = useState("");
  const [recruiterCount, setRecruiterCount] = useState(0);
  const [candidateCount, setCandidateCount] = useState(0);
// count
  useEffect(() => {
    fetch("http://localhost:9090/getcounts")
      .then((response) => response.json())
      .then((data) => {
        setRecruiterCount(data.recruiters);
        setCandidateCount(data.candidates);
      })
      .catch((error) => {
        console.error("Error fetching counts:", error);
      });
  }, []);
// approved denied n all
  const handleSelectChange = (recruiterId, selectedValue) => {
    console.log("Selected value:", selectedValue); 
    // Update the recruiter status using the PUT method
    fetch(`http://localhost:4000/api/updatestatus/${recruiterId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(selectedValue),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle success
        window.location.reload();
        console.log("Data updated successfully:", data);
      })
      .catch((error) => {
        // Handle error
        console.error("Error updating data:", error);
      });
  };
// scroll 
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
  //
  //
  //
  const [isLoading, setLoading] = useState(false);
  const [shouldNavigate, setShouldNavigate] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setShouldNavigate(true);
  };
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
const handleDeleteCandidate = (candidateId) => {
  // Make an HTTP DELETE request to the candidate deletion endpoint
  fetch(`http://localhost:4000/api/deletecandidate/${candidateId}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      // If deletion is successful, update the front-end state
      const updatedCandidates = candidates.filter(
        (candidate) => candidate.id !== candidateId
      );
      setCandidates(updatedCandidates);
    })
    .catch((error) => {
      console.error("Error deleting candidate:", error);
    });
};
  //
  //
  //
const handleDeleteRecruiter = (recruiterId) => {
  // Make an HTTP DELETE request to the recruiter deletion endpoint
  fetch(`http://localhost:4000/api/deleterecruiter/${recruiterId}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      // If deletion is successful, update the front-end state
      const updatedRecruiters = recruiters.filter(
        (recruiter) => recruiter.id !== recruiterId
      );
      setRecruiters(updatedRecruiters);
    })
    .catch((error) => {
      console.error("Error deleting recruiter:", error);
    });
};
  //
  //
  //
  useEffect(() => {
    fetch("http://localhost:9090/getcandidates") // Change the endpoint URL
      .then((response) => response.json())
      .then((data) => {
        setCandidates(data); // Assuming data is an array of candidates
      })
      .catch((error) => {
        console.error("Error fetching candidates:", error);
      });

    fetch("http://localhost:9090/getrecruiters") // Change the endpoint URL
      .then((response) => response.json())
      .then((data) => {
        setRecruiters(data); // Assuming data is an array of recruiters
      })
      .catch((error) => {
        console.error("Error fetching recruiters:", error);
      });
  }, []);

  return (
    <>
      <section className="Admin">
        <Container>
          <div className="Admin_container">
            <div className="Admin_form_container">
              <div className="Admin_form_container_inner AdminprofHead">
                {/* <div className="profHead"></div> */}
                <div className="profilePictureContainer">
                  <img
                    src={require("./AdminProfile.jpeg")}
                    className="card-img-top  roundedCircle border "
                    alt="Profile Pic"
                  />
                </div>
              </div>

              <div className="AdminInfoContainer">
                <h1>Administrator</h1>

                <hr />

                <Button
                  size="lg"
                  className="blue-border-button"
                  onClick={MoveToContactInfo}
                >
                  Candidate Info.
                </Button>
                <Link to="/Jobs">
                  <Button size="lg" className="blue-border-button">
                    Jobs Available
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/*Candidate information  */}
          <div className="Admin_container admin">
            <div className="Admin_form_container2">
              <div>
                <h1> Candidate information</h1>
                <hr className="horizontal-line" />
                <div className="line-after-heading"></div>
                <p>No of Candidate = {candidateCount} </p>

                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Contact No.</th>

                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {candidates.map((candidate) => (
                      <tr key={candidate.id}>
                        <td>{candidate.name}</td>
                        <td>{candidate.email}</td>
                        <td>{candidate.phone_number}</td>

                        <td>
                          <Button
                            variant="danger"
                            onClick={() => handleDeleteCandidate(candidate.id)}
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* Recruiters information */}
          <div className="Admin_container" id="contactSection">
            <div className="Admin_form_container2">
              <div>
                <h1> Recruiters Info</h1>
                <hr className="horizontal-line" />
                <div className="line-after-heading"></div>
                <p>No of Recruiters = {recruiterCount} </p>

                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Approved Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recruiters.map((recruiter) => (
                      <tr key={recruiter.id}>
                        <td>{recruiter.name}</td>
                        <td>{recruiter.email}</td>
                        <td>
                          <td>
                            <select
                              name="status"
                              id={recruiter.id} // This should be a unique identifier for each dropdown
                              value={recruiter.status}
                              onChange={(event) =>
                                handleSelectChange(
                                  recruiter.id,
                                  event.target.value
                                )
                              }
                            >
                              <option value="Pending">Pending</option>
                              <option value="Approved">Approved</option>
                              <option value="Rejected">Rejected</option>
                            </select>
                          </td>
                        </td>
                        <td>
                          <Button
                            variant="danger"
                            onClick={() => handleDeleteRecruiter(recruiter.id)}
                          >
                            Delete
                          </Button>
                          <Button
                            className="approve-button"
                            onClick={() =>
                              handleSelectChange(recruiter.id, "Approved")
                            }
                          >
                            Approve
                          </Button>
                          <Button
                            className="reject-button"
                            onClick={() =>
                              handleSelectChange(recruiter.id, "Rejected")
                            }
                          >
                            Reject
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/*ToDo*/}
          {/* server hits*/}
          {/* total no of jobs*/}

          {/* Feedback */}
          <div className="Admin_container">
            <div className="Admin_form_container2">
              <div>
                <h1>Feedback</h1>
                <hr className="horizontal-line" />
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone No</th>
                      <th>Feedback</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {candidates.map((feedbacks) => (
                      <tr key={feedbacks.id}>
                        <td>{feedbacks.name}</td>
                        <td>{feedbacks.email}</td>
                        <td>{feedbacks.phoneNo}</td>
                        <td>
                          <textarea
                            className="Feedback-textbox"
                            readOnly
                            value={feedbacks.comment}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
export default AdminProfile;
