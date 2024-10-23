import express from 'express';
import quizRoutes from './routes/quizRoutes';

const app = express();
app.use(express.json());

app.use('/', quizRoutes);

app.listen(3000, () => {
  console.log('Quiz App API running on http://localhost:3000');
});
