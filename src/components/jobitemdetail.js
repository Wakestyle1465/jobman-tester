import React from "react";
import { useParams } from "react-router-dom"
import useToggle from "../hooks/useToggle";

import Apply from "./apply";
import ApplicantsPage from "./applicantspage";

import '../css/apply.css'

//Has the job listing, application, and displays the applicants

const JobItemDetail = ({jobs,applicants}) => {

    const {id} = useParams()

    //toggle the apply and applicatons data

    const [isUp, setIsUp] = useToggle(false)
    const [viewApps, setViewApps] = useToggle(false)

    //filters through applicants to find all corresponding to the job via id
    let applicant = applicants.filter(applicant => applicant.jobID === id)
    if(!applicant){
        console.log('not found')
    }

    //Displays how many applicants have applied
    let applied_num = applicant.length

    //finds the job corresponding to parameter id
    let job = jobs.find(job => job.id === id)
        if(!job) return (<>
        <h3>Job not found</h3>
        </>)

    return(
        <div>
            <div id = 'jobitem'>
                <div>
                    <h2 id = 'jobtitle'><u>{job.job_name}</u></h2>   
                    <p><i>{job.company_name}</i></p>
                    <p>Location: {job.location}</p>
                    <p>Salary:${job.salary}</p>
                    <h5><u>Description</u></h5>
                    <p id = 'description'>{job.description}</p>
                    <p>Date Posted:{job.date_posted}</p>
                    <p><i>Applicants: {applied_num}</i></p>
                    <button id = 'appbtn' onClick={setIsUp}>
                        Apply Now!
                    </button>
                    
                    {
                        isUp && 
                        <Apply handleClose ={setIsUp} id = {job.id} name = {job.job_name} jobs = {jobs}></Apply>
                        
                    }
                    
                        <a id = 'link'href="https://jobman-tester.herokuapp.com/jobs">
                            <button>Back to Jobs</button>
                        </a>                
                                     
                </div>

                {
                    !viewApps &&
                    <div>
                    <p id ='p'>or</p>
                        <button id = 'view'onClick={setViewApps}>
                        View Applicants
                        </button>
                    </div>
                }

                {
                    viewApps &&
                    <div id = 'applicants'>
                        <h2><u>Applicants</u></h2>
                        {applicant.map(a => <ApplicantsPage key = {a.id} a = {a}></ApplicantsPage>)}<a href="#jobtitle"><button>Back to Top</button></a>
                    </div>                   
                }

            </div>
        </div>
    )

}

export default JobItemDetail