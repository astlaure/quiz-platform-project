import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import useHttpClient from '../hooks/useHttpClient';
import { QuizSummary } from '../models/app.models';

const Home = () => {
    const [state, setState] = useState([] as QuizSummary[]);
    const httpClient = useHttpClient();

    useEffect(() => {
        httpClient.get('/api/quiz/summaries')
            .then((response) => setState(response))
            .catch(() => {});
    }, [])

    return (
        <div className="home-component">
            <div className="text-center home-text">
                <h1>Quiz Platform</h1>
                <p>Platform to create and play new quiz.</p>
            </div>
            <div className="container card-container">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4">
                        <div className="card">
                            <div className="card-body text-center">
                                <h3 className="mb-5">Play</h3>
                                {
                                    state.map((summary, index) => {
                                        return <Link key={index} to={`/quiz/${summary.id}`} className="quiz-link">{summary.name}</Link>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 offset-lg-2 col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="text-center mb-5">Create</h3>
                                <LoginForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
