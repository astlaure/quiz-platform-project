import React from 'react';

const QuizList = () => {
    return (
        <div className="quiz-list-component">
            <div className="container">
                <h1 className="text-center">Quiz</h1>
                <div className="card">
                    <div className="card-body">
                        <table className="table">
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Geek Level</td>
                                <td>
                                    <a href="#">Edit</a>
                                    <a href="#">Delete</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Geek Level</td>
                                <td>
                                    <a href="#">Edit</a>
                                    <a href="#">Delete</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Geek Level</td>
                                <td>
                                    <a href="#">Edit</a>
                                    <a href="#">Delete</a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <a href="#" className="btn btn-outline-success w-25">Create</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuizList;