import React from 'react';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import '../style_pages/task.css';

function Task ({ id, text, complete, completeTask, deleteTask }){
  return (
    <div className={complete ? "task__container complete" : "task__container"}>
      <div className="task__text" onClick={() => completeTask(id)}>
        {text}
      </div>
        <div className="task__container-icon" onClick={() => deleteTask(id)}>
        <AiOutlineCloseCircle className='task__icon'/>
      </div>
    </div>
  );
}

export default Task;
