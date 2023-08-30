import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MeetOurTeam.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import twitter from "./twitter.png";
import fb from "./facbook.png";
import insta from "./instagram.png";
import linkedin from "./linkedin.png";

const teamMembers = [
  {
    name: "Mayur Chilawar",
    title: "Project leader",
    imageUrl: process.env.PUBLIC_URL + "/PmsImages/jaydeep.jpg",
    description:
      "Mayur Chilawar is a visionary leader with a passion for innovation and growth.",
    social: {
      facebook: "https://www.facebook.com/mayur.chilawar",
      linkedin: "https://www.linkedin.com/in/mayur-c/r",
      twitter: "https://twitter.com/",
      instagram: "https://www.instagram.com/",
    },
  },
  {
    name: "Jaydip Nemade",
    title: "Team Member",
    imageUrl: process.env.PUBLIC_URL + "/PmsImages/jaydeep.jpg",
    description:
      "Jaydep Nemade brings technical expertise and leadership to our technology team.",
    social: {
      facebook: "https://www.facebook.com/joydip.nemade",
      linkedin: "http://www.linkedin.com/in/jaydipnemade16",
      twitter: "http://imdb.com/name/nm13393041/?ref_=ext_shr_lnk",
      instagram: "https://instagram.com/jaydip_nemade_?igshid=OGQ5ZDc2ODk2ZA==",
    },
  },
  {
    name: "Rushikesh Ramteke",
    title: "Team Member",
    imageUrl: process.env.PUBLIC_URL + "/PmsImages/rushikesh.jpg",
    description:
      "Rushikesh Ramteke brings his versatality to work on any projects ",
    social: {
      facebook: "https://www.facebook.com/profile.php?id=100010085645241",
      linkedin: "https://www.linkedin.com/in/rushikesh-ramteke",
      twitter: "https://twitter.com/rushi1936019",
      instagram: "https://www.instagram.com/rushikeshramteke",
    },
  },
  {
    name: "Gitesh Sarnobat",
    title: "Team Member",
    imageUrl: process.env.PUBLIC_URL + "/PmsImages/Gitesh.jpeg",
    description:
      "Gitesh Sarnobat brings a lot of knowledge about the industry and experience ",
    social: {
      facebook: "https://www.facebook.com/gitesh.sarnobat",
      linkedin: "https://www.linkedin.com/feed/",
      twitter: "https://twitter.com/",
      instagram: "https://www.instagram.com/giteshsarnobat/",
    },
  },
  {
    name: "Mayur Pawar",
    title: "Team Member",
    imageUrl: process.env.PUBLIC_URL + "/PmsImages/rushikesh.jpg",
    description: "Mayur Pawar is head of Research and Development team.  ",
    social: {
      facebook: "https://www.facebook.com/",
      linkedin: "https://www.linkedin.com/in/",
      twitter: "https://twitter.com/",
      instagram: "https://www.instagram.com/",
    },
  },
  {
    name: "Rohit Jadhav",
    title: "Team Member",
    imageUrl: process.env.PUBLIC_URL + "/PmsImages/Rohit (2).jpg",
    description:
      "Rohit Jadhav is an expert in Sales Department and has vast experience in the department  ",
    social: {
      facebook: "https://www.facebook.com/",
      linkedin: "https://www.linkedin.com/in/",
      twitter: "https://twitter.com/",
      instagram: "https://www.instagram.com/",
    },
  },
];

function MeetOurTeam() {
  useEffect(() => {
    window.scrollTo(0, 0);
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
    <div className="meet-our-team-page">
      <section className="team-section">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <div className="row">
            {teamMembers.map((member, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="team-member">
                  <div className="team-member-image">
                    <img src={member.imageUrl} alt={member.name} />
                  </div>
                  <div className="team-member-details">
                    <h3>{member.name}</h3>
                    <p className="title">{member.title}</p>
                    <p className="description">{member.description}</p>
                    <div className="social-icons">
                      <a
                        href={member.social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={fb} alt="Icon" style={{ width: "30px" }} />
                      </a>
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={linkedin}
                          alt="Icon"
                          style={{ width: "30px" }}
                        />
                      </a>
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={twitter}
                          alt="Icon"
                          style={{ width: "30px" }}
                        />
                      </a>
                      <a
                        href={member.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={insta} alt="Icon" style={{ width: "30px" }} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default MeetOurTeam;
