import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Task from './Task'

function App() {
  const [todos, setTodos] = useState([
    {id: 1, name : 'Bootcamp HW', priority:'High', dueDate:'Mar 2', status:'In Progress'},
    {id: 2, name: 'Post-Retreat Laundry', priority:'Medium', dueDate:'Mar 1', status:'Completed'}

  ]);

  return (
    <div>
      <h1>To-Do List</h1>

      {todos.map((todo) => ( 
        <Task
          key={todo.id}
          {...todo}
          // name={todo.name}
          // priority={todo.priority}
          // dueDate={todo.dueDate}
        />
      ))}
    </div>
  );
}

export default App
