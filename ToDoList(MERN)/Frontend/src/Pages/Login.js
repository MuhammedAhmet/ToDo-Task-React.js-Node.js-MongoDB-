import "../Css/Login.css"
import React, {useState} from 'react'
import {Link , useNavigate} from 'react-router-dom'
import axios from "axios"
import { Consumer } from "../context"


function App( {setLoginUser} ) {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        username:"",
        password:"",
        Id:"",
        Token:""
    })

    const handle = (e) => {
        const {name,value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    }


    const login = (dispatch) =>{
        const {username,password} = user
        if(username && password){
            axios.post("http://localhost:4000/api/usr/login",user)
            .then(res => {
                if(res.data == "Error while Login"){
                    alert("Error")
                    console.log(res.data)
                    setUser({
                        username:"",
                        password:"",
                        Id:"",
                        Token:""
                    })

                }
                else{

                    setLoginUser(res.data.user)

                    var UserId = res.data.user._id

                    axios.get("http://localhost:4000/api/task/"+ UserId)
                    .then(res => dispatch({type:"TASKS", payload: res.data}))

                    navigate("/")
                }
            })
        }
        else{
            alert("Error")
            setUser({
                username:"",
                password:"",
                Id:"",
                Token:""
            })
        }
    }

    return (
        <Consumer>
            {
                value => {
                    const {dispatch} = value
                    return <div className='login center'>
                    <h1>Login</h1>
                    <input type="text" placeholder="Enter username" onChange={handle} name="username" value={user.username}></input>
                    <input type="password" placeholder="Enter password" onChange={handle} name="password" value={user.password}></input>
                    <div className="button" onClick={login.bind(this,dispatch)}>Login</div>  
                    <div>or</div>
                    <div className="button" onClick={() => navigate("/register")}>Register</div>
                    </div>
                }
            }     
        </Consumer>
    );

  
}

export default App;
