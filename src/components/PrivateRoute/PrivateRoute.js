import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { InformationContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [allInfo, setAllInfo] = useContext(InformationContext);

    return (
        <div>
            <Route
             {...rest}
             render={({ location }) =>
             allInfo.isSignedIn ? (
             children
             ) : (
             <Redirect
                 to={{
                 pathname: "/login",
                 state: { from: location }
               }}
            />
            )
           }
        />
        </div>
    );
};

export default PrivateRoute;