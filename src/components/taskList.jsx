import React, { useState } from "react";
import TaskForm from './taskForm.jsx';
import Task from './task.jsx';
import '../style_pages/taskList.css';

function TaskList () {

  const [tasks, setTasks] = useState([]);

  const addTask = task => {
    console.log(task);
    if(task.text.trim()){
      task.text = task.text.trim();

      const taskUpdate = [task, ...tasks];
      setTasks(taskUpdate)
    }
  }

  const deleteTask = id => {
    //const taskUpdate = tasks.filter(task => task.id !== id);
    //setTasks(taskUpdate);
    setTasks(tasks.filter(task => task.id !== id));
  }

  const completeTask = id => {
    const taskUpdate = tasks.map(task => {
      if(task.id === id){
        task.complete = !task.complete;
      }
      return task;
    })
    setTasks(taskUpdate);
  }

  return (
    <>
      <TaskForm onSubmit={addTask}/>
      <div className='task-list-container'>
        {
        tasks.map((task) => 
            <Task 
              key={task.id}
              id={task.id}
              text={task.text}
              complete={task.complete}
              completeTask={completeTask}
              deleteTask={deleteTask}
            />
          )
        }
      </div>
    </>
  );
}

export default TaskList;
