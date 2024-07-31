

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskListPage from './pages/TaskListPage';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import './App.css'; // Import your main CSS file

function App() {
  return (
    <Router>
      <Navbar />
      <main className="container">
        <section>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<TaskListPage />} />
            <Route path="/add-task" element={<TaskListPage />} />
          </Routes>
        </section>
      </main>
    </Router>
  );
}

export default App;


