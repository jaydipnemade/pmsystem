import React from "react";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import "./CreateJob.css";
import axios from "axios";

function CreateJob() {
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

  // logic
  const [job, setJob] = useState({
    title: "",
    // jobProfile: "",
    description: "",
    requirements: "",
    // skills: "",
    // location: "",
    // salaryRange: "",
    // lastDate: "",
    // contactInfo: "",
    // positions: "",
    status: "Open",
  });
  const [validationErrors, setValidationErrors] = useState({
    title: "",
    // jobProfile: "",
    description: "",
    requirements: "",
    // skills: "",
    // location: "",
    // salaryRange: "",
    // lastDate: "",
    // contactInfo: "",
    // positions: "",
    status: "Open",
  });

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    if (!job.title.match(/^[A-Za-z]/)) {
      errors.title = "*required";
      isValid = false;
    }

    if (!job.description.match(/^[A-Za-z]/)) {
      errors.description = "Description must start with an alphabet character.";
      isValid = false;
    }

    if (!job.requirements.match(/^[A-Za-z]/)) {
      errors.requirements =
        "Requirements must start with an alphabet character.";
      isValid = false;
    }
    // if (!job.skills.match(/^[A-Za-z]/)) {
    //   errors.skills = "Skills must start with an alphabet character.";
    //   isValid = false;
    // }
    // if (!job.location.match(/^[A-Za-z]/)) {
    //   errors.location = "Location must start with an alphabet character.";
    //   isValid = false;
    // }
    // if (!job.salaryRange.match(/^\d/)) {
    //   errors.salaryRange = "Salary Range must start with a number.";
    //   isValid = false;
    // }
    // if (!job.contactInfo.match(/^[A-Za-z]/)) {
    //   errors.contactInfo =
    //     "Contact Info must start with an alphabet character.";
    //   isValid = false;
    // }
    // if (!job.positions.match(/^\d/)) {
    //   errors.positions = "Number of Opening Positions is required.";
    //   isValid = false;
    // }

    setValidationErrors(errors);
    return isValid;
  };

  const handleJobSubmit = async () => {
    const isFormValid = validateForm();

    if (!isFormValid) {
      validationErrors.status = "please complete the form.";
      return;
    }
    console.log("Submitting job data:", job);

    try {
      const response = await axios.post("/api/create-job", job);
      console.log("Response from backend:", response);

      if (response.status === 200) {
        // The job was successfully created on the backend
        window.location.href = "/Jobs"; // Redirect to a success page or update UI
      } else {
        validationErrors.status = "Error while creating the job.";
        // Handle error response here, show error message to the user, etc.
      }
    } catch (error) {
      validationErrors.status = "An error occurred.";
      // Handle network or other errors here
    }
  };
  return (
    <>
      <section>
        <div className="MainJobContainer">
          <div className="JobContainer mt-4 ">
            <Form>
              <div className="headImageContainer"></div>
              <Form.Group className="mb-3" controlId="formGroupTitle">
                <h1>Create Job</h1>
                <Form.Label>
                  <p>Enter Title for job</p>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Title"
                  value={job.title}
                  onChange={(e) => {
                    setJob({ ...job, title: e.target.value });
                    setValidationErrors({ ...validationErrors, title: "" });
                  }}
                />
                {validationErrors.title && (
                  <p className="error">{validationErrors.title}</p>
                )}
              </Form.Group>
              {/* <Form.Group className="mb-3" controlId="formGroupTitle">
                <Form.Label>
                  <p>Job Profile</p>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Job Profile"
                  value={job.jobProfile}
                  onChange={(e) => {
                    setJob({ ...job, jobProfile: e.target.value });
                    setValidationErrors({
                      ...validationErrors,
                      jobProfile: "",
                    });
                  }}
                />
                {validationErrors.jobProfile && (
                  <p className="error">{validationErrors.jobProfile}</p>
                )}
              </Form.Group> */}
              <Form.Group className="mb-3" controlId="formGroupDescription">
                <Form.Label>
                  <p>Enter Description</p>
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Description"
                  value={job.description}
                  onChange={(e) => {
                    setJob({ ...job, description: e.target.value });
                    setValidationErrors({
                      ...validationErrors,
                      description: "",
                    });
                  }}
                />
                {validationErrors.description && (
                  <p className="error">{validationErrors.description}</p>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupRequirements">
                <Form.Label>
                  <p>Requirements</p>
                </Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Requirements"
                  value={job.requirements}
                  onChange={(e) => {
                    setJob({ ...job, requirements: e.target.value });
                    setValidationErrors({
                      ...validationErrors,
                      requirements: "",
                    });
                  }}
                />
                {validationErrors.requirements && (
                  <p className="error">{validationErrors.requirements}</p>
                )}
              </Form.Group>
              {/* <Form.Group className="mb-3" controlId="formGroupSkills">
                <Form.Label>
                  <p>Skills required</p>
                </Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Skills"
                  value={job.skills}
                  onChange={(e) => {
                    setJob({ ...job, skills: e.target.value }); setValidationErrors({
                      ...validationErrors,
                      skills: "",
                    });
                  }}
                />
                {validationErrors.skills && (
                  <p className="error">{validationErrors.skills}</p>
                )}
              </Form.Group> */}
              {/* <Form.Group className="mb-3" controlId="formGroupLocation">
                <Form.Label>
                  <p>Location</p>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Location"
                  value={job.location}
                  onChange={(e) => {
                    setJob({ ...job, location: e.target.value });
                     setValidationErrors({
                       ...validationErrors,
                       location: "",
                     });
                  }}
                />
                {validationErrors.location && (
                  <p className="error">{validationErrors.location}</p>
                )}
              </Form.Group> */}
              {/* <Form.Group className="mb-3" controlId="formGroupSalaryRange">
                <Form.Label>
                  <p>Salary Range</p>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Salary Range"
                  value={job.salaryRange}
                  onChange={(e) => {
                    setJob({ ...job, salaryRange: e.target.value }); setValidationErrors({
                      ...validationErrors,
                      salaryRange: "",
                    });
                  }}
                />
                {validationErrors.salaryRange && (
                  <p className="error">{validationErrors.salaryRange}</p>
                )}
              </Form.Group> */}
              {/* <Form.Group className="mb-3" controlId="formGroupLastDate">
                <Form.Label>
                  <p>Last Date of Apply</p>
                </Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Last Date of Apply"
                  value={job.lastDate}
                  onChange={(e) => {
                    setJob({ ...job, lastDate: e.target.value }); setValidationErrors({
                      ...validationErrors,
                      lastDate: "",
                    });
                  }}
                />
                {validationErrors.lastDate && (
                  <p className="error">{validationErrors.lastDate}</p>
                )}
              </Form.Group> */}
              {/* <Form.Group className="mb-3" controlId="formGroupContactInfo">
                <Form.Label>
                  <p>Contact Info</p>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Contact Info"
                  value={job.contactInfo}
                  onChange={(e) => {
                    setJob({ ...job, contactInfo: e.target.value });
                     setValidationErrors({
                       ...validationErrors,
                       contactInfo: "",
                     });
                  }}
                />
                {validationErrors.contactInfo && (
                  <p className="error">{validationErrors.contactInfo}</p>
                )}
              </Form.Group> */}
              {/* <Form.Group className="mb-3" controlId="formGroupPositions">
                <Form.Label>
                  <p>Number of Opening Positions</p>
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Number of Opening Positions"
                  value={job.positions}
                  onChange={(e) => {
                    setJob({ ...job, positions: e.target.value }); setValidationErrors({
                      ...validationErrors,
                      positions: "",
                    });
                  }}
                />
              </Form.Group> */}
              <Form.Group className="mb-3" controlId="formGroupStatus">
                <Form.Label>
                  <p>Status</p>
                </Form.Label>
                <Form.Select
                  value={job.status}
                  onChange={(e) => {
                    setJob({ ...job, status: e.target.value });
                    setValidationErrors({
                      ...validationErrors,
                      status: "",
                    });
                  }}
                >
                  <option value="Open">Open</option>
                  <option value="Closed">Closed</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupSubmit">
                <Button
                  className={"JobFormSubmitButton"}
                  type="button"
                  variant="primary"
                  onClick={handleJobSubmit}
                >
                  Create Job
                </Button>
              </Form.Group>
            </Form>
          </div>
        </div>
      </section>
    </>
  );
}

export default CreateJob;
