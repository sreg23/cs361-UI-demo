// src/pages/CompletedTasksPage.js

import React from 'react';
import TaskItem from '../components/TaskItem';

const CompletedTasksPage = ({ tasks, onEdit, onDelete }) => {
  const completedTasks = tasks.filter(task => task.status === 'completed');

  return (
    <div className="completed-tasks-page">
      <h2>Completed Tasks</h2>
      <ul>
        {completedTasks.map(task => (
          <TaskItem key={task._id} task={task} onEdit={onEdit} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
};

export default CompletedTasksPage;


