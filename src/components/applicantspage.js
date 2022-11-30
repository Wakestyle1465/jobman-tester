import React from "react";
import { Card } from "reactstrap";

import '../css/applicant.css'

//displays applicants and their info

const ApplicantsPage = (a) => {

    return(
        <div id ='applicant'>
            <Card>
                <div>
                    <h5><u>{a.a.first_name} {a.a.last_name}</u></h5>
                    <p>Experience:{a.a.experience}</p>
                </div>
            </Card>
        </div>
    )
}

export default ApplicantsPage