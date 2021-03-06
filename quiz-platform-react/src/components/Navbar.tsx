import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [collapse, setCollapse] = useState(true);
    const location = window.location.pathname;

    const handleToggle = () => {
        setCollapse(!collapse);
    }

    return (
        <nav className={`navbar navbar-expand-lg navbar-dark ${collapse ? null : 'opened'}`}>
            <Link className="navbar-brand" to="/">Quiz Platform</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation" onClick={handleToggle}>
                <span className="navbar-toggler-icon" />
            </button>

            <div className={`navbar-collapse ${collapse ? 'collapse' : null}`} id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className={`nav-item ${ location === '/' ? 'active' : null}`} onClick={() => setCollapse(true)}>
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className={`nav-item ${ location.includes('/quiz') ? 'active' : null}`} onClick={() => setCollapse(true)}>
                        <Link className="nav-link" to="/quiz">Quiz</Link>
                    </li>
                    <li className={`nav-item ${ location === '/about' ? 'active' : null}`} onClick={() => setCollapse(true)}>
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                </ul>
                {/*<form className="form-inline my-2 my-lg-0">*/}
                {/*    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>*/}
                {/*        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>*/}
                {/*</form>*/}
            </div>
        </nav>
    )
}

export default Navbar;
