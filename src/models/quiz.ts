export interface Question {
    id: string;
    text: string;
    options: string[];
    correctOption: number;
  }
  
  export interface Answer {
    questionId: string;
    selectedOption: number;
    isCorrect: boolean;
  }
  
  export interface Quiz {
    id: string;
    title: string;
    questions: Question[];
  }
  
  export interface Result {
    quizId: string;
    userId: string;
    score: number;
    answers: Answer[];
  }
  