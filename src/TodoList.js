import React from "react";
const TodoList = (props) => {
   
    return (
        <>
        <div className="todo-style">
       
    <li> {props.text} 
    <button onClick={()=>{
        props.onselect(props.id)}}>Delete</button></li>
        </div>
    </>
    );
}
export default TodoList;