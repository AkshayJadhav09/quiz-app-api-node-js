"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quizService = void 0;
const uuid_1 = require("uuid");
class QuizService {
    constructor() {
        this.quizzes = [];
        this.results = [];
    }
    createQuiz(title, questions) {
        const newQuiz = {
            id: (0, uuid_1.v4)(),
            title,
            questions,
        };
        this.quizzes.push(newQuiz);
        return newQuiz;
    }
    getQuiz(quizId) {
        var _a;
        console.log('quizId :', quizId);
        console.log('quizzes :', (_a = this.quizzes) === null || _a === void 0 ? void 0 : _a.find(q => q.id === quizId));
        const quiz = this.quizzes.find(q => q.id === quizId);
        // if (!Object.keys(quiz)?.length) throw new Error('Quiz not found');
        return Object.assign(Object.assign({}, quiz), { questions: quiz.questions.map(q => (Object.assign(Object.assign({}, q), { correctOption: undefined }))) });
    }
    submitAnswer(quizId, questionId, selectedOption) {
        const quiz = this.quizzes.find(q => q.id === quizId);
        if (!quiz)
            throw new Error('Quiz not found');
        const question = quiz.questions.find(q => q.id === questionId);
        if (!question)
            throw new Error('Question not found');
        const isCorrect = selectedOption === question.correctOption;
        return { isCorrect, correctOption: question.correctOption };
    }
    getResults(quizId) {
        const result = this.results.find(r => r.quizId === quizId);
        if (!result)
            throw new Error('Results not found');
        return result;
    }
    getAllQuizzes() {
        console.log('this.quizzes :', this.quizzes);
        return this.quizzes.map(quiz => (Object.assign(Object.assign({}, quiz), { questions: quiz.questions.map(q => (Object.assign(Object.assign({}, q), { correctOption: undefined }))) })));
    }
}
exports.quizService = new QuizService();
