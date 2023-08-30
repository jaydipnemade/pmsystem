import React from "react";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link

function PersonalInfo() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    mobile: "",
    gender: "",
    nationality: "",
    languages: "",
    hobbies: "",
    skills: "",
    achievements: "",
    about: "",
  });
  const [userId, setUserId] = useState(""); // Initialize with an empty string
  const [profImgs, setProfImgs] = useState([]);
  //Validation
  const [personalInfoValidationErrors, setPersonalInfoValidationErrors] =
    useState({
      name: "",
      email: "",
      mobile: "",
      gender: "",
      nationality: "",
      languages: "",
      hobbies: "",
      skills: "",
      achievements: "",
      about: "",
    });

  const personalInfoValidateForm = () => {
    const errors = {};
    let isValid = true;

    if (!personalInfo.name.match(/^[A-Za-z, ]+$/)) {
      // window.alert(
      //   "Language Known must only contain letters, commas, and spaces"
      // );
      errors.name =
        "Language Known must only contain letters, commas, and spaces";
      // setPersonalInfoValidationErrors(errors);
      // return false;
    }
    //
    if (!personalInfo.email.match(/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/)) {
      window.alert("Invalid Email. Please enter a valid email address.");
      errors.email = "Invalid Email. Please enter a valid email address.";
      setPersonalInfoValidationErrors(errors);
      return false;
    }
    //
    if (!personalInfo.mobile.match(/^\d{10}$/)) {
      window.alert("Invalid Mobile Number. Please enter a 10-digit number.");
      errors.mobile = "Invalid Mobile Number. Please enter a 10-digit number.";
      setPersonalInfoValidationErrors(errors);
      return false;
    }
    //

    if (!personalInfo.gender) {
      window.alert("Gender is required");
      errors.gender = "Gender is required";
      setPersonalInfoValidationErrors(errors);
      return false;
    }
    //
    if (!personalInfo.nationality) {
      window.alert("Nationality is required");
      errors.nationality = "Nationality is required";
      setPersonalInfoValidationErrors(errors);
      return false;
    }
    //
    if (!personalInfo.languages.match(/^[A-Za-z, ]+$/)) {
      // window.alert(
      //   "Language Known must only contain letters, commas, and spaces"
      // );
      errors.languages =
        "Language Known must only contain letters, commas, and spaces";
      // setPersonalInfoValidationErrors(errors);
      // return false;
    }
    //
    if (!personalInfo.hobbies.match(/^[A-Za-z, ]+$/)) {
      window.alert("Hobbies must only contain letters, commas, and spaces");
      errors.hobbies = "Hobbies must only contain letters, commas, and spaces";
      setPersonalInfoValidationErrors(errors);
      return false;
    }
    //
    if (!personalInfo.skills.match(/^[A-Za-z, ]+$/)) {
      window.alert(
        "Technical skills must only contain letters, commas, and spaces"
      );
      errors.skills =
        "Technical skills must only contain letters, commas, and spaces";
      setPersonalInfoValidationErrors(errors);
      return false;
    }
    //
    if (!personalInfo.achievements.match(/^[A-Za-z, ]+$/)) {
      window.alert(
        "Achiever details must only contain letters, commas, and spaces"
      );
      errors.achievements =
        "Achiever details must only contain letters, commas, and spaces";
      setPersonalInfoValidationErrors(errors);
      return false;
    }
    if (!personalInfo.about.match(/^[A-Za-z, ]+$/)) {
      window.alert(
        "about details must only contain letters, commas, and spaces"
      );
      errors.about =
        "about details must only contain letters, commas, and spaces";
      setPersonalInfoValidationErrors(errors);
      return false;
    }

    setPersonalInfoValidationErrors(errors);
    return isValid;
  };
  //
  //
 
  let base64code = "";

  const onLoad = (fileString) => {
    this.base64code = fileString;
  };
  const getBase64 = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      onLoad(reader.result);
    };
    // alert("Product added Successfully");
  };

  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValidate = personalInfoValidateForm();
    if (!isValidate) {
      window.alert("Please fill in all the required fields.");
      return;
    }

    try {
      const formData = new FormData();
      profImgs.forEach((img, index) => {
        formData.append(`image${index}`, img);
      });
      formData.append("name", personalInfo.name);
      formData.append("email", personalInfo.email);
      formData.append("mobile", personalInfo.mobile);
      formData.append("gender", personalInfo.gender);
      formData.append("nationality", personalInfo.nationality);
      formData.append("languages", personalInfo.languages);
      formData.append("hobbies", personalInfo.hobbies);
      formData.append("skills", personalInfo.skills);
      formData.append("achievements", personalInfo.achievements);
      formData.append("about", personalInfo.about);

      const response = await axios.post(
        "http://localhost:9090/api/submit-personalInfo",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      window.alert("Data Added ");
      setSubmissionSuccess(true);
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
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  value={personalInfo.name}
                  onChange={(e) =>
                    setPersonalInfo({ ...personalInfo, name: e.target.value })
                  }
                />
                {personalInfoValidationErrors.name && (
                  <p className="error">{personalInfoValidationErrors.name}</p>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Your Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  value={personalInfo.email}
                  onChange={(e) =>
                    setPersonalInfo({ ...personalInfo, email: e.target.value })
                  }
                />
                {personalInfoValidationErrors.email && (
                  <p className="error">{personalInfoValidationErrors.email}</p>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupDateOfBirth">
                <Form.Label>Mobile</Form.Label>
                <Form.Control
                  type="mob"
                  placeholder="Mobile No"
                  value={personalInfo.mobile}
                  onChange={(e) =>
                    setPersonalInfo({ ...personalInfo, mobile: e.target.value })
                  }
                />
                {personalInfoValidationErrors.mobile && (
                  <p className="error">{personalInfoValidationErrors.mobile}</p>
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
                  value={personalInfo.languages}
                  onChange={(e) =>
                    setPersonalInfo({
                      ...personalInfo,
                      languages: e.target.value,
                    })
                  }
                />
                {personalInfoValidationErrors.languages && (
                  <p className="error">
                    {personalInfoValidationErrors.languages}
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
              <Form.Group className="mb-3" controlId="formGroupHobbies">
                <Form.Label>Skills</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="skills"
                  value={personalInfo.skills}
                  onChange={(e) =>
                    setPersonalInfo({
                      ...personalInfo,
                      skills: e.target.value,
                    })
                  }
                />
                {personalInfoValidationErrors.skills && (
                  <p className="error">{personalInfoValidationErrors.skills}</p>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupAchiever">
                <Form.Label>Achievements</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Achievements"
                  value={personalInfo.achievements}
                  onChange={(e) =>
                    setPersonalInfo({
                      ...personalInfo,
                      achievements: e.target.value,
                    })
                  }
                />
                {personalInfoValidationErrors.achievements && (
                  <p className="error">
                    {personalInfoValidationErrors.achievements}
                  </p>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupTechnicalSkills">
                <Form.Label>About</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Technical Skills"
                  value={personalInfo.about}
                  onChange={(e) =>
                    setPersonalInfo({
                      ...personalInfo,
                      about: e.target.value,
                    })
                  }
                />
                {personalInfoValidationErrors.about && (
                  <p className="error">{personalInfoValidationErrors.about}</p>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupImage">
                <Form.Label>Upload Profile Image</Form.Label>
                <Form.Control
                  type="file"
                  onChange={(p) => {
                    const file = p.target.files[0];
                    // getBase64(file);
                    setProfImgs([file]);
                  }}
                  required
                />
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
              {submissionSuccess && (
                <Link to="/UserProfile">Go to UserProfile</Link>
              )}
            </Form>
          </div>
        </div>
      </section>
    </>
  );
}

export default PersonalInfo;
