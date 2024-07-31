// src/pages/Home.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleAddTask = () => {
    navigate('/add-task', { state: { fromHome: true } });
  };

  return (
    <div className="home">
      <h1>Welcome to the Task Manager App</h1>
      <p>This task manager will allow you to quickly create, edit, update, and delete tasks as well as track their completion. Adding a task takes about 1 minute! Click on the Tasks link above to get started.</p>
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default Home;



