import React from "react";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BioData.css";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link

function BioData() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    // alternateEmail: "",
    mobile: "",
  });

  const [project, setProject] = useState({
    projectName: "",
    // projectDescription: "",
  });

  const [workExperience, setWorkExperience] = useState({
    designation: "",
    // organization: "",
    // fromDate: "",
    // toDate: "",
    // natureOfWork: "",
  });

  const [personalInfo, setPersonalInfo] = useState({
    dob: "", // Date of Birth
    // gender: "",
    // nationality: "",
    languageKnown: "",
    hobbies: "",
    address: "",
    // technical: "",
  });

  const [qualification, setQualification] = useState({
    institutionName: "",
    // degree: "",
    // field: "",
    // start: "",
    // end: "",
    // percentage: "",
  });

  // USER VALIDATION

  const [userValidationErrors, setUserValidationErrors] = useState({
    name: "",
    email: "",
    // alternateEmail: "",
    mobile: "",
  });

  const UserValidateForm = () => {
    const errors = {};
    let isValid = true;

    if (!user.name.match(/^[A-Za-z]/)) {
      errors.name =
        "Name must start with an alphabet character && Should not be empty";
      setUserValidationErrors(errors);
      return false;
    }

    if (!user.email.match(/^\S+@\S+\.\S+$/)) {
      errors.email = "Invalid Email";
      setUserValidationErrors(errors);
      return false;
    }

    if (!user.mobile.match(/^\d{10}$/)) {
      //   window.alert("Mobile number must be a 10-digit number");
      errors.mobile = "Mobile number must be a 10-digit number";
      setUserValidationErrors(errors);
      return false;
    }

    setUserValidationErrors(errors);
    return isValid;
  };

  // Project Validation
  const [projectValidationErrors, setProjectValidationErrors] = useState({
    projectName: "",
    // projectDescription: "",
  });

  const projectValidateForm = () => {
    const errors = {};
    let isValid = true;

    if (!project.projectName.match(/^[A-Za-z]/)) {
      window.alert(
        "Project Name must start with an alphabet character && Should not be empty"
      );
      errors.projectName =
        "Project Name must start with an alphabet character && Should not be empty";
      setProjectValidationErrors(errors);
      return false;
    }

    setProjectValidationErrors(errors);
    return isValid;
  };

  // WorkExperinence Validation
  const [workExperienceValidationErrors, setWorkExperienceValidationErrors] =
    useState([
      {
        designation: "",
        // organization: "",
        // fromDate: "",
        // toDate: "",
        // natureOfWork: "",
      },
    ]);

  const workExperienceValidateForm = () => {
    const errors = {};
    let isValid = true;

    if (!workExperience.designation.match(/^[A-Za-z]/)) {
      //   window.alert(
      //     "designation must start with an alphabet character && Should not be empty"
      //   );
      errors.designation =
        "designation must start with an alphabet character && Should not be empty";
      setWorkExperienceValidationErrors(errors);
      return false;
    }

    setWorkExperienceValidationErrors(errors);
    return isValid;
  };

  //PersonalInfo Validation
  const [personalInfoValidationErrors, setPersonalInfoValidationErrors] =
    useState({
      dob: "",
      //   gender: "",
      //   nationality: "",
      //   languageKnown: "",
      //   hobbies: "",
      address: "",
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

    if (!personalInfo.address.match(/^[A-Za-z0-9, ]+$/)) {
      window.alert(
        "address details must only contain letters, commas, and spaces"
      );
      errors.address =
        "address details must only contain letters, commas, and spaces";
      setPersonalInfoValidationErrors(errors);
      return false;
    }

    if (!personalInfo.technical.match(/^[A-Za-z0-9, ]+$/)) {
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

  //qualification Validation
  const [qualificationValidationErrors, setQualificationValidationErrors] =
    useState({
      institutionName: "",
      //   degree: "",
      //   field: "",
      //   start: "",
      //   end: "",
      //   percentage: "",
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

    setQualificationValidationErrors(errors);
    return isValid;
  };

  const isValid = () => {
    if (
      UserValidateForm() &&
      personalInfoValidateForm() &&
      qualificationValidateForm() &&
      projectValidateForm() &&
      workExperienceValidateForm()
    ) {
      return true;
    }
    return false;
  };
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValidate = isValid();
    if (!isValidate) {
      window.alert("Please fill in all the required fields.");
      console.log(
        "Form validation failed. Please fill in all the required fields."
      );
      return;
    }

    const formData = new FormData();
    formData.append("profileImage", selectedImage);

    // Append other form fields
    formData.append("userData", JSON.stringify(user));
    formData.append("projectData", JSON.stringify([project]));
    formData.append("workExperienceData", JSON.stringify([workExperience]));
    formData.append("personalInfoData", JSON.stringify([personalInfo]));
    formData.append("qualificationData", JSON.stringify([qualification]));

    try {
      console.log("Sending POST request to the backend...");
      // itration for console log
      console.log("Submitting the following data:");
      for (let pair of formData.entries()) {
        console.log(pair[0] + ": " + pair[1]);
      }
      const response = await axios.post(
        "http://localhost:9090/api/resume/submit-resume",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      console.log(response.data); // Assuming the backend sends a success message
      window.alert("Bio Data submitted ");
      setSubmissionSuccess(true);
      // Reset form fields or show a success message
      // Reset form fields
      setUser({
        name: "",
        email: "",
        mobile: "",
      });

      setProject({
        projectName: "",
      });

      setWorkExperience({
        designation: "",
      });

      setPersonalInfo({
        dob: "",
        languageKnown: "",
        hobbies: "",
        address: "",
        technical: "",
      });

      setQualification({
        institutionName: "",
      });

      // Reset validation error states
      setUserValidationErrors({
        name: "",
        email: "",
        mobile: "",
      });

      setProjectValidationErrors({
        projectName: "",
      });

      setWorkExperienceValidationErrors({
        designation: "",
      });

      setPersonalInfoValidationErrors({
        dob: "",
        address: "",
        technical: "",
      });

      setQualificationValidationErrors({
        institutionName: "",
      });
    } catch (error) {
      console.error("Error submitting resume:", error);
      // Handle error (show error message, etc.)
    }
  };

  // image handaling
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };
  const handleImageUpload = async () => {
    if (!selectedImage) {
      console.log("No image selected.");
      return;
    }

    const formData = new FormData();
    formData.append("profileImage", selectedImage);

    try {
      console.log("Uploading image...");

      const response = await axios.post(
        "http://localhost:9090/api/resume/upload-image",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      console.log("Image upload response:", response.data);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <>
      <section>
        <div className="MainBioDataContainer ">
          <div className="BioDataContainer  mt-4">
            <Form>
              <div className="headUserImageContainer"></div>
              <h2> BioData </h2>
              {/* User Input */}
              {/* name */}
              <Form.Group className="mb-3" controlId="formGroupName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  value={user.name}
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                />
                {userValidationErrors.name && (
                  <p className="error">{userValidationErrors.name}</p>
                )}
              </Form.Group>
              {/* Email */}
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
                {userValidationErrors.email && (
                  <p className="error">{userValidationErrors.email}</p>
                )}
              </Form.Group>
              {/* alternate Email */}
              {/* <Form.Group className="mb-3" controlId="formGroupAlternateEmail">
                <Form.Label>Alternate Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Alternate Email"
                  value={user.alternateEmail}
                  onChange={(e) =>
                    setUser({ ...user, alternateEmail: e.target.value })
                  }
                />
                {userValidationErrors.alternateEmail && (
                  <p className="error">{userValidationErrors.alternateEmail}</p>
                )}
              </Form.Group> */}
              <Form.Group className="mb-3" controlId="formGroupMobile">
                <Form.Label>Mobile</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Mobile"
                  value={user.mobile}
                  onChange={(e) => setUser({ ...user, mobile: e.target.value })}
                />
                {userValidationErrors.mobile && (
                  <p className="error">{userValidationErrors.mobile}</p>
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGroupaddress">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Address"
                  value={personalInfo.address}
                  onChange={(e) =>
                    setPersonalInfo({
                      ...personalInfo,
                      address: e.target.value,
                    })
                  }
                />
                {personalInfoValidationErrors.address && (
                  <p className="error">
                    {personalInfoValidationErrors.address}
                  </p>
                )}
              </Form.Group>

              {/* Image Input */}
              <Form.Group className="mb-3" controlId="formGroupImage">
                <Form.Label>Upload Profile Image</Form.Label>
                <Form.Control type="file" onChange={handleImageChange} />
              </Form.Group>
              <Button
                type="submit"
                variant="primary"
                onClick={handleSubmit}
                className="ButtoN  btn btn-primary btn-lg mb-5 ms-auto me-auto  rounded-pill "
              >
                Submit Resume
              </Button>
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

export default BioData;
