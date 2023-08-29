import React from "react";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link

function WorkExperience() {
  const [workExperience, setWorkExperience] = useState({
    destination: "",
    organization: "",
    fromDate: "",
    toDate: "",
    natureOfWork: "",
  });
  const [userId, setUserId] = useState(""); // Initialize with an empty string

  // WorkExperinence Validation
  const [workExperienceValidationErrors, setWorkExperienceValidationErrors] =
    useState([
      {
        destination: "",
        organization: "",
        fromDate: "",
        toDate: "",
        natureOfWork: "",
      },
    ]);

  const workExperienceValidateForm = () => {
    const errors = {};
    let isValid = true;

    if (!workExperience.destination.match(/^[A-Za-z]/)) {
      window.alert(
        "Destination must start with an alphabet character && Should not be empty"
      );
      errors.destination =
        "Destination must start with an alphabet character && Should not be empty";
      setWorkExperienceValidationErrors(errors);
      return false;
    }

    if (!workExperience.organization.match(/^[A-Za-z]/)) {
      window.alert(
        "Organization must start with an alphabet character && Should not be empty"
      );
      errors.organization =
        "Organization must start with an alphabet character && Should not be empty";
      setWorkExperienceValidationErrors(errors);
      return false;
    }

    if (!workExperience.fromDate.match(/^\d{4}-\d{2}-\d{2}$/)) {
      window.alert("Invalid From Date. Please use YYYY-MM-DD format.");
      errors.fromDate = "Invalid From Date. Please use YYYY-MM-DD format.";
      setWorkExperienceValidationErrors(errors);
      return false;
    }

    if (!workExperience.toDate.match(/^\d{4}-\d{2}-\d{2}$/)) {
      window.alert("Invalid To Date. Please use YYYY-MM-DD format.");
      errors.toDate = "Invalid To Date. Please use YYYY-MM-DD format.";
      setWorkExperienceValidationErrors(errors);
      return false;
    }

    if (!workExperience.natureOfWork.match(/^[A-Za-z]/)) {
      window.alert(
        "Nature of Work must start with an alphabet character && Should not be empty"
      );
      errors.natureOfWork =
        "Nature of Work must start with an alphabet character && Should not be empty";
      setWorkExperienceValidationErrors(errors);
      return false;
    }

    setWorkExperienceValidationErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValidate = workExperienceValidateForm();
    if (!isValidate) {
      window.alert("Please fill in all the required fields.");
      return;
    }

    try {
      const response = await axios.put(
        `http://localhost:9090/api/resume/submit-workExperience/${userId}`,
        workExperience
      );
      window.alert("Data Added ");
    } catch (error) {
      window.alert("error : " + error);
    }
  };
  return (
    <>
      <section>
        <div className="MainJobContainer ">
          <div className="JobContainer  mt-4">
            <Form>
              <h2> Work Experience </h2>
              <Form.Group className="mb-3" controlId="formGroupDestination">
                <Form.Label>Destination</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Destination"
                  value={workExperience.destination}
                  onChange={(e) =>
                    setWorkExperience({
                      ...workExperience,
                      destination: e.target.value,
                    })
                  }
                />
                {workExperienceValidationErrors.destination && (
                  <p className="error">
                    {workExperienceValidationErrors.destination}
                  </p>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupOrganization">
                <Form.Label>Organization</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Organization"
                  value={workExperience.organization}
                  onChange={(e) =>
                    setWorkExperience({
                      ...workExperience,
                      organization: e.target.value,
                    })
                  }
                />
                {workExperienceValidationErrors.organization && (
                  <p className="error">
                    {workExperienceValidationErrors.organization}
                  </p>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupFromDate">
                <Form.Label>From Date</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="From Date"
                  value={workExperience.fromDate}
                  onChange={(e) =>
                    setWorkExperience({
                      ...workExperience,
                      fromDate: e.target.value,
                    })
                  }
                />
                {workExperienceValidationErrors.fromDate && (
                  <p className="error">
                    {workExperienceValidationErrors.fromDate}
                  </p>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupToDate">
                <Form.Label>To Date</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="To Date"
                  value={workExperience.toDate}
                  onChange={(e) =>
                    setWorkExperience({
                      ...workExperience,
                      toDate: e.target.value,
                    })
                  }
                />
                {workExperienceValidationErrors.toDate && (
                  <p className="error">
                    {workExperienceValidationErrors.toDate}
                  </p>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupNatureOfWork">
                <Form.Label>Nature of Work</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nature of Work"
                  value={workExperience.natureOfWork}
                  onChange={(e) =>
                    setWorkExperience({
                      ...workExperience,
                      natureOfWork: e.target.value,
                    })
                  }
                />
                {workExperienceValidationErrors.natureOfWork && (
                  <p className="error">
                    {workExperienceValidationErrors.natureOfWork}
                  </p>
                )}
              </Form.Group>
              <Button type="submit" variant="primary" onClick={handleSubmit}>
                Submit
              </Button>
              {/* Button to navigate to next step */}
              <Link to="/JobListings">Next</Link>
            </Form>
          </div>
        </div>
      </section>
    </>
  );
}

export default WorkExperience;