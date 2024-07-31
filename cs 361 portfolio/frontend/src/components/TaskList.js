// src/components/TaskList.js
import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onDelete, onEdit, onDetails }) => {
  return (
    <div className="task-list">
      <h2>Task List</h2>
      <ul>
        {tasks.map(task => (
          <TaskItem key={task._id} task={task} onDelete={onDelete} onEdit={onEdit} onDetails={onDetails} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;


