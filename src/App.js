import React from "react"
import Photos  from "./TodoItem"

export default class App extends React.Component{
    constructor(){
        super()
        this.state={
            character:[]

        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(data => {
            this.setState({
                character :data
            })
    })
    }
   render(){
       return(
           <div>
               {this.state.character.map(item => <TodoItem key={item.id} todo={item}/>)}
           </div>
       )
   }
}