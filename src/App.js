import NavBar from './components/navbar'
import Home from './components/home'
import PostForm from './components/post';
import JobsList from './components/joblist'
import JobItemDetail from "./components/jobitemdetail"
import ErrLink from './components/errlink';
import JobNotFound from './components/jobnotfound';

import './css/App.css'

import { Routes, BrowserRouter, Route} from "react-router-dom";
import { useEffect, useState } from 'react';

import JobManApi from './Api';



function App() {

  //loading screen
  const [isLoading, setIsLoading] = useState(true);


  //API request data
  const[jobs,setJobs] = useState([])
  const [applicants,setApplicants] = useState([])

  //API request on load
  useEffect(()=>{
    //Gets all jobs from API

    async function fetchJobs(){
      let jobs = await JobManApi.getJobs()
      setJobs(jobs)
      setIsLoading(false);
      console.log(jobs)
     
    }
    fetchJobs()

    //Gets all applicants from the API
    
    async function fetchApplicants(){
      let applicants = await JobManApi.getApplicants()
      setApplicants(applicants)
      setIsLoading(false);
    }
    fetchApplicants()
  },[])

  //Loading Page
  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }


  return (
    <div className="App">     
      <BrowserRouter>
          <NavBar jobs ={jobs}/>
          <main>
            <Routes>
              <Route path = '/' exact element = {<Home/>}/>
              <Route path = '/create' exact element ={<PostForm/>}/>
              <Route path = '/jobs' exact element={<JobsList jobs = {jobs}/>}/>           
              <Route path = '/jobs/:id' exact element = {<JobItemDetail jobs = {jobs} applicants = {applicants}/>}/>
              <Route path = '/nothing' exact element = {<JobNotFound/>}/>
              <Route path = '*'exact element ={<ErrLink/>}/>    
            </Routes>
          </main>
      </BrowserRouter>
    </div>
  );

}

export default App;
