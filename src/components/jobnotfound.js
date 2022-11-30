import React from "react";

//Job not found from the search bar

const JobNotFound = () =>{

    return(
        <div>
            <h2>Job not Found</h2>
            <p>Job search must exactly match the listing name.</p>
            <p>Check out the jobs we have available <a href = '/jobs'>here</a>.</p>
        </div>
    )
}

export default JobNotFound