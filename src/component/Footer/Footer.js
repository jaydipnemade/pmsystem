import "./footer.css";
import fb from "./facbook.png";
import insta from "./instagram.png";
import twitter from "./twitter.png";
import linkedin from "./linkedin.png";
import Slider from "../Slider/Slider";

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

              <img src={fb} alt="Icon" style={{ width: "30px" }} />
              <img src={insta} alt="Icon" style={{ width: "30px" }} />
              <img src={twitter} alt="Icon" style={{ width: "30px" }} />
              <img src={linkedin} alt="Icon" style={{ width: "30px" }} />
            </div>
          </div>

          <div className="col-md-3 col-6 sm-6 p-3 text-center">
            <ul className="list-unstyled">
              <li>About us</li>
              <li>Career</li>
              <li>Employee home</li>
              <li>Sitemap</li>
            </ul>
          </div>

          <div className="col-md-3 col-6 sm-6 p-3 text-center">
            <ul className="list-unstyled">
              <li>Help center</li>
              <li>Summons/Notices</li>
              <li>Grievances</li>
              <li>Report issue</li>
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
