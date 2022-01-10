import React, { Component } from 'react'
import axios from 'axios'

const Context = React.createContext()


// State ve action’ı parametre alan ve yeni state’i dönen fonksiyon..
const reducer = (prevState,action) =>{
    switch(action.type){
        case "ADD":
            return {tasks : [...prevState.tasks , action.payload]}
        case "REMOVE":
            return {tasks: prevState.tasks.filter(task => task._id !== action.payload)}
        case "EDIT":
            var tasks = prevState.tasks.filter(task => task._id !== action.payload._id)
            tasks = [...tasks, action.payload]
            return {tasks}
        case "TASKS":
            return {tasks:action.payload}
    }
}

export class Provider extends Component {
    state={
        tasks:[],
        creatorId:"",
        dispatch:(action)=>this.setState(prevState => reducer(prevState,action))
    }

    componentDidMount(){   // renderdan hemen sonra çağırılır
    
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    } 
}

export const Consumer = Context.Consumer;
