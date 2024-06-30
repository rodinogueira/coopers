import mongoose from 'mongoose';

const ToDoTaskSchema = new mongoose.Schema({
  text: { type: String, required: true },
  checked: { type: Boolean, default: false },
  done: { type: Boolean, default: false },
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'users' },
  created_at: { type: Date, default: Date.now() },
  updated_at: { type: Date, default: Date.now() }
});

export default mongoose.model('tasks', ToDoTaskSchema);
