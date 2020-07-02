import React from 'react';
import Home from './routes/Home';
import Navbar from './components/Navbar';
import { Switch, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import QuizList from "./routes/QuizList";
import QuizGrid from "./routes/QuizGrid";
import QuizCreate from './routes/QuizCreate';
import QuizPage from './routes/QuizPage';
import About from './routes/About';
import Result from './routes/Result';

const App = () => {
    const location = useLocation();

    return (
        <div className="app">
            <Navbar/>
            <div className="hero" />
            <TransitionGroup>
                <CSSTransition key={location.key} classNames="my-node" timeout={300}>
                    <Switch location={location}>
                        <Route path="/about" component={About} />
                        <Route path="/create" component={QuizCreate} />
                        <Route path="/quiz/list" component={QuizList} />

                        <Route path="/quiz/:id/result" component={Result} />
                        <Route path="/quiz/:id" component={QuizPage} />
                        <Route path="/quiz" component={QuizGrid} />
                        <Route path="/" component={Home} />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        </div>
    )
}

export default App;
