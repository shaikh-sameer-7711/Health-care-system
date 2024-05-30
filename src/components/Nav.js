
import { useDispatch, useSelector } from "react-redux";
import {  Link, useNavigate } from "react-router-dom";
import { UserReducer } from "../redux/Slice";

export default function Nav()
{
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(state=>state.UserInfo.value)
    const Logout = ()=>{
       const d = dispatch(UserReducer({name:undefined,token:undefined,isLogin:false,type:undefined}))
       console.log(d) 
       navigate("/userhome")
    }
    return<>
     <header className="top-header">
		<nav className="navbar header-nav navbar-expand-lg fixed-top bg-light">
            <div className="container">
				<a className="navbar-brand" href="index.html"><img src="images/logo.png" alt="image"/></a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-wd" aria-controls="navbar-wd" aria-expanded="false" aria-label="Toggle navigation">
					<span></span>
					<span></span>
					<span></span>
				</button>
                <div className="collapse navbar-collapse justify-content-end" id="navbar-wd">
                    <ul className="navbar-nav">
                        {user.isLogin ? 
                        <>
                        {user.type === "doctor" ?
                        <>
                        <li><Link className="nav-link" to="/dochome" style={{fontWeight:'bolder'}}>Home</Link></li>
                        <li><Link className="nav-link" to="/addreception" style={{fontWeight:'bolder'}}>AddReception</Link></li>
                        <li><Link className="nav-link" to="/receptiondetail" style={{fontWeight:'bolder'}}>RecteptionDetails</Link></li>
                        <li><Link className="nav-link" to="/patientdetail" style={{fontWeight:'bolder'}}>PatientDetails</Link></li>
                        <li><Link className="nav-link" to="/" style={{fontWeight:'bolder'}} onClick={Logout}>Logout</Link></li> 
                        </>:""}
                        {user.type === "reception" ? 
                        <>
                        <li><Link className="nav-link" to="/rechome" style={{fontWeight:'bolder'}}>Home</Link></li>
                        <li><Link className="nav-link" to="/addpatient" style={{fontWeight:'bolder'}}>addpatient</Link></li>
                        <li><Link className="nav-link" to="/patientdetailsforrec" style={{fontWeight:'bolder'}}>patientdetails</Link></li>
                        <li><Link className="nav-link" to="/" style={{fontWeight:'bolder'}} onClick={Logout}>Logout</Link></li>
                        </>:""}
                        </>:
                        <>
                        <li><Link className="nav-link" to="/" style={{fontWeight:'bolder'}}>Home</Link></li>
                        <li><Link className="nav-link" to="/about" style={{fontWeight:'bolder'}}>About Us</Link></li>
                        <li><Link className="nav-link" to="/services" style={{fontWeight:'bolder'}}>Services</Link></li>
						<li><Link className="nav-link" to="/appointment" style={{fontWeight:'bolder'}}>Appointment</Link></li>
                        <li><Link className="nav-link" to="/contact" style={{fontWeight:'bolder'}}>Contact</Link></li>
                        <li><Link className="nav-link" to="/register" style={{fontWeight:'bolder'}}>Register</Link></li>
                        <li><Link className="nav-link" to="/login" style={{fontWeight:'bolder'}}>LogIN</Link></li>
                        </>}
                    </ul>
                </div>
            </div>
        </nav>
	</header>
    </>
}