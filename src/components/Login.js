import { useRef, useState } from "react"
import WebServices from "../API/WebServices"
import WebAPI from "../API/WebAPI"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { UserReducer } from "../redux/Slice"

export default function Login() {
    const [msg,setMsg] = useState()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const emailbox = useRef()
    const passbox = useRef()
    const LogIn = async (event) => {
        event.preventDefault();
        const email = emailbox.current.value;
        const password = passbox.current.value;

        var obj = { email: email, password: password }
        const response = await WebServices.LoginDoc(WebAPI.LoginAPI, obj)
        console.log("response is", response)
        if (response.status) {
            if (response.data.data.userType === "doctor") {
                const d = dispatch(UserReducer({ token: response.data.data.token, name: response.data.data.user.name, type: response.data.data.userType, isLogin: true }))
                navigate('/dochome')
                console.log(d)
            }
            if (response.data.data.userType === "reception") {
                const d = dispatch(UserReducer({ token: response.data.data.token, name: response.data.data.user.name, type: response.data.data.userType, isLogin: true }))
                console.log(d)
                navigate("/rechome")
            }
        }
     }
    return <div style={{ backgroundImage: 'url("images/logindoctor.jpg")', backgroundSize: '100%,auto', height: '100vh', backgroundRepeat: 'no-repeat', marginTop: '10px', backgroundPosition: 'center center', objectFit: 'cover' }}>
        <div className="container" >
            <div>
                <form onSubmit={LogIn}>
                    <div className="row">
                        <div className="col-xl-6" style={{ marginTop: '20rem' }}>
                            <div className="form-group">
                                <label className="control-label text-primary" for="name" style={{ fontSize: '20px', fontWeight: 'bolder' }}>Email</label>
                                <input id="name" ref={emailbox} type="text" placeholder="enter email" className="form-control input-md" />
                            </div>
                            <div className="form-group">
                                <label className="control-label text-primary" for="name" style={{ fontSize: '20px', fontWeight: 'bolder' }}>Password</label>
                                <input id="name" ref={passbox} type="text" placeholder="enter password" className="form-control input-md" />
                            </div><br />
                            <button className="btn btn-success form-control">LogIn</button><br /><br />
                            {/* <span>{msg}</span> */}
                            <span className="text-center text-dark">Dont't have account click here&nbsp;&nbsp;<Link to="/register">Register Here</Link></span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
}