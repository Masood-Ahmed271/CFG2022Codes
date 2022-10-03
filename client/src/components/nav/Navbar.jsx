import React from 'react'
import './Navbar.css'
import { useNavigate } from "react-router-dom"
import Logo from '../images/JA_logo.png';

const Navbar =  () =>{

    // To navigate to different routes
    const navigate = useNavigate();

    return (
        <nav>
            <div>
                <img src={Logo} className='navbar-logo' />
            </div>
            <button onClick={()=> navigate('/login')}> Sign In for Students</button>
            <button onClick={()=> navigate('/loginCompany')}> Sign In for Companies</button>
        </nav>
    )
}


export default Navbar