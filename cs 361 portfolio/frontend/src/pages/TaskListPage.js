
// src/pages/TaskListPage.js
import React, { useState, useEffect } from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

const TaskListPage = () => {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    axios.get('/api/tasks')
      .then(response => setTasks(response.data))
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    if (location.pathname === '/add-task') {
      setShowForm(true);
      setCurrentTask({});
    }
  }, [location]);

  const saveTask = (task) => {
    if (task._id) {
      axios.put(`/api/tasks/${task._id}`, task)
        .then(response => {
          setTasks(tasks.map(t => t._id === task._id ? response.data : t));
          setShowForm(false);
          alert('Task updated successfully!');
        })
        .catch(error => console.error(error));
    } else {
      axios.post('/api/tasks', task)
        .then(response => {
          setTasks([...tasks, response.data]);
          setShowForm(false);
          if (location.state?.fromHome) {
            navigate('/');
          } else {
            navigate('/tasks');
          }
          alert('Task added successfully!');
        })
        .catch(error => console.error(error));
    }
  };

  const editTask = (task) => {
    setCurrentTask(task);
    setShowForm(true);
  };

  const deleteTask = (id) => {
    if (window.confirm("Deleting a task is permanent. Are you sure you want to proceed?")) {
      axios.delete(`/api/tasks/${id}`)
        .then(() => setTasks(tasks.filter(task => task._id !== id)))
        .catch(error => console.error(error));
    }
  };

  const cancelEdit = () => {
    setShowForm(false);
    setCurrentTask(null);
    if (location.state?.fromHome) {
      navigate('/');
    } else {
      navigate('/tasks');
    }
  };

  return (
    <div>
      <h1 className="tasks-heading">Task Manager</h1>
      {!showForm && <button onClick={() => navigate('/add-task')}>Add Task</button>}
      {showForm && <TaskForm task={currentTask} onSave={saveTask} onCancel={cancelEdit} />}
      <TaskList tasks={tasks} onDelete={deleteTask} onEdit={editTask} />
    </div>
  );
};

export default TaskListPage;



