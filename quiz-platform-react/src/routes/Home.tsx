import React from 'react';
import LoginForm from '../components/LoginForm';

const Home = () => {
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
                                <a href="#" className="quiz-link">Geek Level</a>
                                <a href="#" className="quiz-link">Geek Level</a>
                                <a href="#" className="quiz-link">Geek Level</a>
                                <a href="#" className="quiz-link">Geek Level</a>
                                <a href="#" className="quiz-link">Geek Level</a>
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