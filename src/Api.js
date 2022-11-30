import axios from "axios"
import environment from "./env"



let BASE_API_URL = environment.API_URL

class JobManApi{
    
    //Job data
    
    static async getJobs(){
        const res = await axios.get(`${BASE_API_URL}/jobdata`)
        return res.data
    }

    static async postJobs(data){
        try{
            axios.post(`${BASE_API_URL}/jobdata`,data)
        }catch(err){
            console.log(err)
        }
    }

    //Applicant data

    static async getApplicants(){
        const res = await axios.get(`${BASE_API_URL}/applications`)
        return res.data

    }

    static async postApply(data){
        try{
            axios.post(`${BASE_API_URL}/applications`, data)
        }
        catch(err){
            console.log(err)
        }
    }

}

export default JobManApi
