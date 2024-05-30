
import { useEffect, useState } from "react"
import WebServices from "../../API/WebServices"
import WebAPI from "../../API/WebAPI"
import { useDispatch, useSelector } from "react-redux"
import { updatePbyR } from "../../redux/PdforRslice"
import { useNavigate } from "react-router-dom"
import { UpdatePatient } from "../../redux/Updaterecepslice"

export default function PatientDetailsforRecception()
{
    const dispatch = useDispatch()
    const [msg,setMsg] = useState()
    const navigate = useNavigate()
    const Patlist = useSelector((state)=>state.updateP.value)
    const doctor = useSelector((state)=>state.UserInfo.value)
    const PatdetailR = async()=>{
                const response = await WebServices.PatientDforReception(WebAPI.PatListRecp,doctor.token)
                console.log("patient list for reception is",response)
                if(response.status )
                {
                    dispatch(updatePbyR(response.data.data))
                }
            }
            useEffect(()=>{
                PatdetailR()
            },[])
            console.log("pat list is",Patlist)
            const DeleteP = async(id)=>{
                        const cnfrm = window.confirm("Are you sure to Delete the Patient...!!!")
                        if(cnfrm)
                        {
                            const URL = WebAPI.patientDeletebyR + id
                            const response = await WebServices.DeletePbyR(URL,doctor.token)
                            console.log("response of delete patient list api",response)
                            if(response.status)
                            {
                                const NEW_LIST = Patlist.filter(ob=>ob.id != id)
                                dispatch(updatePbyR(NEW_LIST))
                                setMsg(response.data.msg)
                            }
                        }
                    }
                    const updateD = (data)=>{
                            navigate("/PatientupdatebyR")
                            dispatch(UpdatePatient(data)) 
                        }
            



    return<div className="container" style={{marginBlock:'10rem'}}>
       <h2 className="text-center text-info mb-4" style={{fontWeight:'bolder'}}>Patient Details</h2>
         <table className="table table-striped table-bordered table-hover">
             <thead>
                 <tr>
                     <th>SNO</th>
                     <th>ID</th>
                     <th>NAME</th>
                     <th>AGE</th>
                     <th>GENDER</th>
                     <th>APPOINTMENT DATE</th>
                     <th>DIAGNOSIS</th>
                     <th>APPOINTMENT TIME</th>
                     <th>ACTION</th>
                 </tr>
                 </thead>
                 <tbody>
                    {Patlist.map((data,index)=>{
                        return<tr>
                            <td>{index+1}</td>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.age}</td>
                            <td>{data.gender}</td>
                            <td>{data.appointmentdate}</td>
                            <td>{data.diagnosis}</td>
                            <td>{data.time}</td>
                            <td><button className="btn btn-success" onClick={()=>updateD(data)}>EDIT</button>
                        &nbsp;&nbsp;&nbsp;
                         <button className="btn btn-danger" onClick={()=>DeleteP(data.id)}>DELETE</button></td>
                        </tr>
                    })}
                 </tbody>
</table>
    </div>
}