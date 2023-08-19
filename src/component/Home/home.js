import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
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
      {/* parallax */}
      <section className="home" id="home">
        <h1> Find your dream job now</h1>
      </section>
      {/* paralax end */}

      {/* icon section start */}
      <section className="iconsContainer">
        <div className="icons">
          <i className="fa-solid fa-user fa-beat" />
          <div className="content">
            <h3>19 K+</h3>
            <p>Users</p>
          </div>
        </div>
        <div className="icons">
          <i className="fa-solid fa-sheet-plastic fa-beat" />
          <i className="fa-solid fa-sheet-plastic fa-beat" />
          <div className="content">
            <h3>1000+</h3>
            <p>Jobs listing</p>
          </div>
        </div>
        <div className="icons">
          <i className="fa-solid fa-building fa-beat" />
          <div className="content">
            <h3>450+</h3>
            <p>Recruiters</p>
          </div>
        </div>
        
      </section>

      {/* icon section end  */}

      {/* service section start */}

      <section id="Services" className="services">
        <h1 className="heading">
          Sponsored <span>Companies</span>
        </h1>
        <div className="boxContainer">
          <div className="box">
            <i className="fas fa-car" />
            <h3>Car Selling</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
              facilis sapiente suscipit explicabo natus ducimus?
            </p>
            <button className="btn1">Read More</button>
          </div>
          <div className="box">
            <i className="fas fa-tools" />
            <h3>Parts Repair</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
              facilis sapiente suscipit explicabo natus ducimus?
            </p>
            <button className="btn1">Read More</button>
          </div>
          <div className="box">
            <i className="fas fa-car-crash" />
            <h3>Car Insurance</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
              facilis sapiente suscipit explicabo natus ducimus?
            </p>
            <button className="btn1">Read More</button>
          </div>
          <div className="box">
            <i className="fas fa-car-battery" />
            <h3>Battery Replacement</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
              facilis sapiente suscipit explicabo natus ducimus?
            </p>
            <button className="btn1">Read More</button>
          </div>
          <div className="box">
            <i className="fas fa-gas-pump" />
            <h3>Oil Change</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
              facilis sapiente suscipit explicabo natus ducimus?
            </p>
            <button className="btn1">Read More</button>
          </div>
          <div className="box">
            <i className="fas fa-headset" />
            <h3>24*7 Support</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
              facilis sapiente suscipit explicabo natus ducimus?
            </p>
            <button className="btn1">Read More</button>
          </div>
        </div>
      </section>
      {/* service section end  */}
    </>
  );
}

export default Home;
