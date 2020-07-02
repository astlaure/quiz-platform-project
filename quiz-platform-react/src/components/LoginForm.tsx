import React, { useState } from 'react';

const LoginForm = () => {
    const [state, setState] = useState({
        username: '',
        password: ''
    });

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
    }

    return (
        <form action="#" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    className="form-control"
                    type="text"
                    value={state.username}
                    onChange={event => setState({ ...state, username: event.currentTarget.value })}
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    className="form-control"
                    type="password"
                    value={state.password}
                    onChange={event => setState({ ...state, password: event.currentTarget.value })}
                />
            </div>
            <input type="submit" className="btn btn-primary w-100" value="submit"/>
        </form>
    )
}

export default LoginForm;