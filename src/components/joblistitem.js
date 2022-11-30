import React from "react";

import '../css/joblistitem.css'
import { Card } from "reactstrap";

//The cards that display the job on the job list

const JobListItem = ({job}) => {
let URL = `https://jobman-tester.herokuapp.com/jobs/${job.id}`

    return(
        <div className = 'item'>
             <Card >
                <div id = 'jobcard'>
                    <h5 id ='jobname'>
                        <a id ='link' href = {URL} >{job.job_name}</a>
                    </h5> 
                    <p id = 'compname'>
                        <i>{job.company_name}</i>
                    </p>         
                    <p>
                        <i>{job.location}</i>
                    </p>
                 </div>        
            </Card>     
        </div>
    )

}

export default JobListItem

