"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const quizController_1 = require("../controllers/quizController");
const router = express_1.default.Router();
router.post('/quizzes', quizController_1.createQuiz);
router.get('/quizzes', quizController_1.getAllQuizzes);
router.get('/quizzes/:id', quizController_1.getQuiz);
router.post('/quizzes/:id/questions/:questionId/answer', quizController_1.submitAnswer);
router.get('/quizzes/:id/results', quizController_1.getResults);
exports.default = router;
