import Tata from "./TCS.gif";
import PWC from "./PWC.gif";
import "./JobInformation.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function JobInformation() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Fetch job information from the backend
    axios
      .get("/api/job-information") // Adjust the API endpoint URL
      .then((response) => {
        setJobs(response.data); // Assuming the API response is an array of job objects
      })
      .catch((error) => {
        console.error("Error fetching job information:", error);
      });
  }, []);

  const applyForJob = async (jobId) => {
    try {
      const userId = localStorage.getItem("userId"); // Retrieve user ID from localStorage
      if (!userId) {
        console.error("User ID not found in localStorage");
        return;
      }

      const response = await axios.post("/api/apply-for-job", {
        userId,
        jobId,
      });
      console.log("Applied for job:", response.data);
      // Update the job status or UI as needed
    } catch (error) {
      console.error("Error applying for job:", error);
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
          <section><div className="mainJobInfoContainer">
              
        <div className="row justify-content-center m-2">
          {/* 1st card */}
          <div className="col-sm-12 col-md-9 my-4 jobcardin">
            <div className="card px-4">
              <div className="card-body m-3">
                <div className="title d-flex justify-content-between">
                  <h2 className="card-title">Software Engineer Backend</h2>
                  <img src={Tata} alt="" style={{ width: "60px" }} />
                </div>
                <p>Tata Motors Finance</p>
                <div classNameName="description">
                  <p className="description-title">Job description</p>
                  <p className="card-text">
                    You will work closely with a cross functional team of
                    product, design, QA, solution architects, and peers from
                    data engineering, infrastructure and SRE.
                  </p>
                </div>

                <div className="requirement my-2">
                  <p className="requirement-title">Requirements</p>
                  <ul>
                    <li>Product management, Backend, MySQL, data security</li>
                    <li>3-4 years Experience</li>
                    <li>
                      Kolkata, Mumbai, New Delhi, Hyderabad/Secunderabad, Pune,
                      Chennai, Bangalore/Bengaluru
                    </li>
                    <li>4 Openings</li>
                  </ul>
                </div>

                <div className="status d-flex ">
                  <p className="status-title">status :</p>
                  <p className="mx-3">open</p>
                </div>

                <hr />

                <button className="btn btn-primary">Apply for job</button>
                <button className="btn btn-outline-primary m-3">
                  Feedback
                </button>
              </div>
            </div>
          </div>

          {/* 2nd card */}
          <div className="col-sm-12 col-md-9 mb-3 ">
            <div className="card px-4">
              <div className="card-body m-3">
                <div className="title d-flex justify-content-between">
                  <h2 className="card-title">Software Engineer Backend</h2>
                  <img src={PWC} alt="" style={{ width: "60px" }} />
                </div>
                <p>PWC</p>
                <div classNameName="description">
                  <p className="description-title">Job description</p>
                  <p className="card-text">
                    You will work closely with a cross functional team of
                    product, design, QA, solution architects, and peers from
                    data engineering, infrastructure and SRE.
                  </p>
                </div>

                <div className="requirement my-2">
                  <p className="requirement-title">Requirements</p>
                  <ul>
                    <li>Product management, Backend, MySQL, data security</li>
                    <li>3-4 years Experience</li>
                    <li>
                      Kolkata, Mumbai, New Delhi, Hyderabad/Secunderabad, Pune,
                      Chennai, Bangalore/Bengaluru
                    </li>
                    <li>4 Openings</li>
                  </ul>
                </div>

                <div className="status d-flex ">
                  <p className="status-title">status :</p>
                  <p className="mx-3">open</p>
                </div>

                <hr />

                <button className="btn btn-primary ">Apply for job</button>
                <span className=" jobcard">
                  <button>
                    <Link
                      className="btn btn-outline-primary m-3 "
                      to="/FeedbackForm"
                    >
                      Feedback
                    </Link>
                  </button>
                </span>
              </div>
            </div>
          </div>
          {/*  */}
          {/*  */}
          {jobs.map((job, index) => (
            <div className="col-sm-12 col-md-9 mb-3" key={index}>
              <div className="card px-4">
                <div className="card-body m-3">
                  <div className="title d-flex justify-content-between">
                    <h2 className="card-title">{job.title}</h2>
                    {job.imageBlob && (
                      <img
                        src={URL.createObjectURL(new Blob([job.imageBlob]))}
                        alt=""
                        style={{ width: "60px" }}
                      />
                    )}
                  </div>
                  <p>{job.company_name}</p>
                  <div classNameName="description">
                    <p className="description-title">Job description</p>
                    <p className="card-text">{job.description}</p>
                  </div>

                  <div className="requirement my-2">
                    <p className="requirement-title">Requirements</p>
                    <ul>{job.requirements}</ul>
                  </div>

                  <div className="status d-flex ">
                    <p className="status-title">status :</p>
                    <p className="mx-3">{job.status}</p>
                  </div>

                  <hr />

                  <button
                    className="btn btn-primary"
                    onClick={() => applyForJob(job.id)}
                  >
                    Apply for job
                  </button>
                  <span className=" jobcard">
                    <button>
                      <Link
                        className="btn btn-outline-primary m-3 "
                        to="/FeedbackForm"
                      >
                        Feedback
                      </Link>
                    </button>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>
    </>
  );
}
export default JobInformation;
