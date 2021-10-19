import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../hooks/useAuth';

// spliting Children props from useAuth from all props then using rest of props to make Private route
const PrivateRoute = ({children, ...rest}) => {
    // On reload fetching data and wait for it untill it appears in the mean time showing Glowing spinner
    const { user, isLoading } = useAuth();
    if(isLoading){
        return <Spinner animation="grow" />
    }

    /// if there is not any email then taking user to the Login page Funtionality
    return (
        <Route
            {...rest}
            render={({location})=> 
                user.email ? children : <Redirect
                    to={{
                        pathname:"/login",
                        state:{from:location}
                    }}
                ></Redirect>
            }
        >
        </Route>
    );
};

export default PrivateRoute;