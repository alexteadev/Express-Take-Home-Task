import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.get('/', async (req, res) => {
  // Create a new task in the database
  const newTask = await prisma.task.create({
    data: {
      title: 'Example Task',
      color: 'green',
      completed: false,
    },
  });

  // Fetch all tasks from the database
  const tasks = await prisma.task.findMany();

  console.log('New Task:', newTask);
  console.log('All Tasks:', tasks);

  res.send('Task created and logged in the console');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
