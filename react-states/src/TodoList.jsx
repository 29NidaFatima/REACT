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
            return todo.id != id;
        }));
    }
    let upperCaseAll = () => {
        setTodos(Todos.map((todo) => {
          return {
            ...todo,
task:todo.task.toUpperCase(),
          };
        }));
      }
      
    let upperCaseOne=()=>{
        setTodos(Todos.map((todo) => {
            if (todo.id==id) {
                return {
                    ...todo,
        task:todo.task.toUpperCase(),
                  };
            }
            else{
                return todo;
            }
           
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
    <br></br>
    <button onClick={upperCaseAll}>UpperCaseAll</button>
    <button onClick={upperCaseOne}>UpperCaseOne</button>
</div>
    );
}