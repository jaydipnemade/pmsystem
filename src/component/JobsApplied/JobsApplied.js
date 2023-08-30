import "./JobsApplied.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function JobInformation() {
  const [jobs, setJobs] = useState([]);
  const userId = localStorage.getItem("id"); // Get the user's ID from local storage

  useEffect(() => {
    // Fetch job information from the backend based on user's ID
    axios
      .get(`/api/job-information/${userId}`) // Adjust the API endpoint URL
      .then((response) => {
        setJobs(response.data); // Assuming the API response is an array of job objects
      })
      .catch((error) => {
        console.error("Error fetching job information:", error);
      });
  }, [userId]);

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
      jobs.forEach((job) => {
        if (job.imageBlob) {
          URL.revokeObjectURL(job.imageBlob);
        }
      });

      window.removeEventListener("scroll", handleScroll);
    };
  }, [jobs]);
  return (
    <>
      <section>
        <div className="mainJobInfoContainer">
          <div className="row justify-content-center m-2">
            {/* 1st card */}

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
                    <div className="description">
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
