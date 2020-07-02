export interface User {
    username: string;
    role: 'USER' | 'ADMIN' | 'ANONYMOUS';
}

export interface Choice {
    id: number;
    value: string;
    points: number;
    answer: boolean;
    response: string;
}

export interface Question {
    id: number;
    value: string;
    type: 'SINGLE' | 'MULTI' | 'LONG';
    choices: Choice[];
}

export interface Quiz {
    name: string;
    date: Date;
    questions: Question[];
}

export interface QuizSummary {
    id: number;
    name: string;
    creationDate: Date;
    length: number;
}

export const initialQuiz: Quiz = {
    name: '',
    date: new Date(),
    questions: []
}
