import React from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios"; // Import axios for making API requests

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    // In a real application, you would perform an API call or search logic here
    // For now, let's simulate some search results
    const mockResults = ["Result 1", "Result 2", "Result 3"];
    setSearchResults(mockResults.filter((result) => result.includes(query)));
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleProfileClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
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
  const isLoggedIn = localStorage.getItem("logstatus");
  const userRole = localStorage.getItem("userRole");
  const [avatarBlob, setAvatarBlob] = useState(null); // State to store avatar Blob
  useEffect(() => {
    // Assuming user ID is stored in local storage
    const userId = localStorage.getItem("id");

    // Fetch the avatar Blob data based on the user ID
    axios
      .get(`/api/user/${userId}/avatar`, { responseType: "blob" }) // Update the API endpoint
      .then((response) => {
        setAvatarBlob(response.data);
      })
      .catch((error) => {
        console.error("Error fetching avatar:", error);
      });
  }, []);

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("id");
    localStorage.removeItem("role");
    localStorage.removeItem("logstatus");
    setIsDropdownOpen(!isDropdownOpen);

    navigate("/");
  };
  return (
    <>
      <header className="header mb-3">
        <div id="menu-btn1" onClick={menuOnclick} className="fas fa-bars"></div>

        <Link to={"/home"} className="logo">
          <span style={{ fontSize: "150%" }}>PMS</span>
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
            to={"/JobInformation"}
            className="nav-link active"
            style={{ backgroundColor: "transparent" }}
          >
            Jobs
          </Link>
          <Link
            to={"/AboutUs"}
            className="nav-link active"
            style={{ backgroundColor: "transparent" }}
          >
            AboutUs
          </Link>

          {/* Add the rounded search bar */}
          <div className="rounded-search">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn1" onClick={() => handleSearch(searchQuery)}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </nav>
        <div className="dropdown">
          <Link className="dropdown-link" to={"/UserLogin"}>
            Hey Please Login !
          </Link>
        </div>
      </header>
    </>
  );
}

export default Navbar;
