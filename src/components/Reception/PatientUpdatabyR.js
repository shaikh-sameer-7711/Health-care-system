import { useRef, useState } from "react"
import { useSelector } from "react-redux"
import WebServices from "../../API/WebServices"
import WebAPI from "../../API/WebAPI"

export default function PatientUpdatebyR()
{
    const doctor = useSelector(state=>state.UserInfo.value)
   const UPDATE = useSelector(state=>state.EditP.value)
   const [msg,setMsg] = useState("")
    const namebox = useRef()
    const appbox = useRef()
    const mobbox = useRef()

    const EditP = async(event)=>{
        event.preventDefault()

        const nameb = namebox.current.value;
        const appointment = appbox.current.value;
        const pmobile = mobbox.current.value;

        var obj = {name:nameb,appointmentdate:appointment,phoneNumber:pmobile}
        const URL = WebAPI.patientupdatebyR + UPDATE.id
        const response = await WebServices.UpdatePbyR(URL,obj,doctor.token)
        console.log(response)
        if(response.status)
        {
            setMsg(response.data.msg)
        }
        }   
    return<div className="container" style={{marginBlock:'10rem'}}>
        <form onSubmit={EditP}>
         <div className="row">
           <div className="col-xl-6">
            <label className="form-group"  style={{fontWeight:'bolder',fontSize:'30px'}}>NAME</label>
           </div>
           <div className="col xl-6">
            <input type="text" placeholder="Name" ref={namebox} defaultValue={UPDATE.name} className="form-control"/>
           </div>

           <div className="col-xl-6">
            <label className="form-group"  style={{fontWeight:'bolder',fontSize:'30px'}}>APPOINTMENT DATE</label>
           </div>
           <div className="col xl-6">
            <input type="date" placeholder="update date" ref={appbox} defaultValue={UPDATE.appointmentdate} className="form-control"/>
           </div>

           <div className="col-xl-6">
            <label className="form-group"  style={{fontWeight:'bolder',fontSize:'30px'}}>MOBILE</label>
           </div>
           <div className="col xl-6">
            <input type="number" placeholder="update number" ref={mobbox} defaultValue={UPDATE.phoneNumber} className="form-control"/>
           </div>
           </div>
           <button className="btn btn-success form-control mt-4">EDIT</button>
           <h3 className="text-center text-success mt-5">{msg}</h3>
    </form>
    </div>
}