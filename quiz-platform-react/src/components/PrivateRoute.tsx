import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../core/AuthContext';

interface PrivateRouteProps {
    component: React.FC<any>;
    [x: string]: any;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
    const authContext = useContext(AuthContext);

    return (
        <Route {...rest} render={(props) => {
            if (authContext.authenticated) {
                return <Component {...props} />;
            }
            return <Redirect to="/" />;
        }} />
    )
}

export default PrivateRoute;