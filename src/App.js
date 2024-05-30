import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Register from "./components/Register";
import Services from "./components/Services";
import Contact from "./Contact";
import Appointment from "./components/Appointment";
import Nav from "./components/Nav";
import Login from "./components/Login";
import { useSelector } from "react-redux";
import AddReception from "./components/doctor/AddReception";
import WrongURL from "./components/WrongUrl";
import ReceptionDetails from "./components/doctor/RecteptionDetails";
import Addpatient from "./components/Reception/Addpatient";
import DoctorHome from "./components/doctor/DocHome";
import ReceptionHome from "./components/Reception/ReceptionHome";
import PatientDetails from "./components/doctor/PatientDetails";
import EditReception from "./components/Reception/EditReception";
import PatientDetailsforRecception from "./components/Reception/PatientDetailRecp";
import PatientUpdatebyR from "./components/Reception/PatientUpdatabyR";
import PatientList from "./components/doctor/PatientDetails";

export default function App() {
  const user = useSelector(state => state.UserInfo.value)
  return <div>
    <Nav />
    <Routes>
      {user.isLogin ?
        <>
          {user.type == "doctor" ?
            <>
              <Route path="/Dochome" element={<DoctorHome/>}></Route>
              <Route path="/editReception" element={<EditReception />}></Route>
              <Route path="/addreception" element={<AddReception />}></Route>
              <Route path="/receptiondetail" element={<ReceptionDetails />}></Route>
              <Route path="/patientdetail" element={<PatientList />}></Route>
            </> : ""}
          {user.type == "reception" ?
            <>
              <Route path="/rechome" element={<ReceptionHome />}></Route>
              <Route path="/addpatient" element={<Addpatient />}></Route>
              <Route path="/patientdetailsforrec" element={<PatientDetailsforRecception />}></Route>
              <Route path="/patientupdatebyR" element={<PatientUpdatebyR />}></Route>
            </> : ""}
        </> :
        <>
          <Route path="/" element={<Home />}></Route>
          <Route path="/userhome" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/appointment" element={<Appointment />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="*" element={<WrongURL />}></Route>
        </>}
    </Routes>
  </div>
}