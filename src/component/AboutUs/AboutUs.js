import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom"; 
import MeetOurTeam from "./MeetOurTeam";
import "./aboutUs.css"; // Import your custom CSS
import { useEffect, useState } from "react";

function AboutUs() {
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
    <div>
      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="about-image">
                <img
                  src="https://d341ezm4iqaae0.cloudfront.net/jobseeker/wp-content/uploads/2021/07/08192932/Image-Frame.png"
                  alt="About Us"
                />
              </div>
            </div>
            <div className="col-md-5">
              <div className="about-content">
                <h2>About Us</h2>
                <p>
                  At Indeed, we're dedicated to connecting job seekers with
                  meaningful employment opportunities. Our platform offers a
                  comprehensive range of jobs from diverse industries and
                  locations.
                </p>
                <p>
                  Our mission is to make the job search process efficient and
                  effective. With our advanced search features and user-friendly
                  interface, you can find the perfect job that matches your
                  skills and aspirations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-md-7 ">
              <div className="about-image">
                <img
                  src="https://d341ezm4iqaae0.cloudfront.net/jobseeker/wp-content/uploads/2021/07/08194002/6col.png"
                  alt="About Us"
                />
              </div>
            </div>
            <div className="col-md-5">
              <div className="about-content">
                <h2>Our People</h2>
                <p>
                  At Indeed, our mission is to help people get jobs. We have
                  more than 14,600 global employees passionately pursuing this
                  purpose and improving the recruitment journey through real
                  stories and data. We foster a collaborative workplace that
                  strives to create the best experience for job seekers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-md-7 order-md-2 ">
              <div className="about-image">
                <img
                  src="https://teambuildinghub.com/wp-content/uploads/2022/04/virtual-leadership.webp"
                  alt="About Us"
                />
              </div>
            </div>
            <div className="col-md-5">
              <div className="about-content">
                <h2>Our leadership</h2>
                <p>
                  PMS Systsem's leadership team is diverse, dedicated and
                  committed to empowering our employees to fulfill our mission:
                  We help people get jobs. By fostering strong partnerships and
                  collaboration, they serve and support job seekers, employers,
                  society and our employees.
                </p>
                <button className="btn btn-primary button">
                  <Link
                    to="/MeetOurTeam"
                    style={{ color: "inherit", textDecoration: "inherit" }}
                  >
                    <h3>Meet Our Team</h3>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-md-7 ">
              <div className="about-image">
                <img
                  src="https://d341ezm4iqaae0.cloudfront.net/assets/2021/07/19175644/30m-jsfb-2-2.jpg"
                  alt="About Us"
                />
              </div>
            </div>
            <div className="col-md-5">
              <div className="about-content">
                <h2>Our Commitments</h2>
                <p>
                  Our Environmental, Social & Governance (ESG) commitments aim
                  to bring about a future of work that is equitable and
                  inclusive. As the world’s number one job site and leading
                  matching and hiring platform1, we strive to make a positive
                  impact on society by connecting people to better work to
                  create better lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
    
 

export default AboutUs;
