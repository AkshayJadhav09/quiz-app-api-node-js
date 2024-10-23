"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const quizRoutes_1 = __importDefault(require("./routes/quizRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/', quizRoutes_1.default);
app.listen(3000, () => {
    console.log('Quiz App API running on http://localhost:3000');
});
