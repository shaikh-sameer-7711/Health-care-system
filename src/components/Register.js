import { useRef, useState } from "react"
import WebServices from "../API/WebServices"
import WebAPI from "../API/WebAPI"
import { useNavigate } from "react-router-dom"

export default function Register()
{
    const navigate = useNavigate();
    const [msg,setMsg] = useState("")
    const namebox = useRef()
    const emailbox = useRef()
    const passbox = useRef()
    const mobilebox = useRef()

    const Register = async (event)=>{
        event.preventDefault()

        const dname = namebox.current.value;
        const demail = emailbox.current.value;
        const dpassword = passbox.current.value;
        const dmobile = mobilebox.current.value;

        var obj = {name:dname,email:demail,password:dpassword,phoneNumber:dmobile}

        const response = await WebServices.RegisterDoc(WebAPI.RegisterAPI,obj) 
        console.log("response is",response)

        if(response.data.msg)
        {
            alert(response.data.msg)
            navigate("/login")
        }

    }

    return<div className="container">
         <form onSubmit={Register}> 
        <div className="row">
            <div className="col-xl-6">
                <img src="images/register.jpg" height={'500rem'} width={400} style={{marginTop:'13vh',marginBottom:'13vh'}} className="img-thumbnail" id="register-img"/>
            </div>
        
                         
                                <div className="col-xl-6" style={{marginTop:'10rem'}}>
                                    <div className="form-group">
                                        <label className="control-label" for="name">Name</label>
                                        <input id="name" ref={namebox} type="text" placeholder="Name" className="form-control input-md" />
                                    </div>

                                    <div className="form-group">
                                        <label className="control-label" for="email">Email</label>
                                        <input id="email" ref={emailbox} type="text" placeholder="E-Mail" className="form-control input-md" />
                                    </div> 
                                
                                    <div className="form-group">
                                        <label className="control-label" for="date">Password</label>
                                        <input id="date" ref={passbox} type="password" placeholder="Password" className="form-control input-md" />
                                    </div>
                                
                                <div className="form-group">
                                <label className="control-label" for="date">Mobile</label>
                                    <input id="date" ref={mobilebox} type="number" placeholder="enter mobile number" className="form-control input-md" />
                                </div>
                                
                                <div className="form-group">
                                     <button id="singlebutton" name="singlebutton" className="btn btn-success form-control">Register</button><br/>
                                     <span className="text-success">{msg}</span>
                                </div>
                               </div>
        
        </div>                      
        </form>
</div>
    
}