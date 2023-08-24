import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MeetOurTeam.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const teamMembers = [
  {
    name: "Mayur Chilawar",
    title: "Project leader",
    imageUrl: process.env.PUBLIC_URL + "/PmsImages/rushikesh.jpg",
    description:
      "Mayur Chilawar is a visionary leader with a passion for innovation and growth.",
  },
  {
    name: "Jaydip Nemade",
    title: "Team Member",
    imageUrl: process.env.PUBLIC_URL + "/PmsImages/rushikesh.jpg",
    description:
      "Jaydep Nemade brings technical expertise and leadership to our technology team.",
  },
  {
    name: "Rushikesh Ramteke",
    title: "Team Member",
    imageUrl: process.env.PUBLIC_URL + "/PmsImages/rushikesh.jpg",
    description:
      "Rushikesh Ramteke brings his versatality to work on any projects ",
  },
  {
    name: "Gitesh Sarnobat",
    title: "Team Member",
    imageUrl: process.env.PUBLIC_URL + "/PmsImages/rushikesh.jpg",
    description:
      "Gitesh Sarnobat brings a lot of knowledge about the industry and experience ",
  },
  {
    name: "Mayur Pawar",
    title: "Team Member",
    imageUrl: process.env.PUBLIC_URL + "/PmsImages/rushikesh.jpg",
    description:
      "Mayur Pawar is head of Research and Development team.  ",
  },
  {
    name: "Rohit Jadhav",
    title: "Team Member",
    imageUrl: process.env.PUBLIC_URL + "/PmsImages/rushikesh.jpg",
    description:
      "Rohit Jadhav is an expert in Sales Department.  ",
  },
  
];

function MeetOurTeam() {
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
