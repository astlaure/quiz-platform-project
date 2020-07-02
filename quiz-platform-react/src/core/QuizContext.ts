import React from 'react';

const initialContext = {
    result: -1,
    setResult(result: number) {}
};

const QuizContext = React.createContext(initialContext);

export default QuizContext;