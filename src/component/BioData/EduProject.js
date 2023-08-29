import React from "react";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link

function EduProject() {
  const [project, setProject] = useState({
    projectName: "",
    projectDescription: "",
  });

  const [userId, setUserId] = useState(""); // Initialize with an empty string

  // Project Validation
  const [projectValidationErrors, setProjectValidationErrors] = useState({
    projectName: "",
    projectDescription: "",
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

    if (!project.projectDescription.match(/^[A-Za-z]/)) {
      window.alert(
        "Project Description must start with an alphabet character && Should not be empty"
      );
      errors.projectDescription =
        "Project Description must start with an alphabet character && Should not be empty";
      setProjectValidationErrors(errors);
      return false;
    }

    setProjectValidationErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValidate = projectValidateForm();
    if (!isValidate) {
      window.alert("Please fill in all the required fields.");
      return;
    }

    try {
      const response = await axios.put(
        `http://localhost:9090/api/resume/submit-project/${userId}`,
        project
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
              <h2> Project Info </h2>

              <Form.Group className="mb-3" controlId="formGroupProjectName">
                <Form.Label>Project Name</Form.Label>
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
              <Form.Group
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
              </Form.Group>
              <Button type="submit" variant="primary" onClick={handleSubmit}>
                Submit
              </Button>
              {/* Button to navigate to next step */}
              <Link to="/workExperience">Next</Link>
            </Form>
          </div>
        </div>
      </section>
    </>
  );
}

export default EduProject;
