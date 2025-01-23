import express from 'express';
import tasksRoutes from './routes/tasksRoutes';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(express.json());
app.use('/api', tasksRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
