import React, { useEffect, useState } from 'react';
import AuthContext from '../core/AuthContext';
import { User } from '../models/app.models';
import useHttpClient from '../hooks/useHttpClient';

const AuthContextProvider: React.FC = (props) => {
    const httpClient = useHttpClient();
    const [state, setState] = useState({
        authenticated: false,
        user: {
            username: '',
            role: ''
        },
        login(user: User) {
            setState({ ...state, authenticated: true, user });
        },
        logout() {
            setState({ ...state, authenticated: false, user: { username: '', role: '' } });
        }
    });
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        httpClient.get('/api/security/user')
            .then(() => {})
            .catch(() => {})
            .finally(() => setLoaded(true));
    }, [])

    return (
        <AuthContext.Provider value={state}>
            { loaded ? props.children : null }
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;