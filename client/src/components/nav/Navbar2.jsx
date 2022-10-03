import React from 'react'
import './Navbar.css'
import Logo from '../images/JA_logo.png';
import { useNavigate } from "react-router-dom"

const Navbar =  ({setLoginUser}) =>{

    const navigate = useNavigate();

    return (
        <>
        <nav>
            <div>
                <img src={Logo} className='navbar-logo' />
            </div>
            <button onClick={() => navigate('/landing')}> Sign Out </button>
            {/* <div className="button" onClick={() => setLoginUser({})} >Logout</div> */}
        </nav>
        </>

    )
}


export default Navbar