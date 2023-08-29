import React from "react";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link

function PersonalInfo() {
  const [personalInfo, setPersonalInfo] = useState({
    dob: "", // Date of Birth
    gender: "",
    nationality: "",
    languageKnown: "",
    hobbies: "",
    achiever: "",
    technical: "",
  });
  const [userId, setUserId] = useState(""); // Initialize with an empty string

  //Validation
  const [personalInfoValidationErrors, setPersonalInfoValidationErrors] =
    useState({
      dob: "",
      gender: "",
      nationality: "",
      languageKnown: "",
      hobbies: "",
      achiever: "",
      technical: "",
    });

  const personalInfoValidateForm = () => {
    const errors = {};
    let isValid = true;

    if (!personalInfo.dob.match(/^\d{4}-\d{2}-\d{2}$/)) {
      window.alert("Invalid Date of Birth. Please use YYYY-MM-DD format.");
      errors.dob = "Invalid Date of Birth. Please use YYYY-MM-DD format.";
      setPersonalInfoValidationErrors(errors);
      return false;
    }

    if (!personalInfo.gender) {
      window.alert("Gender is required");
      errors.gender = "Gender is required";
      setPersonalInfoValidationErrors(errors);
      return false;
    }

    if (!personalInfo.nationality) {
      window.alert("Nationality is required");
      errors.nationality = "Nationality is required";
      setPersonalInfoValidationErrors(errors);
      return false;
    }

    if (!personalInfo.languageKnown.match(/^[A-Za-z, ]+$/)) {
      window.alert(
        "Language Known must only contain letters, commas, and spaces"
      );
      errors.languageKnown =
        "Language Known must only contain letters, commas, and spaces";
      setPersonalInfoValidationErrors(errors);
      return false;
    }

    if (!personalInfo.hobbies.match(/^[A-Za-z, ]+$/)) {
      window.alert("Hobbies must only contain letters, commas, and spaces");
      errors.hobbies = "Hobbies must only contain letters, commas, and spaces";
      setPersonalInfoValidationErrors(errors);
      return false;
    }

    if (!personalInfo.achiever.match(/^[A-Za-z, ]+$/)) {
      window.alert(
        "Achiever details must only contain letters, commas, and spaces"
      );
      errors.achiever =
        "Achiever details must only contain letters, commas, and spaces";
      setPersonalInfoValidationErrors(errors);
      return false;
    }

    if (!personalInfo.technical.match(/^[A-Za-z, ]+$/)) {
      window.alert(
        "Technical skills must only contain letters, commas, and spaces"
      );
      errors.technical =
        "Technical skills must only contain letters, commas, and spaces";
      setPersonalInfoValidationErrors(errors);
      return false;
    }

    setPersonalInfoValidationErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValidate = personalInfoValidateForm();
    if (!isValidate) {
      window.alert("Please fill in all the required fields.");
      return;
    }

    try {
      const response = await axios.put(
        `http://localhost:9090/api/resume/submit-personalInfo/${userId}`,
        personalInfo
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
              <h2> Personal Info </h2>
              <Form.Group className="mb-3" controlId="formGroupDateOfBirth">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Date of Birth"
                  value={personalInfo.dob}
                  onChange={(e) =>
                    setPersonalInfo({ ...personalInfo, dob: e.target.value })
                  }
                />
                {personalInfoValidationErrors.dob && (
                  <p className="error">{personalInfoValidationErrors.dob}</p>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupGender">
                <Form.Label>Gender</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Gender"
                  value={personalInfo.gender}
                  onChange={(e) =>
                    setPersonalInfo({ ...personalInfo, gender: e.target.value })
                  }
                />
                {personalInfoValidationErrors.gender && (
                  <p className="error">{personalInfoValidationErrors.gender}</p>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupNationality">
                <Form.Label>Nationality</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nationality"
                  value={personalInfo.nationality}
                  onChange={(e) =>
                    setPersonalInfo({
                      ...personalInfo,
                      nationality: e.target.value,
                    })
                  }
                />
                {personalInfoValidationErrors.nationality && (
                  <p className="error">
                    {personalInfoValidationErrors.nationality}
                  </p>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupLanguageKnown">
                <Form.Label>Language Known</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Language Known"
                  value={personalInfo.languageKnown}
                  onChange={(e) =>
                    setPersonalInfo({
                      ...personalInfo,
                      languageKnown: e.target.value,
                    })
                  }
                />
                {personalInfoValidationErrors.languageKnown && (
                  <p className="error">
                    {personalInfoValidationErrors.languageKnown}
                  </p>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupHobbies">
                <Form.Label>Hobbies</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Hobbies"
                  value={personalInfo.hobbies}
                  onChange={(e) =>
                    setPersonalInfo({
                      ...personalInfo,
                      hobbies: e.target.value,
                    })
                  }
                />
                {personalInfoValidationErrors.hobbies && (
                  <p className="error">
                    {personalInfoValidationErrors.hobbies}
                  </p>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupAchiever">
                <Form.Label>Achiever</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Achiever"
                  value={personalInfo.achiever}
                  onChange={(e) =>
                    setPersonalInfo({
                      ...personalInfo,
                      achiever: e.target.value,
                    })
                  }
                />
                {personalInfoValidationErrors.achiever && (
                  <p className="error">
                    {personalInfoValidationErrors.achiever}
                  </p>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupTechnicalSkills">
                <Form.Label>Technical Skills</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Technical Skills"
                  value={personalInfo.technical}
                  onChange={(e) =>
                    setPersonalInfo({
                      ...personalInfo,
                      technical: e.target.value,
                    })
                  }
                />
                {personalInfoValidationErrors.technical && (
                  <p className="error">
                    {personalInfoValidationErrors.technical}
                  </p>
                )}
              </Form.Group>

              <Button type="submit" variant="primary" onClick={handleSubmit} className="ButtoN  btn btn-primary btn-lg mb-5 ms-auto me-auto  rounded-pill ">
                Submit
              </Button>
              {/* Button to navigate to next step */}
              <Link to="/qualification">prev</Link>
            </Form>
          </div>
        </div>
      </section>
    </>
  );
}

export default PersonalInfo;
