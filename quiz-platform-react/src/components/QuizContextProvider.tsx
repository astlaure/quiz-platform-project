import React, { useState } from 'react';
import QuizContext from '../core/QuizContext';

const QuizContextProvider: React.FC = (props) => {
    const [state, setState] = useState({
        result: -1,
        setResult(result: number) {
            setState({ ...state, result });
        }
    });

    return (
        <QuizContext.Provider value={state}>
            { props.children }
        </QuizContext.Provider>
    )
}

export default QuizContextProvider;