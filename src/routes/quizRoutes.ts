import express from 'express';
import { createQuiz, getAllQuizzes, getQuiz, submitAnswer, getResults } from '../controllers/quizController';

const router = express.Router();

router.post('/quizzes', createQuiz);
router.get('/quizzes', getAllQuizzes);
router.get('/quizzes/:id', getQuiz);
router.post('/quizzes/:id/questions/:questionId/answer', submitAnswer);
router.get('/quizzes/:id/results', getResults);

export default router;
