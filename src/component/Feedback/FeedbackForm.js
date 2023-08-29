import React, { useState } from "react";
import axios from "axios";
import styles from "./FeedbackForm.css"; // Make sure to import your CSS file

const FeedbackForm = () => {
  const [data, setData] = useState({
    firstName: "",
    email: "",
    mob: "",

    subject: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    console.log("Data to be sent:", data);

    try {
      const response = await axios.post("/api/feedback", data); // Adjust the API endpoint URL
      console.log("Data sent successfully:", response.data);
      // Reset form data after successful submission
      setData({
        firstName: "",
        email: "",
        mob: "",
        city: "",
        subject: "",
      });
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  //   const isFormValid = () => {
  //     if (
  //       data.firstName.trim() === "" ||
  //       data.email.trim() === "" ||
  //       data.mob.trim() === "" ||
  //       data.city.trim() === "" ||
  //       data.subject.trim() === ""
  //     ) {
  //       setError("Please fill in all the fields.");
  //       return false;
  //     }

  //     const firstnameRegex = /^[a-zA-Z_]{3,16}$/;
  //     if (!firstnameRegex.test(data.firstName.trim())) {
  //       setError("Please enter valid name.");
  //       return false;
  //     }

  //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //     if (!emailRegex.test(data.email)) {
  //       setError("Invalid email address.");
  //       return false;
  //     }

  //     const mobRegex = /^\d{10}$/;
  //     if (!mobRegex.test(data.mob.trim())) {
  //       setError("Invalid mobile number.");
  //       return false;
  //     }

  //     const cityRegex = /^[a-zA-Z_]{2,30}$/;
  //     if (!cityRegex.test(data.city.trim())) {
  //       setError("Please enter valid city.");
  //       return false;
  //     }

  //     const SubjectRegex = /^.{1,50}$/;
  //     if (!SubjectRegex.test(data.subject.trim())) {
  //       setError("This is mandetory.");
  //       return false;
  //     }

  //     setError("");
  //     return true;
  //   };

  // function closeContactonclick() {
  //   document.querySelector(".contact-form-container").classList.remove("active");
  // }

  return (
    <>
      <section>
        <div className="FeedBack w-75 me-auto ms-auto mb-5 bg-light px-3 py-3 rounded border border-black">
          <form onSubmit={handleFormSubmit}>
            <h1>Please give Us Feedback About this Job</h1>
            <div className="mb-3 inparea">
              <label htmlFor="firstName" className="form-label">
                Name
              </label>
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                onChange={handleChange}
                value={data.firstName}
                required
              />
            </div>
            <div className="mb-3 inparea">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={data.email}
                required
              />
            </div>
            <div className="mb-3 inparea">
              <label htmlFor="mob" className="form-label">
                Contact No
              </label>
              <input
                type="text"
                placeholder="Mobile Number"
                name="mob"
                onChange={handleChange}
                value={data.mob}
                required
              />
            </div>
            <div className="my-3 inparea">
              <label htmlFor="subject" className="form-label">
                Enter your Grievance
              </label>
              <textarea
                type="textarea"
                placeholder="Grievance"
                name="subject"
                onChange={handleChange}
                value={data.subject}
                required
              ></textarea>
            </div>
            {/* {error && <div className={styles.error_msg}>{error}</div>} */}
            <div className="FdbkSbumit">
              {" "}
              <button className="Submitbtn" type="submit">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default FeedbackForm;
