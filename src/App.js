import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Home from "./component/Home/Home";
import ResumeBuilder from "./component/ResumeBuilder/ResumeBuilder";
import UserLogin from "./component/UserLogin/UserLogin";
import UserRegistration from "./component/UserRegistration/UserRegistration";
import Footer from "./component/Footer/Footer";
import AboutUs from "./component/AboutUs/AboutUs";
import MeetOurTeam from "./component/AboutUs/MeetOurTeam";
import NotFound from "./component/NotFound/NotFound";
import RecruiterLogin from "./component/RecruiterLogin/RecruiterLogin";
import UserProfile from "./component/UserProfile/UserProfile";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/ResumeBuilder" element={<ResumeBuilder />} />
        <Route path="/UserLogin" element={<UserLogin />} />
        <Route path="/UserRegistration" element={<UserRegistration />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/MeetOurTeam" element={<MeetOurTeam />} />
        <Route path="/RecruiterLogin" element={<RecruiterLogin />} />
        <Route path="/UserProfile" element={<UserProfile />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    // <Footer/>
  );
}

export default App;
