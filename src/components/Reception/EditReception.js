import { useRef, useState } from "react"
import { useSelector } from "react-redux"
import WebServices from "../../API/WebServices"
import WebAPI from "../../API/WebAPI"


export default function EditReception()
{
    const doctor = useSelector(state=>state.UserInfo.value)
   const UPDATE = useSelector(state=>state.UpdateRecep.value)
   const [msg,setMsg] = useState("")
    const namebox = useRef()
    const oldpass = useRef()
    const newpass = useRef()
    const mobilebox = useRef()


    const Update = async(event)=>{
        event.preventDefault()

        const nameb = namebox.current.value;
        const oldpassb = oldpass.current.value;
        const newpassb = newpass.current.value;
        const mobileboxb = mobilebox.current.value;

        var obj = {name:nameb,oldPassword:oldpassb,phoneNumber:mobileboxb,password:newpassb}
        const URL = WebAPI.UpdateReception + UPDATE.id
        const response = await WebServices.UpdateReception(URL,obj,doctor.token)
        console.log(response)
        if(response.status)
        {
            setMsg(response.data.msg)
        }
        }
    return<div className="container" style={{marginBlock:'10rem'}}>
        <form onSubmit={Update}> 
        <div className="row">
           <div className="col-xl-6">
            <label className="form-group"  style={{fontWeight:'bolder',fontSize:'30px'}}>NAME</label>
           </div>
           <div className="col xl-6">
            <input type="text" placeholder="Name" ref={namebox} defaultValue={UPDATE.name} className="form-control"/>
           </div>

           <div className="col-xl-6">
            <label className="form-group" style={{fontWeight:'bolder',fontSize:'30px'}}>OLD PASSWORD</label>
           </div>
           <div className="col xl-6">
            <input type="text" placeholder="Password" ref={oldpass} value={UPDATE.password} className="form-control"/>
           </div>

           <div className="col-xl-6">
            <label className="form-group" style={{fontWeight:'bolder',fontSize:'30px'}}>NEW PASSWORD</label>
           </div>
           <div className="col xl-6">
            <input type="text" placeholder=" Enter New Password" ref={newpass} defaultValue={UPDATE.password} className="form-control"/>
           </div>

           {/* <div className="col-xl-6">
            <label className="form-group" style={{fontWeight:'bolder',fontSize:'30px'}}>EMAIL</label>
           </div>
           <div className="col xl-6">
            <input type="text" placeholder=" Enter New Password" ref={emailbox} className="form-control" value={UPDATE.email}/>
           </div> */}

           {/* <div className="col-xl-6">
            <label className="form-group" style={{fontWeight:'bolder',fontSize:'30px'}}>ADDERSS</label>
           </div>
           <div className="col xl-6">
            <input type="text" placeholder=" Enter New Password" ref={newpass} className="form-control" value={UPDATE.raddress}/>
           </div> */}

           <div className="col-xl-6">
            <label className="form-group" style={{fontWeight:'bolder',fontSize:'30px'}}>MOBILE</label>
           </div>
           <div className="col xl-6">
            <input type="text" placeholder="Mobile" ref={mobilebox} defaultValue={UPDATE.phoneNumber} className="form-control"/>
            <button className="btn btn-success mt-5 form-control">EDIT INFO</button>
            <h3 className="mt-3 text-center text-danger">{msg}</h3>
           </div>
        
        </div>                      
        </form>
    </div>
}