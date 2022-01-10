import '../App.css';
import React, {useState} from 'react';
import { Link , useNavigate} from 'react-router-dom';
import axios from 'axios'

function App() {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        username:"",
        password:""
    })

    const handle = (e) => {
        const {name,value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    } 

    const register = () =>{
        const {username,password} = user
        if(username && password){
            axios.post("http://localhost:4000/api/usr/register",user)
            .then(res => {

                alert(res.data)

                if(res.data != "Error while registering" && res.data != "Username Already Taken"){
                    navigate("/Login")
                }
                else{
                    setUser({
                        username : "",
                        password : ""
                    })
                }
            })
        }
        else{
            alert("Error")
        }
    }


    return (
        <div className='login center'>
        {console.log(user)}
        <h1>Register</h1>
        <input type="text" placeholder="Enter username" onChange={handle} name="username" value={user.username}></input>
        <input type="password" placeholder="Enter password" onChange={handle} name="password" value={user.password}></input>
        <div className="button" onClick={register}>Register</div>  
        <div>or</div>
        <Link to="/Login">
        <i>Back to Login</i>
        </Link>
    </div>
    );
}

export default App;
