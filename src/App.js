import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import RecruiterInfo from "./component/RecruiterInfo/RecruiterInfo";
import CreateJob from "./component/CreateJob/CreateJob";
import AdminProfile from "./component/AdminProfile/AdminProfile";
import FeedbackForm from "./component/Feedback/FeedbackForm";
import RecProfile from "./component/RecruiterProfile/RecProfile";
import BioData from "./component/BioData/BioData";
import JobInformation from "./component/JobInformation/JobInformation";
import EduProject from "./component/BioData/EduProject";
import PersonalInfo from "./component/BioData/PersonalInfo";
import Qualification from "./component/BioData/Qualification";
import WorkExperience from "./component/BioData/WorkExperience";

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
        <Route path="/AdminProfile" element={<AdminProfile />} />
        <Route path="/RecruiterInfo" element={<RecruiterInfo />} />
        <Route path="/CreateJob" element={<CreateJob />} />
        <Route path="/FeedbackForm" element={<FeedbackForm />} />
        <Route path="/RecProfile" element={<RecProfile />} />
        <Route path="/BioData" element={<BioData />} />
        <Route path="/JobInformation" element={<JobInformation />} />
        <Route path="/EduProject" element={<EduProject />} />
        <Route path="/PersonalInfo" element={<PersonalInfo />} />
        <Route path="/Qualification" element={<Qualification />} />
        <Route path="/WorkExperience" element={<WorkExperience />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    // <Footer/>
  );
}

export default App;
