// repositories/todoTaskRepository.js

import ToDoTask from '../schemas/ToDoTask.js';

async function createToDoTask(data) {
  return ToDoTask.create(data);
}

async function findAllToDoTasksByUser(userId) {
  return ToDoTask.find({ userId });
}

async function findAllToDoTasks() {
  return ToDoTask.find();
}

async function findByIdAndDelete(taskId) {
  return ToDoTask.findByIdAndDelete(taskId);
}

// Nova função para atualizar uma tarefa
async function findByIdAndUpdate(taskId, data) {
  return await ToDoTask.findByIdAndUpdate(taskId, data, { new: true });
}

export default { createToDoTask, findAllToDoTasksByUser, findAllToDoTasks, findByIdAndDelete, findByIdAndUpdate };
