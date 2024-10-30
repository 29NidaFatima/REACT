import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export default function TodoList() {
    let [Todos, setTodos] = useState([{ task: "First Day", id: uuidv4(),isDone:false}])
    let [newTodo, setnewTodo] = useState("");
    let addNewTask = () => {
        setTodos((preTodos) => {
            return [...preTodos, { task: newTodo, id: uuidv4(),isDone:false }]
        });
        setnewTodo("");
    }

    let updateTododValue = ((event) => {
        setnewTodo(event.target.value);
    });

    let deleteTodo = (id) => {
        setTodos((prevTodes) => 
            prevTodes.filter((prevTodo) => prevTodo.id !== id)
        );
    };
    
  
    let markAllDone= () => {
        setTodos((preTodos) => 
            preTodos.map((todo) => ({
                ...todo,
               isDone:true,
            }))
        );
    };
    
    let markAsDone = (id) => {
        setTodos((prevTodes) => 
            prevTodes.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                       isDone:true,
                    };
                } else {
                    return todo;
                }
            })
        );
    };
    

    return (
        <div>

            <input placeholder="Add a task"
                value={newTodo}
                onChange={updateTododValue} />
            <br></br>
            <button onClick={addNewTask}>Add Task</button>
            <br></br>
            <br></br>
            <br></br>
            <hr></hr>
            <h4>Tasks Todo</h4>
            <ul>
                {Todos.map((todo) => (
                    <li key={todo.id}>
                        <span style={todo.isDone?{textDecoration:"Line-through"}:{}}>{todo.task}</span>
                        &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;
                        <button onClick={() => deleteTodo(todo.id)}>delete</button>
                        <button onClick={()=>markAsDone(todo.id)}>Mark As Done</button>
                        </li>
                        
                ))
                }
            </ul>
            <br></br>
            <button onClick={markAllDone}>mark All As Done</button>

        </div>
    );
}