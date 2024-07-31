


// src/components/TaskItem.js
import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';


const TaskItem = ({ task, onDelete, onEdit }) => {
  return (
    <li className="task-item">
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      <p>Due Date: {task.dueDate ? task.dueDate.slice(0, 10) : 'No due date set'}</p>
      
      <button onClick={() => onEdit(task)}><FaEdit /> Edit</button>
      <button onClick={() => onDelete(task._id)}><FaTrash /> Delete</button>
     
      
      
      
    </li>
  );
};

export default TaskItem;


