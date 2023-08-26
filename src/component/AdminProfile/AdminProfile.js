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
  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    const id = event.target.id;

    // Update the MongoDB data
    fetch("http://localhost:4000/updatestatus", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, selectedValue }),
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
  const handleAddCandidate = () => {
    const newCandidateObj = {
      id: candidates.length + 1,
      name: newCandidates,
    };

    setCandidates([...candidates, newCandidateObj]);
    setNewCandidates("");
  };
  //
  //
  //
  const handleDeleteCandidate = (candidateId) => {
    // Delete a candidate from the candidates array and update the state
    // Replace this with your actual API call to delete a candidate
    const updatedCandidates = candidates.filter(
      (candidate) => candidate.id !== candidateId
    );

    setCandidates(updatedCandidates);
  };
  //
  //
  //
  const handleAddRecruiter = () => {
    const newRecruiterObj = {
      id: recruiters.length + 1,
      name: newRecruiters,
      status: recruiterStatus,
    };

    setRecruiters([...recruiters, newRecruiterObj]);
    setNewRecruiters("");
  };
  //
  //
  //
  const handleDeleteRecruiter = (recruiterId) => {
    const updatedRecruiters = recruiters.filter(
      (recruiter) => recruiter.id !== recruiterId
    );

    setRecruiters(updatedRecruiters);
  };
  //
  //
  //

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
                <p>No of Candidate = {/* value from database*/} </p>

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

                <div className="add-section">
                  <input
                    type="text"
                    value={newCandidates}
                    onChange={(e) => setNewCandidates(e.target.value)}
                    placeholder="Enter candidate name"
                  />
                  <Button onClick={handleAddCandidate}>Add Candidate</Button>
                </div>
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
                <p>No of Recruiters = {/* value from database*/} </p>

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
                              onChange={handleSelectChange}
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
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="add-section">
                  <input
                    type="text"
                    value={newRecruiters}
                    onChange={(e) => setNewRecruiters(e.target.value)}
                    placeholder="Enter recruiter name"
                  />
                  {/* <Dropdown className="admin_dropdwon">
                    <Dropdown.Toggle id="status-dropdown">
                      {recruiterStatus}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item
                        onClick={() => setRecruiterStatus("Pending")}
                      >
                        Pending
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => setRecruiterStatus("Approved")}
                      >
                        Approved
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => setRecruiterStatus("Rejected")}
                      >
                        Rejected
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown> */}
                  <Button onClick={handleAddRecruiter}>Add Recruiter</Button>
                </div>
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
