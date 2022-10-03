import React, {useState} from "react"
import "./Login.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Login = ({ setLoginUser}) => {

    // To navigate to different routes
    const navigate = useNavigate();

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:8081/loginCompany", user)
        .then(res => { 
            // console.log(res);
            alert(res.data.message)
            setLoginUser(res.data.user)
            navigate('/homecompany')
        })
    }

    return (
        <div className="login">
            <h1>Login Company</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={()=> navigate('/registerCompany')}>Register</div>
        </div>
    )
}

export default Login