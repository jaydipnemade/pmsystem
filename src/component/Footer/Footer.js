import "./footer.css";
import fb from "./facbook.png";
import insta from "./instagram.png";
import twitter from "./twitter.png";
import linkedin from "./linkedin.png";
import Slider from "../Slider/Slider";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="justify-content-around">
      <div className="container p-3">
        <hr />
        <div className="row">
          <div className="col-md-3 col-6 sm-6 p-3 text-center">
            <span style={{ color: "#006622" }}>PMS</span>
            <br />
            <text>Indias's No 1 job Site</text>

            <div className="icons">
              <p>
                {" "}
                <strong>Connect with us</strong>
              </p>

              <a href="https://www.facebook.com/joydip.nemade" target="_blank">
                {" "}
                <img src={fb} alt="Icon" style={{ width: "30px" }} />
              </a>
              <a
                href="https://instagram.com/jaydip_nemade_?igshid=OGQ5ZDc2ODk2ZA=="
                target="_blank"
              >
                <img src={insta} alt="Icon" style={{ width: "30px" }} />
              </a>
              <a href="https://twitter.com" target="_blank">
                <img src={twitter} alt="Icon" style={{ width: "30px" }} />
              </a>
              <a href="www.linkedin.com/in/jaydipnemade16" target="_blank">
                <img src={linkedin} alt="Icon" style={{ width: "30px" }} />
              </a>
            </div>
          </div>

          <div className="col-md-3 col-6 sm-6 p-3 text-center">
            <ul className="list-unstyled">
              <li>About us</li>
              <li>Career</li>
              <li>Employee home</li>
              <li>Sitemap</li>
              <li>
                {" "}
                <Link
                  to={"/UserProfile"}
                  className="nav-link active"
                  style={{ backgroundColor: "transparent" }}
                >
                  UserProfile
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-3 col-6 sm-6 p-3 text-center">
            <ul className="list-unstyled">
              <li>Help center</li>
              <li>Summons/Notices</li>
              <li>Grievances</li>
              <li>Report issue</li>
              <li>
                {" "}
                <Link
                  to={"/CreateJob"}
                  className="nav-link active"
                  style={{ backgroundColor: "transparent" }}
                >
                  CreateJob
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-3 col-6 sm-6 p-3 text-center">
            <ul className="list-unstyled">
              <li>Privacy policy</li>
              <li>Terms & conditions</li>
              <li>Fraud alert</li>
              <li>Trust & safety</li>
            </ul>
          </div>
        </div>
        <div className="text-center "></div>
        Our Partners
        <div className="mx-auto Slider col-12">
          <Slider />
        </div>
        <hr />
        <div className="row">
          <div className="col-12 text-center">
            All rights reserved &copy; 2023 info Edge(India)Ltd.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
