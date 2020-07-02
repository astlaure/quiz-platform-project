import React, { useEffect, useState } from 'react';
import useHttpClient from '../hooks/useHttpClient';
import QuizGridItem from '../components/QuizGridItem';

const QuizGrid = () => {
    const httpClient = useHttpClient();
    const [state, setState] = useState([]);

    useEffect(() => {
        httpClient.get('/api/quiz')
            .then((response) => setState(response))
            .catch(() => {});
    }, [])

    return (
        <div className="quiz-grid-component">
            <div className="container">
                <h1 className="text-center">Quiz</h1>
                <div className="row">
                    {
                        state.map((quiz, index) => {
                            return <QuizGridItem key={index} quiz={quiz} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default QuizGrid;