// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

export default function Task(props) {
    // const [showDetails, setShowDetails] = useState

    return (
        // <div onClick={() => props.onSelect(props.task)}>
        <div>
            <h2>{props.name}</h2>
            <p>Priority: {props.priority}</p>
            <p>Due: {props.dueDate}</p>
            <p>Status: {props.status}</p>
        </div>
    )
}