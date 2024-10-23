import { Quiz, Answer, Result } from '../models/quiz';
import { v4 as uuidv4 } from 'uuid';

class QuizService {
  private quizzes: Quiz[] = [];
  private results: Result[] = [];

  createQuiz(title: string, questions: any[]): Quiz {
    const newQuiz: Quiz = {
      id: uuidv4(),
      title,
      questions,
    };
    this.quizzes.push(newQuiz);
    return newQuiz;
  }

  getQuiz(quizId: string): Quiz | undefined {
  console.log('quizId :', quizId);
    console.log('quizzes :', this.quizzes?.find(q => q.id === quizId));
    const quiz = this.quizzes.find(q => q.id === quizId);
    if (!quiz) throw new Error('Quiz not found');
    return { ...quiz, questions: quiz.questions.map(q => ({ ...q, correctOption: undefined })) };
  }

  submitAnswer(quizId: string, questionId: string, selectedOption: number): any {
    const quiz = this.quizzes.find(q => q.id === quizId);
    if (!quiz) throw new Error('Quiz not found');
    const question = quiz.questions.find(q => q.id === questionId);
    if (!question) throw new Error('Question not found');

    const isCorrect = selectedOption === question.correctOption;
    return { isCorrect, correctOption: question.correctOption };
  }

  getResults(quizId: string): Result | undefined {
    const result = this.results.find(r => r.quizId === quizId);
    if (!result) throw new Error('Results not found');
    return result;
  }

  getAllQuizzes(): Quiz[] {
    return this.quizzes.map(quiz => ({
      ...quiz,
      questions: quiz.questions.map(q => ({ ...q, correctOption: undefined })),
    }));
  }
}

export const quizService = new QuizService();
