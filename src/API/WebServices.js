import axios from "axios";


class Webservice{
     RegisterDoc(url,data)
     {  
        return axios.post(url,data)
    }
    LoginDoc(url,data)
    {
        return axios.post(url,data)
    }
    ReceptionSave(url,data,token)
    {
        return axios.post(url,data,{headers:{
            Authorization:`Bearer `+token
        }})
    }
    ReceptionList(url,token)
    {
        return axios.get(url,{
            headers:{
                Authorization: `Bearer `+token
            }
        })
    }
    PatientList(url,token)
    {
        return axios.get(url,{
            headers:{
                Authorization: `Bearer `+token
            }
        })
    }
    ReceptionDelete(url,data,token)
    {
        return axios.put(url,data,{
            headers:{
                Authorization:`Bearer `+token
            }
        })
    }
    UpdateReception(url,data,token)
    {
        return axios.put(url,data,{
            headers:{
                Authorization:`Bearer `+token
            }
        })
    }
    PatAppDone(url,data,token)
    {
        return axios.put(url,data,{
            headers:{
                Authorization: `Bearer `+token
            }
        })
    }
    PatAppUndo(url,data,token)
    {
        return axios.put(url,data,{
            headers:{
                Authorization: `Bearer `+token
            }
        })
    }
    receptionaddpatient(url,data,token)
    {
        return axios.post(url,data,{
            headers:{
                Authorization:`Bearer `+token
            }
        })
    }
    PatientDforReception(url,token)
    {
        return axios.get(url,{
            headers:{
                Authorization:`Bearer `+token
            }
        })
    }
    DeletePbyR(url,token)
    {
        return axios.delete(url,{
            headers:{
                Authorization:`Bearer `+token
            }
        })
    }
   UpdatePbyR(url,data,token)
   {
    return axios.put(url,data,{
        headers:{
            Authorization:`Bearer `+token
        }
    })
   }
     
}

export default new Webservice();