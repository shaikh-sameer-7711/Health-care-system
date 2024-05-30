
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import WebServices from "../../API/WebServices"
import WebAPI from "../../API/WebAPI"
import { updatePbyR } from "../../redux/PdforRslice"



export default function PatientList()
{
    const dispatch = useDispatch()
    const updatep = useSelector((state)=>state.updateP.value)
    const doctor = useSelector((state)=>state.UserInfo.value)
    
    const PD = async()=>{
                 const response = await WebServices.PatientList(WebAPI.PatientDetails,doctor.token)
                 console.log("response is ",response)
                 if(response.data.status)
                 {
                     dispatch(updatePbyR(response.data.data))
                 }
             }
            useEffect(()=>{
                PD()
            },[])

            const done = async (id)=>{
                        const URL = WebAPI.patappdone + id
                         const response = await WebServices.PatAppDone(URL,null,doctor.token )
                         console.log("appointment done list",response)
                
                         if(response.data.status)
                         {
                             const doneList = updatep.filter(ob=>ob.id !== id)
                             dispatch(updatePbyR(doneList))
                        }
                     }

                     const UNDO = async(id)=>{
                                 const URL = WebAPI.patappundo+id
                                 const response = await WebServices.PatAppUndo(URL,null,doctor.token)
                                 console.log("patient appointment undo ",response)
                                 if(response.data.status)
                                 {
                                     const UndoList = updatep.filter(ob=>ob.id != id)
                                     {
                                         dispatch(updatePbyR(UndoList))
                                     }
                                 }
                        
                             }


    return<div className="container mt-5" style={{marginBlock:'50px'}}>
        
        <h1 className="mt-5">patient list component called...</h1>
        <table className="table table-striped table-bordered table-hover">
            <thead>
                 <tr>
                     <th>SNO</th>
                     <th>ID</th>
                    <th>NAME</th>
                     <th>MOBILE</th>
                     <th>GENDER</th>
                     <th>DIAGNOSIS</th>
                    <th>AGE</th>
                     <th>APPOINTMENT DATE</th>
                     <th>TIME</th>
                    <th>ACTIVE STATUS</th> 
                </tr>
             </thead>
             <tbody>
                {updatep.map((data,index)=>{
                    return<tr>
                        <td>{index+1}</td>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>{data.phoneNumber}</td>
                        <td>{data.gender}</td>
                        <td>{data.diagnosis}</td>
                        <td>{data.age}</td>
                        <td>{data.appointmentdate}</td>
                        <td>{data.time}</td>
                        <td>{data.activeStatus ? <button className="btn btn-sm btn-warning" onClick={()=>done(data.id)}>CHECKED</button>
                         :<button className="btn btn-sm btn-danger" onClick={()=>UNDO(data.id)}>UNCHECKED</button>}</td>
                    </tr>
                })}
             </tbody>
             </table>
    </div>
}