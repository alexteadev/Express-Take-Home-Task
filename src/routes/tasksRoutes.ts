import express from 'express';
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from '../controllers/tasksController';
import { validateDto } from '../middleware/validationMiddleware';
import { CreateTaskDto, UpdateTaskDto } from '../dto/task.dto';

const router = express.Router();

router.get('/tasks', getTasks);
router.post('/tasks', validateDto(CreateTaskDto), createTask);
router.put('/tasks/:id', validateDto(UpdateTaskDto), updateTask);
router.delete('/tasks/:id', deleteTask);

export default router;
