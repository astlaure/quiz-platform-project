import React, { useState } from 'react';

const QuestionForm = () => {
    const [state, setState] = useState({
        name: '',
        type: 'SINGLE'
    });

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
    }

    return (
        <div className="question-form">
            <form action="#" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        className="form-control"
                        type="text"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        className="form-control"
                        type="password"
                    />
                </div>
                <input type="submit" className="btn btn-primary w-100" value="submit"/>
            </form>
        </div>
    )
}

export default QuestionForm;