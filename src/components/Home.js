import React from 'react';
import {useAuth} from '../hooks/useAuth';

function Home() {
    const {user} = useAuth();
    console.log(user);
    return (
        <>
            <h1>Welcome to Home Page!</h1>
            <p>{user && "Current User: " + user.email}</p>
        </>
    );
}

export default Home;