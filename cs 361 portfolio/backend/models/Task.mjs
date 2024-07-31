
// backend/models/Task.mjs
import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  status: { type: String, default: 'pending' },
  dueDate: { type: Date, default: Date.now },
}, { timestamps: true });

const Task = mongoose.model('Task', TaskSchema);
export default Task;


