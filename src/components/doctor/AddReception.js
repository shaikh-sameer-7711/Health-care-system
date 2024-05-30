import { useRef, useState } from "react"
import WebServices from "../../API/WebServices"
import WebAPI from "../../API/WebAPI"
import { useSelector } from "react-redux"

export default function AddReception()
{
    const [msg,setMsg] = useState("")
    const doctor = useSelector(state=>state.UserInfo.value)
    const namebox = useRef()
    const emailbox = useRef()
    const passbox = useRef()
    const mobilebox = useRef()
    const addbox = useRef()

    const receptionAdd = async(event)=>{
        event.preventDefault()
        const rname = namebox.current.value;
        const remail = emailbox.current.value;
        const rpass = passbox.current.value;
        const rmobile = mobilebox.current.value;
        const radd = addbox.current.value;

        var obj = {name:rname,phoneNumber:rmobile,email:remail,password:rpass,raddress:radd}
        console.log(obj)

        const response = await WebServices.ReceptionSave(WebAPI.RecptionSave,obj,doctor.token)
        console.log("response is"+response)
        console.log("response is"+JSON.stringify(response))

        if(response.data.msg)
        {
            setMsg(response.data.msg)
            event.target.reset();
        }else
        {
            setMsg(response.data.message)
        }

    }
    return<div className="container" style={{marginTop:'10em',marginBottom:'10rem'}}>
        {/* <img src="./images/logo44.jpg" height='100px' width='100px'/> */}
        <h2 className="text-center text-primary mb-4" style={{fontWeight:'bolder'}}>ADD RECEPTIONS</h2>
        <form onSubmit={receptionAdd}>
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
                <label className="control-label"  style={{fontWeight:'bolder'}}>Email</label>
                </div>
                <div className="col-sm-8  form-group font-weight-bolder">
                <input id="name"  type="email" placeholder="Enter Email" className="form-control input-md" ref={emailbox}/>
                    </div>
                </div>

                <div className="row">
            <div className="col-sm-3  form-group" style={{fontWeight:'bolder'}}>
                <label className="control-label">password</label>
                </div>
                <div className="col-sm-8">
                <input id="name"  type="password" placeholder="Enter Password" className="form-control input-md" ref={passbox}/>
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
                <label className="control-label">Address</label>
                </div>
                <div className="col-sm-8">
                <input id="name"  type="text" placeholder="Enter address" className="form-control input-md" ref={addbox}/>
                <button className="btn btn-success form-control mt-3">Register</button>
                    </div>
                </div>
                <h3 className="text-center text-success mt-5" style={{fontWeight:'bold'}}>{msg}</h3>
                <h3 className="text-center text-success mt-5">{msg.message}</h3>
                
                </form>
            </div>       
        
}
