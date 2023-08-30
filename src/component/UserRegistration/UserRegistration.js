import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./UserRegistration.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

const UserRegistration = () => {
  const [data, setData] = useState({
    UserName: "",
    // mob: "",
    email: "",
    // dob: "",
    password: "",
    confirmPasword: " ",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const handleChangeGender = (selectedGender) => {
  //   setData((prevData) => ({
  //     ...prevData,
  //     gender: selectedGender,
  //   }));
  // };

  // const handleFormSubmit = async (e) => {
  //   e.preventDefault();
  //   if (!isFormValid()) {
  //     return;
  //   }
  //   // try {
  //   //   const url = `http://localhost:4000/adduser`;
  //   //   const response = await fetch(url, {
  //   //     method: "POST",
  //   //     headers: {
  //   //       "Content-Type": "application/json",
  //   //     },
  //   //     body: JSON.stringify(data),
  //   //   });

  //   //   if (!response.ok) {
  //   //     const errorData = await response.json();
  //   //     throw new Error(errorData.message || "An error occurred.");
  //   //   }

  //   navigate("/login");
  //   // console.log("User added successfully.");
  //   // } catch (error) {
  //   //   setError(error.message || "An error occurred. Please try again later.");
  //   // }
  // };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid()) {
      return;
    }

    try {
      const url = "http://localhost:9090/register";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.UserName,
          email: data.email,
          password: data.password,
          role: selectedValue,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "An error occurred.");
      }

      window.alert("Registration Successful You Can Login Now !");
      navigate("/UserLogin");
    } catch (error) {
      setError(error.message || "An error occurred. Please try again later.");
      setTimeout(() => {
        setError(""); // Clear the error message after 2 seconds
      }, 2000);
    }
  };

  const isFormValid = () => {
    if (
      data.UserName.trim() === "" ||
      data.email.trim() === "" ||
      // data.mob.trim() === "" ||
      data.password.trim() === "" ||
      // data.dob.trim() === "" ||
      data.confirmPassword.trim() === ""
    ) {
      setError("Please fill in all the fields.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      setError("Invalid email address.");
      return false;
    }

    // const mobRegex = /^\d{10}$/;
    // if (!mobRegex.test(data.mob.trim())) {
    //   setError("Invalid mobile number.");
    //   return false;
    // }

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!passwordRegex.test(data.password)) {
      setError(
        "Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one digit."
      );
      return false;
    }
    if (data.password != data.confirmPassword) {
      setError("The Passwords do not match.");
      return false;
    }

    // const dobRegex = /^\d{4}-\d{2}-\d{2}$/;
    // if (!dobRegex.test(data.dob)) {
    //   setError(
    //     "Invalid date of birth format. Please use the YYYY-MM-DD format."
    //   );
    //   return false;
    // }

    // const today = new Date();
    // const dob = new Date(data.dob);
    // const ageDiff = today.getFullYear() - dob.getFullYear();

    // if (ageDiff < 18) {
    //   setError("You must be at least 18 years old to sign up.");
    //   return false;
    // }

    setError("");
    return true;
  };
  // drop down who u r
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  // handle scroll

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

  return (
    <>
      <section>
        <div className="UserRegistration_container">
          <form className="Regform_container" onSubmit={handleFormSubmit}>
            <h1>Create Account</h1>
            <div className="signup_form_container">
              <Row className="mb-3 input1">
                <Form.Group as={Col} controlId="formGridCity">
                  <input
                    type="text"
                    name="UserName"
                    placeholder="Username"
                    onChange={handleChange}
                    value={data.UserName}
                    required
                    className="user"
                  />
                </Form.Group>
              </Row>

              <Row className="mb-3 input1">
                <Form.Group as={Col} controlId="formGridCity">
                  <h2>Enter email ID</h2>
                  {/* <input
                    type="text"
                    placeholder="Mobile Number"
                    name="mob"
                    onChange={handleChange}
                    value={data.mob}
                    required
                    className="uinput"
                  /> */}

                  <label htmlFor="YouAreA">
                    <h2>I am a :-</h2>
                  </label>

                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                    value={data.password}
                    required
                    className="uinput"
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridCity">
                  <label htmlFor="email">{/* <h2>Email</h2> */}</label>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={handleChange}
                    value={data.email}
                    required
                    className="uinput"
                  />

                  <select
                    className="selectControl"
                    value={selectedValue}
                    onChange={handleSelectChange}
                  >
                    <option value="">Select</option>
                    <option value="candidate">Candidate</option>
                    <option value="recruiter">Recruiter</option>
                  </select>

                  <input
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    onChange={handleChange}
                    // value={data.password}
                    required
                    className="uinput"
                  />
                </Form.Group>
              </Row>
            </div>

            {error && <div className="error_msg">{error}</div>}
            <button type="submit" className="green_btn">
              Sign Up
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default UserRegistration;
