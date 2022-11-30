import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

import JobManApi from "../Api";

import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import '../css/create.css'

const INITIAL_STATE = {
    job_name:'',
    date_posted:'',
    field:'',
    location:'',
    company_name:'',
    salary:'',
    description: '',

}

//Create job listing

const PostForm = () => {
    const [formData, setFormData] = useState(INITIAL_STATE)

    const navigate = useNavigate()

    //handles the change and appends it to formData for database entry 
    const handleFormChange = e => {
        e.preventDefault()
        const {name,value} = e.target
            setFormData(fData => ({
                ...fData,
                [name]:value
            }))
        
    }

    //submits formData to db 

    const handleSubmit = e =>{
        JobManApi.postJobs(formData)
        setFormData(INITIAL_STATE)
        navigate('/jobs')
        window.location.reload()
    }

    return(
        <div id = 'app-card'>
            <Card>
             <CardBody>
               <CardTitle className="font-weight-bold text-center">
                 <u>Create Job Listing</u>
               </CardTitle>
               <CardText className="font-italic"></CardText>
               <form id ='create-form' onSubmit={handleSubmit}>
                 <label className="post" htmlFor ='job_name'>Job Title:</label>
                 <input  type ='text' name = 'job_name' value={formData.job_name} onChange={handleFormChange}></input>
                 <br/>    
                 <label className="post" htmlFor='company_name'>Company Name:</label>
                 <input type ='text' name = 'company_name' value={formData.company_name} onChange={handleFormChange}></input>
                 <br/> 
                 <label className="post" htmlFor='location'>Location:</label>
                 <input type ='text' name = 'location' value={formData.location} onChange={handleFormChange}></input>
                 <br/>
                 <label className="post"htmlFor='salary'>Salary:</label>
                 <input type ='number' name = 'salary' value={formData.salary} onChange={handleFormChange}></input>
                 <br/>
                 <label className="post"htmlFor='description'>Description:</label>
                 <input type ='text' name = 'description' value = {formData.description} onChange={handleFormChange}></input>
                 <br/>
                 <label className="post"htmlFor='date_posted'>Date:</label>
                 <input type ='text' name = 'date_posted' value={formData.date_posted} onChange={handleFormChange}></input>
                 <br/>
                 <label className="post"htmlFor='field'>Field:</label>
                 <input type ='text' name = 'field' value={formData.field} onChange={handleFormChange}></input>
                 <br/>
                 <br/>
                 <button id = 'subbtn' type = 'submit'>Submit</button>
                </form>
             </CardBody>
           </Card>
        </div>
    )
}

export default PostForm