import React from 'react';
import { User } from '../models/app.models';

const initialContext = {
    authenticated: false,
    user: {
        username: '',
        role: ''
    },
    login(user: User) {},
    logout() {}
};

const AuthContext = React.createContext(initialContext);

export default AuthContext;