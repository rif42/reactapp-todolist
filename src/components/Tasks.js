import React from 'react'
import SingularTask from './SingularTask'

export default function Tasks({tasklist,onDelete,onToggle}) {
    return (
        <>
            {tasklist.map((task) => (
                <SingularTask key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>  
            ))}
        </>
    )
}
