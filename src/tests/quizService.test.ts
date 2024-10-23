import { quizService } from '../services/quizService';

describe('Quiz Service', () => {
  it('should create a new quiz', () => {
    const quiz = quizService.createQuiz('Sample Quiz', []);
    expect(quiz.title).toBe('Sample Quiz');
  });

  it('should fetch a quiz', () => {
    const quiz = quizService.createQuiz('Sample Quiz', []);
    const fetchedQuiz = quizService.getQuiz(quiz.id);
    expect(fetchedQuiz.title).toBe('Sample Quiz');
  });

  it('should submit an answer and return feedback', () => {
    const quiz = quizService.createQuiz('Sample Quiz', [
      { id: 'q1', text: 'Question 1', options: ['A', 'B', 'C', 'D'], correctOption: 1 }
    ]);
    const feedback = quizService.submitAnswer(quiz.id, 'q1', 1);
    expect(feedback.isCorrect).toBe(true);
  });
});
