import axios from 'axios'
import React, { Component } from 'react'
import { Consumer } from '../context'
import "../Css/Task.css"

export default class Task extends Component {

    remove = (_id, dispatch) =>{

        axios.delete("http://localhost:4000/api/task/" + _id)
        .then(() => dispatch({type:"REMOVE", payload: _id}))
    }

    alertBas = (_id,dispatch) => {
        var foo = prompt("Edit: ")

        if(foo === null){

        }
        else{
            var Task = {
                task : foo
            }
            axios.put("http://localhost:4000/api/task/" + _id , Task)
            .then(res => dispatch({type:"EDIT", payload: res.data}))
        }
        
    }

    render() {
        const {task , _id} = this.props.task
        return (
            <Consumer>
                {value => {
                    const {dispatch} = value
                    return <div><h5 className='text-dark p-1 bg-light rounded-pill txt_alignRight border-bottom'>
                    &nbsp;&nbsp;<button className='fa fa-trash float-left m-2' onClick={this.remove.bind(this,_id,dispatch)}></button>
                    <button className='fa fa-edit float-left m-2' onClick={this.alertBas.bind(this,_id,dispatch)}></button>
                    &nbsp;&nbsp;&nbsp;{task}
                    </h5></div> 
                }}
            </Consumer>
        ) 
    }
}