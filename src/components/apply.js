import React,{useState} from "react";

import JobManApi from "../Api";

import '../css/apply.css'
import { Card } from "reactstrap";

const INITIAL_STATE = {
    
    jobID:'',
    first_name:'',
    last_name:'',
    experience:'',

    }

const Apply = ({id, name, handleClose}) => {

    const [formData, setFormData] = useState(INITIAL_STATE)

    //Allows for the applicants jobid == to the job id
    formData.jobID = id

    //applies the data gathered to formData
    const handleFormChange = e => {
        e.preventDefault()
        const {name,value} = e.target
            setFormData(fData => ({
                ...fData,
                [name]:value
            }))
    }

    //submits the formData to the API and reloads the page so accurate applciants is displayed

    const handleSubmit = e =>{
        e.preventDefault()
        JobManApi.postApply(formData)
        setFormData(INITIAL_STATE)
        window.location.reload()
    }

    return (
        <Card>
            <div className="popup-box">
                <Card>
                    <span className="close-icon" onClick = {handleClose}>x</span>
                    <h2>{name}</h2>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="first_name">First Name:</label>
                        <input 
                        type='text' 
                        name ='first_name' 
                        value={formData.first_name}
                        onChange={handleFormChange}></input>
                        <br/>
                        <label htmlFor="last_name">Last Name:</label>
                        <input 
                        type='text' 
                        name='last_name'
                        value ={formData.last_name}
                        onChange ={handleFormChange}></input>
                        <br/>
                        <label htmlFor="experience" 
                        >Experience:</label>
                        <input 
                        type='text'
                        name = 'experience'
                        value = {formData.experience}
                        onChange={handleFormChange}></input>
                        <br/>
                        <button id ='subapp'type="submit">Submit Application</button>
                    </form>
                </Card>
            </div>
            


        </Card>
    )
}

export default Apply