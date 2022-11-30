import { NavLink } from "react-router-dom";

import SearchBar from "./search";

import {Navbar, Nav} from 'reactstrap'
import '../css/NavBar.css'


//Navigation bar

const NavBar = ({jobs}) => {

    return(
        <>     
            <Navbar expand = 'md' >
                <Nav>
                    <NavLink className='Navi'to = '/'>Home</NavLink>
                </Nav>
                <Nav>
                    <NavLink className = 'Navi'to = '/jobs'>Jobs</NavLink>
                </Nav>
                <Nav>
                    <NavLink className = 'Navi'to = '/create'>Create Job Listing</NavLink>
                </Nav>
                <Nav>
                    <SearchBar jobs = {jobs}/>
                </Nav>
            </Navbar>
        </>
        )
}

export default NavBar