import React from 'react'
import {FaTimes} from 'react-icons/fa'

export default function SingularTask({task,onDelete,onToggle}) {
    return (
        <div className = {`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>
                {task.objective}{' '} 
                <FaTimes style = {{color:'red', cursor:'pointer'}}
                onClick={() => onDelete(task.id)}/>
            </h3>
            <p>Lasthit target {task.lasthit}</p>
            <p>Before {task.minute} minutes</p>
        </div> 
    )
}
