import React from "react"
import TodoItem  from "./TodoItem.js"
import "./index.css"

export default class App extends React.Component{
    constructor(){
        super()
        this.state={
            character:[],
            isLoading:false

        }
        this.handleChange = this.handleChange.bind(this)
    }

    //fetching data from API with CDM
    componentDidMount(){
        this.setState({isLoading:true})
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => {
            this.setState({
                character :data,
                isLoading:false
            })
    })
    }

    //handleChange Method
    handleChange(id){
        this.setState(prevState => {
            //map Method
            const updatedTodos = prevState.character.map(item => {
                //if/else
                if(item.id === id){
                    return{
                        ...item,
                        completed :!item.completed
                    }
                }
                return item
            })
            return{
                character:updatedTodos
            }
        })
    }

   render(){
       if(this.state.isLoading){
           return(
               <div className="loading">
                   <p>WELCOME</p>
                   <div className="loader"></div>
               </div>
           )
       }
       else{
           return(
               <div className="todo-lists">
                   <h1>TodoApp-React.js</h1>
                   {this.state.character.map(item => <TodoItem key={item.id} todo={item} handleChange={this.handleChange}/>)}
               </div>
           )
       }
   }
}