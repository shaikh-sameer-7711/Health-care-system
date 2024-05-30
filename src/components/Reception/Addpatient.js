
import { useRef, useState } from "react"
import WebServices from "../../API/WebServices"
import WebAPI from "../../API/WebAPI"
import { useSelector } from "react-redux"

export default function Addpatient()
{
    const [msg,setMsg] = useState("")
    const doctor = useSelector(state=>state.UserInfo.value)
    const namebox = useRef()
    const genderbox = useRef()
    const agebox = useRef()
    const mobilebox = useRef()
    const appointmentbox = useRef()
    const apptimebox = useRef()

    const AddPatient = async(event)=>{
        event.preventDefault();
        const pname = namebox.current.value;
        const pgender = genderbox.current.value;
        const page = agebox.current.value;
        const pmobile = mobilebox.current.value;
        const papointmentd = appointmentbox.current.value;
        const papointmenttime = apptimebox.current.value;

        // var obj = { name: pname,sex:pgender,age:page,phoneNumber:pmobile,appointmentdate:papointmentd,time:papointmenttime}
        var obj = {
            name: pname,gender:pgender,age:page,phoneNumber:pmobile,appointmentdate:papointmentd,time:papointmenttime}
        console.log("object is",obj)
        console.log("doctor token =",doctor)
        //  const response = await WebServices.receptionaddpatient(WebAPI.AddPatient,obj,doctor.token)
        //  console.log("response is",response)
        //  if(response.status)
        //  {
        //     setMsg(response.data.msg)
        //     event.target.reset();
        //  }

        const response = await WebServices.receptionaddpatient(WebAPI.AddPatient, obj, doctor.token);
            console.log("response is", response);
            if (response.status) {
                setMsg(response.data.msg);
                event.target.reset();
            } else {
                setMsg("Failed to add patient. Please try again.");
            }
    }
    return<div className="container" style={{marginBlock:'10rem'}}>
        <h2 className="text-center text-info mb-4" style={{fontWeight:'bolder'}}>ADD PATIENTS</h2>
         <form onSubmit={AddPatient}>
        <div className="row">
        
            <div className="col-sm-3 form-group">
                <label className="control-label" for="name" style={{fontWeight:'bolder'}}>Name</label>
                </div>
                <div className="col-sm-8">
                <input id="name"  type="text" placeholder="Name" className="form-control input-md" ref={namebox} />
                    </div>
                </div>

                <div className="row">
            <div className="col-sm-3  form-group">
            <label className="control-label"  style={{fontWeight:'bolder'}}>GENDER</label>
                </div>
                <div className="col-sm-8  form-group font-weight-bolder">
                <select ref={genderbox} className="form-control">
                <option>GENDER</option>
                    <option>MALE</option>
                    <option>FEMALE</option>
                </select>
                    </div>
                </div>

                <div className="row">
            <div className="col-sm-3  form-group" style={{fontWeight:'bolder'}}>
                <label className="control-label">AGE</label>
                </div>
                <div className="col-sm-8">
                <input id="name"  type="number" placeholder="Enter Age" className="form-control input-md" ref={agebox}/>
                    </div>
                </div>

                <div className="row">
            <div className="col-sm-3  form-group" style={{fontWeight:'bolder'}}>
                <label className="control-label">Mobile</label>
                </div>
                <div className="col-sm-8">
                <input id="name"  type="number" placeholder="Enter mobile number" className="form-control input-md" ref={mobilebox}/>
                    </div>
                </div>
                <div className="row">
            <div className="col-sm-3  form-group" style={{fontWeight:'bolder'}}>
                <label className="control-label">APPOINTMENT DATE</label>
                </div>
                <div className="col-sm-8">
                <input id="name"  type="date" placeholder="Enter address" className="form-control input-md" ref={appointmentbox}/>
                    </div>
                </div>

                <div className="row">
            <div className="col-sm-3  form-group" style={{fontWeight:'bolder'}}>
                <label className="control-label">APPOINTMENT TIME</label>
                </div>
                <div className="col-sm-8">
                <input id="name"  type="time" placeholder="Enter address" className="form-control input-md" ref={apptimebox}/>
                    
                <button className="btn btn-success form-control mt-3">Register</button></div>
                
                </div>
                <h3 className="text-success mt-4" style={{textAlign:'center',fontWeight:'bold'}}>{msg}</h3>
                </form>
    </div>
}