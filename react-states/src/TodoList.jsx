import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export default function TodoList(){
    let [Todos,setTodos]=useState([{task:"sample task",id:uuidv4() }])
    let[newTodo,setnewTodo]=useState("");
   let addNewTask =()=>{
        setTodos((preTodos)=>{
           return [...preTodos,{task:newTodo,id:uuidv4() }]
        });
        setnewTodo("");
    }
    let updateTododValue=((event)=>{
        setnewTodo(event.target.value);
    })
    let deleteTodo = (id) => {
        setTodos(Todos.filter((todo) => {
            return todo.id !== id;
        }));
    }
    
    
    return(
<div>
   
    <input placeholder="Add a task" 
    value={newTodo}
     onChange={updateTododValue}/>
    <br></br>
    <button onClick={addNewTask}>Add Task</button>
    <br></br>
    <br></br>
    <br></br>
   <hr></hr>
    <h4>Tasks Todo</h4>
    <ul>
       { Todos.map((todo) =>(
<li key={todo.id}>
    <span>{todo.task}</span>
    &nbsp;  &nbsp;  &nbsp;  &nbsp;
    <button onClick={()=>deleteTodo(todo.id)}>delete</button></li>
       ))
        }
    </ul>
</div>
    );
}