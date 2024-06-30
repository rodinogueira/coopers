import todoTaskService from '../services/todoTaskService.js';

async function createToDoTask(req, res) {
  const body = req.body;
  const { _id: userId } = res.locals.user;

  try {
    const task = await todoTaskService.createToDoTask({ ...body, userId });
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function findAllToDoTasksByUser(req, res) {
  const { _id: userId } = res.locals.user;

  try {
    const tasks = await todoTaskService.findAllToDoTasksByUser(userId);
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function getAllToDoTasks(req, res) {
  try {
    const tasks = await todoTaskService.getAllToDoTasks();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function deleteToDoTask(req, res) {
  const { taskId } = req.params;

  try {
    const deletedTask = await todoTaskService.deleteToDoTask(taskId);
    return res.send(deletedTask);
  } catch (err) {
    return res.status(500).send(err.message);
  }
}

async function updateToDoTask(req, res) {
  try {
    const updatedTask = await todoTaskService.updateToDoTask(req.params.taskId, req.body);
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export default { 
  createToDoTask,
  findAllToDoTasksByUser,
  getAllToDoTasks,
  deleteToDoTask,
  updateToDoTask
};
