import React, { Component } from 'react'
import Task from './Task'
import { Consumer } from '../context'
import "../Css/Tasks.css"

export default class Tasks extends Component {
    render() {
        return (
            <Consumer>{value => {
                var {tasks} = value
                return <div className='scroll'>
                    {tasks.map(
                    t=> <Task task={t} key={t._id}></Task>)}
                </div> 
            }}
            </Consumer>
        )
    }
}
