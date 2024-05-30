import { useEffect, useState } from "react"
import WebAPI from "../../API/WebAPI"
import WebServices from "../../API/WebServices"
import { useDispatch, useSelector } from "react-redux"
import { ReceptionD, deleteRec } from "../../redux/receptionslice"
import { useNavigate } from "react-router-dom"
import { Updatereception } from "../../redux/Updaterecepslice"

export default function Receptiondetail()
{
    const [msg,setMsg] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const Rlist = useSelector(state=>state.RecepInfo.value)
    const doctor = useSelector(state=>state.UserInfo.value)
    console.log("doctor token",doctor)

    const RD = async()=>{
        const response = await WebServices.ReceptionList(WebAPI.ReceptionDetails,doctor.token)
        console.log(response)
        if(response.data.status)
        {
            dispatch(ReceptionD(response.data.data))
        }
    }
    useEffect(()=>{
        RD();
    },[])

   const DeleteR = async(id)=>{
    const cnfrm = window.confirm("are you sure to delete the receptionist....")
    if(cnfrm)
    {
        const URL = WebAPI.ReceptionDelete + id
        const response = await WebServices.ReceptionDelete(URL,null,doctor.token)
        console.log(response)
        if(response.status)
        {
            const UP_List = Rlist.filter(ob=>ob.id !== id)
            dispatch(deleteRec(UP_List))
            setMsg(response.data.msg)
        }
    }
   }
   const EditR = async(data)=>{
        navigate("/editReception")
        dispatch(Updatereception(data))
   }
    return<div className="container" style={{marginBlock:'10rem'}}>
        <h1 className="text-center text-primary" style={{fontSize:'25px',fontWeight:'bolder', textDecoration:'underline'}}>Reception Details....</h1>
        <h3 className="text-center text-danger">{msg}</h3>
        <table className="table table-striped table-hover table-bordered">
            <thead>
                <tr>
                    <th>SNO</th>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>PASSWORD</th>
                    <th>MOBILE</th>
                    <th>ADDERSS</th>
                    <th>ACTIVE STATUS</th>
                    <th>ACTION</th>
                </tr>
            </thead>
            <tbody>
                {Rlist.map((data,index)=>{
                    return<tr>
                        <td>{index+1}</td>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td>{data.password}</td>
                        <td>{data.phoneNumber}</td>
                        <td>{data.raddress}</td>
                        <td>{data.activeStatus ? <input type="checkbox" checked></input> : <input type="checkbox"></input>}</td>
                        <td><button className="btn btn-success" onClick={()=>EditR(data)}>edit</button>&nbsp;&nbsp;&nbsp;&nbsp;
                            <button className="btn btn-danger" onClick={()=>DeleteR(data.id)}>Delete</button></td>
                    </tr>
                })}
             
            </tbody>
        </table>
    </div>
}