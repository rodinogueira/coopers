import todoTaskRepository from '../repositories/todoTaskRepository.js';

async function createToDoTask(data) {
  return todoTaskRepository.createToDoTask(data);
}

async function findAllToDoTasksByUser(userId) {
  return todoTaskRepository.findAllToDoTasksByUser(userId);
}

async function getAllToDoTasks() {
  return todoTaskRepository.findAllToDoTasks();
}

async function deleteToDoTask(taskId) {
  try {
    const task = await todoTaskRepository.findByIdAndDelete(taskId);
    if (!task) {
      throw new Error('Tarefa não encontrada');
    }
    return task;
  } catch (err) {
    throw new Error(`Erro ao deletar tarefa: ${err.message}`);
  }
}

async function updateToDoTask(taskId, data) {
  try {
    const task = await todoTaskRepository.findByIdAndUpdate(taskId, data);
    if (!task) {
      throw new Error('Tarefa não encontrada');
    }
    return task;
  } catch (err) {
    throw new Error(`Erro ao atualizar tarefa: ${err.message}`);
  }
}

async function postToDoTask(data) {
  try {
    const newTask = await todoTaskRepository.createToDoTask(data);
    return newTask;
  } catch (err) {
    throw new Error(`Erro ao criar nova tarefa: ${err.message}`);
  }
}

export default { 
  createToDoTask,
  findAllToDoTasksByUser,
  getAllToDoTasks,
  deleteToDoTask,
  updateToDoTask,
  postToDoTask,
};
