import React from "react"

function TodoItem(props){
    const styles = {
        textDecoration:"line-through",
        color:"#aaa",
        fontStyle:"italic"
    }
    return(
        <div className="todo-list">
            <input type="checkbox" checked={props.todo.completed}
            onChange={() => props.handleChange(props.todo.id)
            }
            />
            <p style={props.todo.completed ? styles : null}>{props.todo.title}</p>
        </div>
    )
}

export default TodoItem