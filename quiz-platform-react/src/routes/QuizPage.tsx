import React, { useContext, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import useHttpClient from '../hooks/useHttpClient';
import { initialQuiz, Quiz } from '../models/app.models';
import SingleQuestion from '../components/SingleQuestion';
import QuizContext from '../core/QuizContext';

const QuizPage = () => {
    const params = useParams<{ id: string }>();
    const history = useHistory();
    const httpClient = useHttpClient();
    const [state, setState] = useState({
        quiz: initialQuiz,
        answers: {} as { [questionID: number]: number }
    });
    const quizContext = useContext(QuizContext);

    useEffect(() => {
        httpClient.get(`/api/quiz/${params.id}`)
            .then((response: Quiz) => {
                setState({ ...state, quiz: response });
            })
            .catch(() => {});
    }, [])

    const changeAnswer = (index: number, value: number) => {
        const answers = { ...state.answers };
        answers[index] = value;
        setState({ ...state, answers })
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        httpClient.post(`/api/quiz/${params.id}/answers`, state.answers)
            .then((response) => {
                quizContext.setResult(response.result);
                history.push(`/quiz/${params.id}/result`);
            })
            .catch(() => {});
    }

    return (
        <div className="quiz-page-component">
            <div className="container mb-5">
                <h1 className="text-center">{state.quiz.name}</h1>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <form action="#" onSubmit={handleSubmit}>
                                    {
                                        state.quiz.questions.map((question) => {
                                            switch (question.type) {
                                                case 'SINGLE':
                                                    return <SingleQuestion
                                                        key={question.id}
                                                        question={question}
                                                        answer={state.answers[question.id]}
                                                        changeEvent={(value: number) => changeAnswer(question.id, value)} />;
                                                case 'MULTI':
                                                case 'LONG':
                                                default:
                                                    return null;
                                            }
                                        })
                                    }
                                    <input type="submit" className="btn btn-primary w-100" value="SUBMIT"/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuizPage;