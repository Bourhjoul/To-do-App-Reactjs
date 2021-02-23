import React from 'react';
import { useState } from "react";

const Addtask = ({onAdd}) => {
    const [text,setText] = useState('');
    const [day,setday] = useState('');
    const [reminder,setreminder] = useState(false);

    const onSubmit= (e) =>{
        e.preventDefault()
        if(!text){
            alert("Please enter The Task.");
            return
        }
        onAdd({text,day,reminder});
        setText('');
        setday('');
        setreminder(false);
    }
    return (
        <form className = 'add-form' onSubmit = {onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add Task' value = {text} onChange = {(e) => setText(e.target.value)} />

            </div>
            <div className='form-control'>
                <label>Day/Time</label>
                <input type='text' placeholder='Add Time' value = {day} onChange = {(e) => setday(e.target.value)}/>

            </div>
            <div className='form-control form-control-check'>
                <label>Reminder</label>
                <input type='checkbox' checked = {reminder} value = {reminder} onChange = {(e) => setreminder(e.currentTarget.checked)}/>
            </div>
            <input type='submit' value='Save Task' className= 'btn btn-block'/>
            
        </form>
    )
}

export default Addtask
