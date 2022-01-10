/*
import "../Css/Register.css"
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { Consumer } from "../context"

export default class AddTask extends Component {

  state={
      username:"",
      password:""
  }
  
  update = (e) => {
    this.setState({
      username : e.target.value.username,
      password : e.target.value.password
    })
  }

  add = (dispatch)


  render(){

    return (
      <Consumer>
        {value =>{
          const {dispatch} = value
          return <div className='login center'>
          <h1>Register</h1>
          <input type="text" placeholder="Enter username" onChange={this.update} value={this.state.username}></input>
          <input type="password" placeholder="Enter password" onChange={this.update}  value={this.state.password}></input>
          <div className="button">Register</div>  
          <div>or</div>
          <Link to="/">
          <i>Back to Login</i>
          </Link>
          </div>
        }}
      </Consumer>
    );

  }
}
*/