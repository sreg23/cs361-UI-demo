
// src/components/TaskForm.js
import React, { useState, useEffect } from 'react';

const TaskForm = ({ task = {}, onSave, onCancel }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('pending');
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    setTitle(task.title || '');
    setDescription(task.description || '');
    setStatus(task.status || 'pending');
    setDueDate(task.dueDate ? task.dueDate.slice(0, 10) : '');
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...task, title, description, status, dueDate });
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <label htmlFor="taskTitle">Title:</label>
      <input
        id="taskTitle"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <label htmlFor="taskDescription">Description:</label>
      <input
        id="taskDescription"
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <label htmlFor="taskDueDate">Due Date:</label>
      <input
        id="taskDueDate"
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <label htmlFor="taskStatus">Status:</label>
      <select id="taskStatus" value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
      <button type="submit">Save Task</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default TaskForm;



