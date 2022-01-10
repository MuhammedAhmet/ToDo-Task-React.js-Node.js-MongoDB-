import React, { Component } from 'react'
import { Consumer } from '../context'
import axios from 'axios'
import {Provider} from "../context"


export default class AddTask extends Component {

    state={
        task : "",
        creatorId:""
    }

    update = (e) =>{
        this.setState({
            task : e.target.value
        })
    }

    add = (dispatch , e) => {
        e.preventDefault()
        const newTask = this.state

        if(newTask.task != "" && newTask.task.trim() !== "" ){

            newTask.creatorId = this.props.UserId

            axios.post("http://localhost:4000/api/task/" , newTask)
            .then(res => dispatch({type:"ADD", payload: res.data}))

            
            this.setState({
                task : "",
                creatorId:""
            })
        }
        else
        {
            this.setState({
                task : "",
                creatorId:""
            })
        }
    }
    render() {
        return (
            <Consumer>
                {value => {
                    const {dispatch} = value
                    return <div className="input-group mb-3 topPad_1">
                    <input type="text" className="form-control" placeholder="Task Field" aria-describedby="button-addon2" onChange={this.update} value={this.state.task}/>
                    <div className="input-group-append">
                    <button className="btn btn-dark" type="submit" id="button-addon1" onClick={this.add.bind(this, dispatch)}>Add Task</button>
                    </div>
                    </div>  
                }}
            </Consumer>
        )
    }
}
