import React from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";


function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]); 

  const handleSearch = (query) => {
    // In a real application, you would perform an API call or search logic here
    // For now, let's simulate some search results
    const mockResults = ["Result 1", "Result 2", "Result 3"];
    setSearchResults(mockResults.filter((result) => result.includes(query)));
  };
  function menuOnclick() {
    let menu = document.querySelector("#menu-btn1");
    let navbar = document.querySelector(".navbar");
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
  }
  // function loginonclick() {
  //   document.querySelector(".login-form-container").classList.toggle("active");
  // }
  const isLoggedIn = !!localStorage.getItem("token");
  const userRole = localStorage.getItem("userRole");

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <>
      <header className="header mb-3">
        <div id="menu-btn1" onClick={menuOnclick} className="fas fa-bars"></div>

        <Link to={"/home"} className="logo">
          <span style={{ fontSize: "150%" }}>PMS</span> System.
          <i
            className="fa-solid fa-award"
            style={{ color: "#000000", fontSize: "150%" }}
          />
        </Link>
        <nav className="navbar">
          <Link
            to={"/home"}
            className="nav-link active"
            style={{ backgroundColor: "transparent" }}
          >
            Home
          </Link>
          <Link
            to={"/Jobs"}
            className="nav-link active"
            style={{ backgroundColor: "transparent" }}
          >
            Jobs
          </Link>
          {/* <Link
            to={"/AboutUs"}
            className="nav-link active"
            style={{ backgroundColor: "transparent" }}
          >
            AboutUs
          </Link> */}
          <Link
            to={"/Services"}
            className="nav-link active"
            style={{ backgroundColor: "transparent" }}
          >
            Services
          </Link>
          {/* Add the rounded search bar */}
          <div className="rounded-search">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={() => handleSearch(searchQuery)}>Search</button>
          </div>
          <div className="dropdown">
            <button className="dropdown-btn">For Employers</button>
            <div className="dropdown-content">
              <Link to={"/CreateJob"}>Post a Job</Link>
              <Link to={"/recruiterLogin"}>Login</Link>
              {/* Add more dropdown items as needed */}
            </div>
          </div>

          {/* <a href="/Home#Services"> Services</a> */}

          {/* <Link
            to={"/UserDashboard"}
            className="nav-link active"
            style={{ backgroundColor: "transparent" }}
          >
            <i class="fa-solid fa-bell fa-shake fa-2xl"></i>
          </Link> */}
          {isLoggedIn && (
            <Link
              to={"/UserDashboard"}
              className="nav-link active"
              style={{ backgroundColor: "transparent" }}
            >
              <i className="fa-solid fa-bell fa-shake fa-2xl"></i>
            </Link>
          )}
          {/* Conditionally render the UserDashboard link */}
          {/* {isLoggedIn && userRole === "USER" && (
            <Link
              to={"/UserDashboard"}
              className="nav-link active"
              style={{ backgroundColor: "transparent" }}
            >
              <i className="fa-solid fa-bell fa-shake fa-2xl"></i>
            </Link>
          )} */}

          {/* Conditionally render the AdminDashboard link */}
          {/* {isLoggedIn && userRole === "ADMIN" && (
            <Link
              to={"/AdminDashboard"}
              className="nav-link active"
              style={{ backgroundColor: "transparent" }}
            >
              <i className="fa-solid fa-bell fa-shake fa-2xl"></i>
            </Link>
          )} */}
        </nav>
        <div id="login-btn1">
          {localStorage.getItem("token") ? (
            <button type="button" className="btn1" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <Link
              to={"/login"}
              className="nav-link active"
              style={{ backgroundColor: "transparent" }}
            >
              {/* <button onClick={loginonclick} className="btn1"> */}
              <button className="btn1">Login</button>
              <i className="far fa-user"></i>
            </Link>
          )}
        </div>
      </header>
    </>
  );
}

export default Navbar;
