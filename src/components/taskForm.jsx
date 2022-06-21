import React, { useState }  from 'react';
import '../style_pages/taskForm.css';
import {v4 as uuidv4} from 'uuid';

function TaskForm (props){
  //state of task list
  
  const [input, setInput] = useState('');
  
  const changeHandler = e => {
    setInput(e.target.value);
  }
  
  const sendHandler = e => {
    e.preventDefault();

    const newTask = {
      id: uuidv4(),
      text: input,
      complete: false
    }

    props.onSubmit(newTask);
  } 
  
  return (
    <form className="task__form" onSubmit={sendHandler}>
      <input 
        className='input__text' 
        type="text" 
        placeholder='Enter your task here' 
        onChange={changeHandler} />
      <button className='task__button'>Add Task</button>
    </form>
  );
}

export default TaskForm;
