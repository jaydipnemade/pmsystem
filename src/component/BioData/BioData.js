import React from "react";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BioData.css";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useState } from "react";

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

    // if (user.alternateEmail && !user.alternateEmail.match(/^\S+@\S+\.\S+$/)) {
    //   window.alert("Invalid Alternate Email");
    //   errors.alternateEmail = "Invalid Alternate Email";
    //   setUserValidationErrors(errors);
    //   return false;
    // }

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

    // if (!project.projectDescription.match(/^[A-Za-z]/)) {
    //   window.alert(
    //     "Project Description must start with an alphabet character && Should not be empty"
    //   );
    //   errors.projectDescription =
    //     "Project Description must start with an alphabet character && Should not be empty";
    //   setProjectValidationErrors(errors);
    //   return false;
    // }

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

    // if (!workExperience.organization.match(/^[A-Za-z]/)) {
    //   window.alert(
    //     "Organization must start with an alphabet character && Should not be empty"
    //   );
    //   errors.organization =
    //     "Organization must start with an alphabet character && Should not be empty";
    //   setWorkExperienceValidationErrors(errors);
    //   return false;
    // }

    // if (!workExperience.fromDate.match(/^\d{4}-\d{2}-\d{2}$/)) {
    //   window.alert("Invalid From Date. Please use YYYY-MM-DD format.");
    //   errors.fromDate = "Invalid From Date. Please use YYYY-MM-DD format.";
    //   setWorkExperienceValidationErrors(errors);
    //   return false;
    // }

    // if (!workExperience.toDate.match(/^\d{4}-\d{2}-\d{2}$/)) {
    //   window.alert("Invalid To Date. Please use YYYY-MM-DD format.");
    //   errors.toDate = "Invalid To Date. Please use YYYY-MM-DD format.";
    //   setWorkExperienceValidationErrors(errors);
    //   return false;
    // }

    // if (!workExperience.natureOfWork.match(/^[A-Za-z]/)) {
    //   window.alert(
    //     "Nature of Work must start with an alphabet character && Should not be empty"
    //   );
    //   errors.natureOfWork =
    //     "Nature of Work must start with an alphabet character && Should not be empty";
    //   setWorkExperienceValidationErrors(errors);
    //   return false;
    // }

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

    // if (!personalInfo.gender) {
    //   window.alert("Gender is required");
    //   errors.gender = "Gender is required";
    //   setPersonalInfoValidationErrors(errors);
    //   return false;
    // }

    // if (!personalInfo.nationality) {
    //   window.alert("Nationality is required");
    //   errors.nationality = "Nationality is required";
    //   setPersonalInfoValidationErrors(errors);
    //   return false;
    // }

    // if (!personalInfo.languageKnown.match(/^[A-Za-z, ]+$/)) {
    //   window.alert(
    //     "Language Known must only contain letters, commas, and spaces"
    //   );
    //   errors.languageKnown =
    //     "Language Known must only contain letters, commas, and spaces";
    //   setPersonalInfoValidationErrors(errors);
    //   return false;
    // }

    // if (!personalInfo.hobbies.match(/^[A-Za-z, ]+$/)) {
    //   window.alert("Hobbies must only contain letters, commas, and spaces");
    //   errors.hobbies = "Hobbies must only contain letters, commas, and spaces";
    //   setPersonalInfoValidationErrors(errors);
    //   return false;
    // }

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

    // if (!qualification.degree.match(/^[A-Za-z]/)) {
    //   window.alert(
    //     "Degree must start with an alphabet character && Should not be empty"
    //   );
    //   errors.degree =
    //     "Degree must start with an alphabet character && Should not be empty";
    //   setQualificationValidationErrors(errors);
    //   return false;
    // }

    // if (!qualification.field.match(/^[A-Za-z]/)) {
    //   window.alert(
    //     "Field must start with an alphabet character && Should not be empty"
    //   );
    //   errors.field =
    //     "Field must start with an alphabet character && Should not be empty";
    //   setQualificationValidationErrors(errors);
    //   return false;
    // }

    // if (!qualification.start.match(/^\d{4}-\d{2}-\d{2}$/)) {
    //   window.alert("Invalid Start Date. Please use YYYY-MM-DD format.");
    //   errors.start = "Invalid Start Date. Please use YYYY-MM-DD format.";
    //   setQualificationValidationErrors(errors);
    //   return false;
    // }

    // if (!qualification.end.match(/^\d{4}-\d{2}-\d{2}$/)) {
    //   window.alert("Invalid End Date. Please use YYYY-MM-DD format.");
    //   errors.end = "Invalid End Date. Please use YYYY-MM-DD format.";
    //   setQualificationValidationErrors(errors);
    //   return false;
    // }

    // if (!qualification.percentage.match(/^\d+(\.\d{1,2})?$/)) {
    //   window.alert("Invalid Percentage");
    //   errors.percentage = "Invalid Percentage";
    //   setQualificationValidationErrors(errors);
    //   return false;
    // }

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
      // Reset form fields or show a success message
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

              {/* Personal Info Input */}
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
              {/* <Form.Group className="mb-3" controlId="formGroupGender">
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
              </Form.Group> */}
              {/* <Form.Group className="mb-3" controlId="formGroupNationality">
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
              </Form.Group> */}
              {/* <Form.Group className="mb-3" controlId="formGroupLanguageKnown">
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
              </Form.Group> */}
              {/* <Form.Group className="mb-3" controlId="formGroupHobbies">
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
              </Form.Group> */}
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

              {/* Qualification Input */}
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
              {/* <Form.Group className="mb-3" controlId="formGroupDegree">
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
              </Form.Group> */}
              {/* <Form.Group className="mb-3" controlId="formGroupField">
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
              </Form.Group> */}
              {/* <Form.Group className="mb-3" controlId="formGroupStartDate">
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
              </Form.Group> */}
              {/* <Form.Group className="mb-3" controlId="formGroupEndDate">
                <Form.Label>End Date</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="End Date"
                  value={qualification.end}
                  onChange={(e) =>
                    setQualification({ ...qualification, end: e.target.value })
                  }
                />
                {qualificationValidationErrors.end && (
                  <p className="error">{qualificationValidationErrors.end}</p>
                )}
              </Form.Group> */}
              {/* <Form.Group className="mb-3" controlId="formGroupPercentage">
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
              </Form.Group> */}

              {/* Project Input */}
              <h2> Project Info </h2>
              <Form.Group className="mb-3" controlId="formGroupProjectName">
                <Form.Label>Project Name & Info</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Project Name"
                  value={project.projectName}
                  onChange={(e) =>
                    setProject({ ...project, projectName: e.target.value })
                  }
                />
                {projectValidationErrors.projectName && (
                  <p className="error">{projectValidationErrors.projectName}</p>
                )}
              </Form.Group>
              {/* <Form.Group
                className="mb-3"
                controlId="formGroupProjectDescription"
              >
                <Form.Label>Project Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Project Description"
                  value={project.projectDescription}
                  onChange={(e) =>
                    setProject({
                      ...project,
                      projectDescription: e.target.value,
                    })
                  }
                />
                {projectValidationErrors.projectDescription && (
                  <p className="error">
                    {projectValidationErrors.projectDescription}
                  </p>
                )}
              </Form.Group> */}

              {/* Work Experience Input */}
              <h2> Work Experience </h2>
              <Form.Group className="mb-3" controlId="formGroupdesignation">
                <Form.Label>Enter WorkExperinence and details</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="designation"
                  value={workExperience.designation}
                  onChange={(e) =>
                    setWorkExperience({
                      ...workExperience,
                      designation: e.target.value,
                    })
                  }
                />
                {workExperienceValidationErrors.designation && (
                  <p className="error">
                    {workExperienceValidationErrors.designation}
                  </p>
                )}
              </Form.Group>
              {/* <Form.Group className="mb-3" controlId="formGroupOrganization">
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
              </Form.Group> */}
              {/* <Form.Group className="mb-3" controlId="formGroupFromDate">
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
              </Form.Group> */}
              {/* <Form.Group className="mb-3" controlId="formGroupToDate">
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
              </Form.Group> */}
              {/* <Form.Group className="mb-3" controlId="formGroupNatureOfWork">
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
              </Form.Group> */}

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
            </Form>
          </div>
        </div>
      </section>
    </>
  );
}

export default BioData;
