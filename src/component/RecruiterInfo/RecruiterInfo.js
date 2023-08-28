import { useForm } from "react-hook-form";
import React, { useState , useEffect } from "react";
import axios from "axios";
import "./RecruiterInfo.css";
import company from "./company.jpg";

function RecruiterInfo() {
  const [companyName, setCompanyName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [technology, setTechnology] = useState("");
  const [description, setDescription] = useState("");
  const [date, setdate] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("image", data.image[0]); // Get the first selected image file
      formData.append("companyName", data.componyName);
      formData.append("contactNumber", data.contactNumber);
      formData.append("technology", data.technology);
      formData.append("description", description);
      formData.append("date", date);
      console.log("Data before sending:", data);
      const response = await axios.post("http://localhost:8080", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Set content type for FormData
        },
      });

      console.log("Data sent successfully:", response.data);
      // Reset form fields after successful submission
      setCompanyName("");
      setContactNumber("");
      setTechnology("");
      setDescription("");
      setdate("");
    } catch (error) {
      console.error("Error sending data:", error);
    }
    };
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
        <div className="row justify-content-center recruiterInfo">
          <div className=" col-sm-12 col-md-8 innerRecInfo  ">
            <div>
              <img
                src={company}
                className="img-fluid recruiterInfoimage"
                alt="Company Logo"
              />
            </div>
            <div className="text mb-3 text-center mt-3">
              {/* heading */}
              <h2>Recruiter Information</h2>
            </div>
            <form className="form px-5" onSubmit={handleSubmit(onSubmit)}>
              <div className="CompanyName ">
                {/* company name */}
                <label htmlFor="company">Company Name</label>
                <input
                  type="text"
                  {...register("componyName", { required: true })}
                  className="company-input form-control form-control-lg mb-2"
                  placeholder="Enter Company Name"
                  id="company"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
                <span className="text-danger">
                  {errors.text?.type === "required" &&
                    "Company name is Required"}
                </span>
              </div>

              <div className="Number mt-4">
                <label htmlFor="number">Contact No.</label>
                {/* contact Number */}
                <input
                  type="number"
                  {...register("contactNumber", {
                    required: true,
                    pattern: "/^[6-9]d{9}$/",
                  })}
                  className="number-input form-control form-control-lg mb-2"
                  placeholder="Enter Phone Number"
                  id="number"
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                />
                <span className="text-danger">
                  {errors.number?.type === "required" &&
                    "Contact number is Required"}
                </span>
              </div>

              <div className="Technology mt-4">
                <label htmlFor="technology">Technology</label>
                {/* technology */}
                <input
                  type="text"
                  {...register("technology", { required: true })}
                  className="technology-input form-control form-control-lg mb-2"
                  placeholder="Enter the technology"
                  id="technology"
                  value={technology}
                  onChange={(e) => setTechnology(e.target.value)}
                />
                <span className="text-danger">
                  {errors.text?.type === "required" && "Technology is Required"}
                </span>
              </div>

              <div className="Date mt-4">
                <label htmlFor="date">Date</label>
                {/* date */}
                <input
                  type="date"
                  {...register("date", { required: true })}
                  className="form-control datepicker"
                  id="date"
                  value={date}
                  onChange={(e) => setdate(e.target.value)}
                />
                <span className="text-danger">
                  {errors.date?.type === "required" && "date is Required"}
                </span>
              </div>

              <div className="Description mt-4">
                <label htmlFor="description">Description</label>
                <textarea
                  {...register("description", { required: true })}
                  className="form-control"
                  rows="3"
                  placeholder="Type here"
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="Image mt-4">
                <label htmlFor="image">Passport Size Image</label>
                <input
                  type="file"
                  accept="image/*"
                  {...register("image", { required: true })}
                  className="image-input form-control form-control-lg mb-2"
                  id="image"
                />
                <span className="text-danger">
                  {errors.image?.type === "required" && "Image is Required"}
                </span>
              </div>
              <div className="Button mt-5 d-flex justify-content-center">
                <button
                  type="submit"
                  className="Button w-50 btn btn-primary btn-lg mb-5 rounded-pill"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default RecruiterInfo;
