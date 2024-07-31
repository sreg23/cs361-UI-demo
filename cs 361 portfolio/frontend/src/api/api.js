// src/api/api.js
import axios from 'axios';

const API_BASE_URL = '/api';

export const fetchTasks = () => axios.get(`${API_BASE_URL}/tasks`);
export const addTask = (task) => axios.post(`${API_BASE_URL}/tasks`, task);
export const updateTask = (id, task) => axios.put(`${API_BASE_URL}/tasks/${id}`, task);
export const deleteTask = (id) => axios.delete(`${API_BASE_URL}/tasks/${id}`);
