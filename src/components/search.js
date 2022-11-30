import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

import { Nav } from "reactstrap";


const INITIAL_VALUE = {
    job_name:''
}

//Search Bar for navigation

const SearchBar = ({jobs}) =>{

    let navigate = useNavigate()

    const [searchData, setSearchData] = useState(INITIAL_VALUE)

    //Handles the change of the form and appplies it to searchData
    const handleFormChange = (e) => {
        e.preventDefault()
        const {name,value} = e.target
        setSearchData(fData=>({
            ...fData,
            [name]:value
        }))
    }

    //Searches for the job with the corresponding ID
    const handleSearch = e => {
        e.preventDefault()
        try{
            const findJob = jobs.find(job => job.job_name === searchData.job_name)
            console.log(findJob.id)
        return(
            navigate(`/jobs/${findJob.id}`)
            )
        }catch(err){
            console.log(err)
            return(
            navigate('/nothing')
            )
        }       
    }

    return(
        <Nav className="ml-auto" navbar>
            <form onSubmit={handleSearch} className="d-flex">
                <input 
                onChange={handleFormChange}className="form-control me-2" 
                name = 'job_name' 
                type="search" 
                placeholder="Search Jobs" aria-label="Search"/>
                <button type="submit"><a>Search</a></button>
            </form>
        </Nav>
    )
}

export default SearchBar