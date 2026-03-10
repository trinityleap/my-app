import { useState } from "react";
import Task from "./Task";

function Todos(){
    const [todos, setTodos] = useState([
    {id: 1, name : 'Bootcamp HW', priority:'High', dueDate:'Mar 2', status:'In Progress'},
    {id: 2, name: 'Post-Retreat Laundry', priority:'Medium', dueDate:'Mar 1', status:'Completed'}

  ]);

  const [newTaskName, setNewTaskName] = useState("");
  const [newPriority, setNewPriority] = useState("Low");
  const [newDueDate, setNewDueDate] = useState("");
  const [newStatus, setNewStatus] = useState("Unstarted")

  function updateStatus(id, newStatus) {
    setTodos(
      todos.map((todo) => 
        todo.id === id ? {...todo, status:newStatus} : todo
      )
    );
  }

  function addTask() {
    /* trim function removes whitespace from start and end of string*/
    if (newTaskName.trim() === "" || newDueDate.trim() === "") {
      return;
    }

    const newTask = {
      id: Date.now(),
      name: newTaskName,
      priority: newPriority,
      dueDate: newDueDate,
      status: newStatus
    };

    setTodos([...todos, newTask]);
    setNewTaskName("");
    setNewPriority("Low");
    setNewDueDate("");
    setNewStatus("Unstarted");
  }

    return (
        <div>
        <h1>To-Do List</h1>

        <h2>Add Task</h2>
        <input
            type="text"
            placeholder="Task name"
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
        />

        <button onClick={addTask}>Add Task</button>

        <hr />

        {todos.map((todo) => ( 
            <Task
            key={todo.id}
            {...todo}
            onStatusChange={updateStatus}
            // name={todo.name}
            // priority={todo.priority}
            // dueDate={todo.dueDate}
            />
        ))}
        </div>
    );
}

export default Todos