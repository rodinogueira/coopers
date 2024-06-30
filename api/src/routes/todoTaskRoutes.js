import { Router } from 'express';
import todoTaskController from '../controllers/todoTaskController.js';
import { validationSchemaMiddleware } from '../middlewares/validationSchemaMiddleware.js';
import { toDoTaskValidation } from '../schemas/validation/toDoTaskValidation.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = Router();

router.use(authMiddleware);

router.get('/tasks/user', todoTaskController.findAllToDoTasksByUser);
router.get('/tasks', todoTaskController.getAllToDoTasks);
router.post('/tasks', validationSchemaMiddleware(toDoTaskValidation), todoTaskController.createToDoTask);
router.put('/tasks/:taskId', todoTaskController.updateToDoTask);
router.delete("/tasks/:taskId", todoTaskController.deleteToDoTask);

export default router;
