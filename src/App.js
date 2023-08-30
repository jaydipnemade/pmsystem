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
import RecNavbar from "./component/Navbar/RecNavbar";
import CanNavbar from "./component/Navbar/CanNavbar";
import ProtectedRoute from "./component/ProtectRoutes/ProtectRouts";
function App() {
  const userRole = "default"; 
  
  let navbarComponent = null;
  if (userRole === "default") {
    navbarComponent = <Navbar />;
  } else if (userRole === "recruiter") {
    navbarComponent = <RecNavbar />;
  } else if (userRole === "candidate") {
    navbarComponent = <CanNavbar />;
  }
  return (
    <BrowserRouter>
      {navbarComponent}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route
          path="/ResumeBuilder"
          element={
            <ProtectedRoute allowedRoles={["user"]}>
              <ResumeBuilder />
            </ProtectedRoute>
          }
        />
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
  
    
  );
}

export default App;

  {
    /* <BrowserRouter>
      {navbarComponent}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route
          path="/ResumeBuilder"
          element={
            <ProtectedRoute allowedRoles={["candidate"]}>
              <ResumeBuilder />
            </ProtectedRoute>
          }
        />
        <Route path="/UserLogin" element={<UserLogin />} />
        <Route path="/UserRegistration" element={<UserRegistration />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/MeetOurTeam" element={<MeetOurTeam />} />
        <Route path="/RecruiterLogin" element={<RecruiterLogin />} />
        <Route
          path="/UserProfile"
          element={
            <ProtectedRoute allowedRoles={["candidate"]}>
              <UserProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/AdminProfile"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/RecruiterInfo"
          element={
            <ProtectedRoute allowedRoles={["recruiter"]}>
              <RecruiterInfo />
            </ProtectedRoute>
          }
        />
        <Route
          path="/CreateJob"
          element={
            <ProtectedRoute allowedRoles={["recruiter"]}>
              <CreateJob />
            </ProtectedRoute>
          }
        />
        <Route path="/FeedbackForm" element={<FeedbackForm />} />
        <Route
          path="/RecProfile"
          element={
            <ProtectedRoute allowedRoles={["recruiter"]}>
              <RecProfile />
            </ProtectedRoute>
          }
        />
     
       
        <Route
          path="/BioData"
          element={
            <ProtectedRoute allowedRoles={["candidate"]}>
              <BioData />
            </ProtectedRoute>
          }
        />
        <Route path="/JobInformation" element={<JobInformation />} />
        <Route
          path="/EduProject"
          element={
            <ProtectedRoute allowedRoles={["candidate"]}>
              <EduProject />
            </ProtectedRoute>
          }
        />
        <Route
          path="/PersonalInfo"
          element={
            <ProtectedRoute allowedRoles={["candidate"]}>
              <PersonalInfo />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Qualification"
          element={
            <ProtectedRoute allowedRoles={["candidate"]}>
              <Qualification />
            </ProtectedRoute>
          }
        />
        <Route
          path="/WorkExperience"
          element={
            <ProtectedRoute allowedRoles={["candidate"]}>
              <WorkExperience />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter> */
  }