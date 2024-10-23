import { Request, Response } from 'express';
import { quizService } from '../services/quizService';

export const createQuiz = (req: Request, res: Response) => {
  const { title, questions } = req.body;
  try {
    const quiz = quizService.createQuiz(title, questions);
    res.status(201).json(quiz);
  } catch (error) {
    res.status(500).json({ error: 'Error creating quiz' });
  }
};

export const getAllQuizzes = (req: Request, res: Response) => {
    try {
      const quizzes = quizService.getAllQuizzes();
      res.status(200).json(quizzes);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching quizzes' });
    }
  };

export const getQuiz = (req: Request, res: Response) => {
  const quizId = req.params.id;
  try {
    const quiz = quizService.getQuiz(quizId);
    res.status(200).json(quiz);
  } catch (error) {
    res.status(404).json({ error: 'Quiz not found' });
  }
};

export const submitAnswer = (req: Request, res: Response) => {
  const { id, questionId } = req.params;
  const { selectedOption } = req.body;

  try {
    const feedback = quizService.submitAnswer(id, questionId, selectedOption);
    res.status(200).json(feedback);
  } catch (error) {
    res.status(404).json({ error: 'Quiz or Question not found' });
  }
};

export const getResults = (req: Request, res: Response) => {
  const quizId = req.params.id;
  try {
    const results = quizService.getResults(quizId);
    res.status(200).json(results);
  } catch (error) {
    res.status(404).json({ error: 'Results not found' });
  }
};
