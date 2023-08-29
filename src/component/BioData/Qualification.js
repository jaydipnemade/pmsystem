import React from "react";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link

function Qualification() {
  const [qualification, setQualification] = useState({
    institutionName: "",
    degree: "",
    field: "",
    start: "",
    endDate: "",
    percentage: "",
  });

  const [userId, setUserId] = useState(""); // Initialize with an empty string

  //qualification Validation
  const [qualificationValidationErrors, setQualificationValidationErrors] =
    useState({
      institutionName: "",
      degree: "",
      field: "",
      start: "",
      endDate: "",
      percentage: "",
    });

  const qualificationValidateForm = () => {
    const errors = {};
    let isValid = true;

    if (!qualification.institutionName.match(/^[A-Za-z]/)) {
      window.alert(
        "Institution Name must start with an alphabet character && Should not be empty"
      );
      errors.institutionName =
        "Institution Name must start with an alphabet character && Should not be empty";
      setQualificationValidationErrors(errors);
      return false;
    }

    if (!qualification.degree.match(/^[A-Za-z]/)) {
      window.alert(
        "Degree must start with an alphabet character && Should not be empty"
      );
      errors.degree =
        "Degree must start with an alphabet character && Should not be empty";
      setQualificationValidationErrors(errors);
      return false;
    }

    if (!qualification.field.match(/^[A-Za-z]/)) {
      window.alert(
        "Field must start with an alphabet character && Should not be empty"
      );
      errors.field =
        "Field must start with an alphabet character && Should not be empty";
      setQualificationValidationErrors(errors);
      return false;
    }

    if (!qualification.start.match(/^\d{4}-\d{2}-\d{2}$/)) {
      window.alert("Invalid Start Date. Please use YYYY-MM-DD format.");
      errors.start = "Invalid Start Date. Please use YYYY-MM-DD format.";
      setQualificationValidationErrors(errors);
      return false;
    }

    if (!qualification.endDate.match(/^\d{4}-\d{2}-\d{2}$/)) {
      window.alert("Invalid endDate Date. Please use YYYY-MM-DD format.");
      errors.endDate = "Invalid endDate Date. Please use YYYY-MM-DD format.";
      setQualificationValidationErrors(errors);
      return false;
    }

    if (!qualification.percentage.match(/^\d+(\.\d{1,2})?$/)) {
      window.alert("Invalid Percentage");
      errors.percentage = "Invalid Percentage";
      setQualificationValidationErrors(errors);
      return false;
    }

    setQualificationValidationErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValidate = qualificationValidateForm();
    if (!isValidate) {
      window.alert("Please fill in all the required fields.");
      return;
    }

    try {
      const response = await axios.put(
        `http://localhost:9090/api/resume/submit-qualification/${userId}`,
        qualification
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
              <div className="headUserImageContainer"></div>
              <h2> Qualification Input </h2>
              <Form.Group className="mb-3" controlId="formGroupInstitutionName">
                <Form.Label>Institution Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Institution Name"
                  value={qualification.institutionName}
                  onChange={(e) =>
                    setQualification({
                      ...qualification,
                      institutionName: e.target.value,
                    })
                  }
                />
                {qualificationValidationErrors.institutionName && (
                  <p className="error">
                    {qualificationValidationErrors.institutionName}
                  </p>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupDegree">
                <Form.Label>Degree</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Degree"
                  value={qualification.degree}
                  onChange={(e) =>
                    setQualification({
                      ...qualification,
                      degree: e.target.value,
                    })
                  }
                />
                {qualificationValidationErrors.degree && (
                  <p className="error">
                    {qualificationValidationErrors.degree}
                  </p>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupField">
                <Form.Label>Field</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Field"
                  value={qualification.field}
                  onChange={(e) =>
                    setQualification({
                      ...qualification,
                      field: e.target.value,
                    })
                  }
                />
                {qualificationValidationErrors.field && (
                  <p className="error">{qualificationValidationErrors.field}</p>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupStartDate">
                <Form.Label>Start Date</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Start Date"
                  value={qualification.start}
                  onChange={(e) =>
                    setQualification({
                      ...qualification,
                      start: e.target.value,
                    })
                  }
                />
                {qualificationValidationErrors.start && (
                  <p className="error">{qualificationValidationErrors.start}</p>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupEndDate">
                <Form.Label>End Date</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="End Date"
                  value={qualification.endDate}
                  onChange={(e) =>
                    setQualification({
                      ...qualification,
                      endDate: e.target.value,
                    })
                  }
                />
                {qualificationValidationErrors.endDate && (
                  <p className="error">
                    {qualificationValidationErrors.endDate}
                  </p>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPercentage">
                <Form.Label>Percentage</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Percentage"
                  value={qualification.percentage}
                  onChange={(e) =>
                    setQualification({
                      ...qualification,
                      percentage: e.target.value,
                    })
                  }
                />
                {qualificationValidationErrors.percentage && (
                  <p className="error">
                    {qualificationValidationErrors.percentage}
                  </p>
                )}
              </Form.Group>
              <Button
                type="submit"
                variant="primary"
                onClick={handleSubmit}
                className="ButtoN  btn btn-primary btn-lg mb-5 ms-auto me-auto  rounded-pill "
              >
                Submit
              </Button>
              {/* Button to navigate to next step */}
              <Link to="/EduProject">Prev</Link>-
              <Link to="/PersonalInfo">Next</Link>
            </Form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Qualification;
