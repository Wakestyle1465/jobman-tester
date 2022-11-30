import React from "react";
import JobListItem from "./joblistitem";

//The job list page

const JobsList = ({jobs}) => {

    return (
        
        <div>
            <h1 id = 'title'>Jobs Available</h1>
            {jobs.map(j => (<JobListItem job = {j} key ={j.id} ></JobListItem>))}
        </div>
    )
}

export default JobsList