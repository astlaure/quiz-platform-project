import './assets/sass/styles.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AuthContextProvider from './components/AuthContextProvider';
import QuizContextProvider from './components/QuizContextProvider';
import App from './App';

ReactDOM.render(
    <AuthContextProvider>
        <QuizContextProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </QuizContextProvider>
    </AuthContextProvider>,
    document.getElementById('root')
)