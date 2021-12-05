import React from 'react'
import {useState,useEffect} from 'react'

function AddTask({onAdd}) {
    const[objective,setObjective] = useState('')
    const[lasthit,setLasthit] = useState('')
    const[reminder,setReminder] = useState(false)

    function onSubmit(e) {
        e.preventDefault()
        if (!objective) {
            alert('please add a task')
            return
        }

        onAdd({objective,lasthit,reminder})
        
        setObjective('')
        setLasthit('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Objective</label>
                <input type='text' placeholder='Add task' value={objective} onChange={(e) => setObjective(e.target.value)}/>
            </div>
 
            <div className='form-control'>
                <label>Lasthit target</label>
                <input type='number' placeholder='Add last hit count' value={lasthit} onChange={(e) => setLasthit(e.target.value)}/>
            </div>

            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>

            <input type='submit' value='Save Task' className='btn btn-block'/>
        </form>
    )
}

export default AddTask
