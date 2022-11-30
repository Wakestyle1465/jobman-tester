import React from "react";

import { Card } from "reactstrap";
import '../css/home.css'

//Home page


const Home = () => {
 
    return(
        <div id = 'home'>
            <Card>
                <div>
                    <h1>Job Man</h1>
                    <p>Welcome to Job Man, your premier staffing website. Whether you are searching for a job, or creating a listing, we have made it easy for you. Finding work is hard and we know that, that is why we have made it easy to apply for jobs and create listings as needed. </p>
                    <a 
                    className="link"
                    to = 'https://jobman-tester.herokuapp.com/jobs'>
                        <button> See Jobs Available</button>
                    </a>
                  
                    <br/>
                    <span>or</span> 
                    <br/>
                    <a 
                    to = 'https://jobman-tester.herokuapp.com/create'>
                        <button id= 'btn'> Create Job Listing</button>
                    </a>
                   
                </div>
            </Card>            
        </div>
    )
}

export default Home