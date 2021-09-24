import React from "react"

function TodoItem(props){
    return(
        <div>
            <p>{props.todo.title}</p>
            <input type="checkbox" checked={props.todo.completed}/>
        </div>
    )
}

export default TodoItem