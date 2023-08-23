import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "./home.css";
import { Container, Row, Col, Carousel } from "react-bootstrap";

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
      <section>
        <section className="home" id="home">
          <h1> Find your dream job now</h1>
        </section>
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

      {/* resume builder function */}

      <section>
        <Card body>
          <Container className="ResumeBuilder">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Link to={"/ResumeBuilder"} className="logo">
                <div style={{ flex: 1, padding: "1 rem" }}>
                  <img
                    src={
                      "https://static.naukimg.com/s/0/0/i/ff-services-ot.png"
                    }
                    className="img-resume-builder"
                    alt="no img found"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
              </Link>

              <div style={{ flex: 1, padding: "0.5rem", fontSize: "large" }}>
                {/* Your content */}
                <h1>Accelerate your job search with premium services</h1>
                <h3>
                  Services to help you get hired, faster: from preparing your
                  CV, getting recruiter attention, finding the right jobs, and
                  more!
                </h3>
              </div>
            </div>
          </Container>
        </Card>
      </section>
      <section>
        <Carousel  className="carousel-image">
          <Carousel.Item interval={1000}>
            <Row className="mb-3">
              <Col md={3}>
                <div className="carousel">
                  <img src={require("./media/carousel1.png")} alt="..." />
                </div>
              </Col>
              <Col md={3}>
                <div>
                  <img src={require("./media/carousel2.png")} alt="..." />
                </div>
              </Col>
              <Col md={3}>
                <div>
                  <img src={require("./media/carousel3.png")} alt="..." />
                </div>
              </Col>
              <Col md={3}>
                <div>
                  <img src={require("./media/carousel4.png")} alt="..." />
                </div>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <Row className="mb-3">
              <Col md={3}>
                <div className="carousel">
                  <img src={require("./media/carousel1.png")} alt="..." />
                </div>
              </Col>
              <Col md={3}>
                <div>
                  <img src={require("./media/carousel2.png")} alt="..." />
                </div>
              </Col>
              <Col md={3}>
                <div>
                  <img src={require("./media/carousel3.png")} alt="..." />
                </div>
              </Col>
              <Col md={3}>
                <div>
                  <img src={require("./media/carousel4.png")} alt="..." />
                </div>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </section>

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
