import React, { useContext } from 'react';
import { Redirect, Link } from 'react-router-dom';
import QuizContext from '../core/QuizContext';

const Result = () => {
    const quizContext = useContext(QuizContext);

    if (quizContext.result === -1) {
        return <Redirect to="/" />;
    }

    return (
        <div className="result-component">
            <div className="container">
                <h1 className="text-center">Result</h1>
                <div className="row justify-content-center">
                    <div className="col-md-8 mb-5">
                        <div className="card">
                            <div className="card-body">
                                <p className="score-text">Your score is: {quizContext.result} %</p>
                                <Link to="/" className="btn btn-primary btn-lg w-50 mt-4" onClick={() => quizContext.setResult(-1)}>Play again</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Result;