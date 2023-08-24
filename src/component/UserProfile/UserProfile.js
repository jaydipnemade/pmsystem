import React from "react";
import { useParams, Link } from "react-router-dom";
import { Component, useEffect, useState } from "react";
import CarService from "../../services/CarService";
import UserService from "../../services/UserService";
import BookingService from "../../services/BookingService";
const UserDashboard = () => {
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

  const { data } = useParams();
  const [userList, setUserList] = useState([]);



  function WithdrawJobApplication(id) {
    if (!id) {
      alert("Please enter a valid  ID.");
      return;
    }

    fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response
        // console.log(data.message);
        window.location.reload();
        // alert("entry has been deleted");
        // Log the response message
        // Refresh the page or update the UI as needed
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  }

  const [candidates, setcandidates] = useState([]);
  const [job, setjobs] = useState([]);

  useEffect(() => {
    fetchCandidatesData();
    fetchJobsData();
  }, []);

  const fetchcandidatesData = async () => {
    try {
      const response = await CandidatesService.getcandidates();
      setUsers(response.data);
    } catch (error) {
      console.error("Error retrieving Users:", error);
    }
  };

  const fetchJobsData = async () => {
    try {
      const response = await jobs.getCars();
      setCars(response.data);
    } catch (error) {
      console.error("Error retrieving cars:", error);
    }
  };

  return (
    <>
      <section className="UserDashboard">
        <div className=" heading-text  my-5">
          <h2>User Dashboard</h2>
        </div>
        <div className="my-5 temp">..</div>
        <div className="text-light heading-text  my-5">User Dashboard</div>

        <div className=" w-75 ms-auto me-auto table-responsive">
          <table className="table table-striped table-hover">
            <br />
            <thead>
              <tr>
                <th>ID</th>
                <th>Make</th>
                <th>Model</th>
                <th>Year</th>
                <th>Price</th>
                <th>Status</th>
                <th>Download Recipt</th>
                <th></th>
              </tr>
            </thead>

            {/* <tbody>
              {cars.map((i) => {
                console.log(data);
                if (i.id === data) {
                  return (
                    <tr>
                      <td>{i.date}</td>
                      <td>{i.make + i.model}</td>
                      <td>
                        {" "}
                        <img src={i.image} alt=""></img>
                      </td>
                      <td>{i.price}</td>

                      <td>
                        <a
                          className="btn btn-light"
                          data-bs-toggle="collapse"
                          href={"#row1" + i.id}
                          role="button"
                          aria-expanded="false"
                          aria-controls={"row1" + i.id}
                        >
                          Car_details
                        </a>
                        <div className="collapse" id={"row1" + i.id}>
                          <div className="card card-body">
                            {i.description} car is of year {i.year} and distance
                            travled is {i.distanceTravelled} fual type is{" "}
                            {i.fuelType} with {i.transmission} gear shift.
                            <a href="/">read More</a>
                          </div>
                        </div>
                      </td>
                      <td>{i.StatuOfPurchase}</td>
                      <td>
                        <input
                          type="submit"
                          value="Cancle"
                          className="btn btn-danger"
                          onClick={() => cancleOrder(i.id)} // Pass the ID to the delete function
                        ></input>
                      </td>
                      <td>
                        <Link to="/files/myfile.pdf" target="_blank" download>
                          Download
                        </Link>
                      </td>
                    </tr>
                  );
                }
                return null;
              })}
            </tbody> */}
            <tbody>
              {cars.map((i) => {
                return (
                  <tr>
                    <td>{i.id}</td>
                    <td>{i.make}</td>
                    <td>{i.model}</td>
                    <td>{i.year}</td>
                    <td>{i.price}</td>
                    <td>{i.status}</td>
                    <td>{i.status}</td>

                    {/* <td>
                      <a
                        className="btn btn-light"
                        data-bs-toggle="collapse"
                        href={"#row1" + i.prn}
                        role="button"
                        aria-expanded="false"
                        aria-controls={"row1" + i.prn}
                      >
                        Details
                      </a>
                      <div className="collapse" id={"row1" + i.prn}>
                        <div className="card card-body">
                          {i.textgriv}
                          <a href="#">read More</a>
                        </div>
                      </div>
                    </td>
                    <td>
                      <select
                        className="form-select form-select-sm mb-3"
                        aria-label=""
                        name="status"
                        id={i.id}
                        value={selectedValue}
                        // value={i.statusofg}
                        // onChange={handleSelectChange}
                      >
                        <option value="Pending">Pending</option>
                        <option value="approved">Approve</option>
                        <option value="CarSold">Reject</option>
                      </select>
                    </td> */}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="ms-auto me-auto" aria-label="page1 Page">
          <ul className="pagination justify-content-center ">
            <li className="page-item">
              <a className="page-link" href="/">
                Previous
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/">
                Next
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};
export default UserDashboard;
