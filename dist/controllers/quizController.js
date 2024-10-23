"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResults = exports.submitAnswer = exports.getQuiz = exports.getAllQuizzes = exports.createQuiz = void 0;
const quizService_1 = require("../services/quizService");
const createQuiz = (req, res) => {
    const { title, questions } = req.body;
    try {
        const quiz = quizService_1.quizService.createQuiz(title, questions);
        res.status(201).json(quiz);
    }
    catch (error) {
        res.status(500).json({ error: 'Error creating quiz' });
    }
};
exports.createQuiz = createQuiz;
const getAllQuizzes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //     console.log(' quizService:', quizService);
        //   const quizzes = await quizService.getAllQuizzes();
        //   console.log('quizzes :', quizzes);
        res.status(200).json(quizService_1.quizService);
    }
    catch (error) {
        res.status(500).json({ error: 'Error fetching quizzes' });
    }
});
exports.getAllQuizzes = getAllQuizzes;
const getQuiz = (req, res) => {
    const quizId = req.params.id;
    try {
        const quiz = quizService_1.quizService.getQuiz(quizId);
        res.status(200).json(quiz);
    }
    catch (error) {
        res.status(404).json({ error: 'Quiz not found' });
    }
};
exports.getQuiz = getQuiz;
const submitAnswer = (req, res) => {
    const { id, questionId } = req.params;
    const { selectedOption } = req.body;
    try {
        const feedback = quizService_1.quizService.submitAnswer(id, questionId, selectedOption);
        res.status(200).json(feedback);
    }
    catch (error) {
        res.status(404).json({ error: 'Quiz or Question not found' });
    }
};
exports.submitAnswer = submitAnswer;
const getResults = (req, res) => {
    const quizId = req.params.id;
    try {
        const results = quizService_1.quizService.getResults(quizId);
        res.status(200).json(results);
    }
    catch (error) {
        res.status(404).json({ error: 'Results not found' });
    }
};
exports.getResults = getResults;
