import React from 'react';
import {Route, Routes} from 'react-router-dom';
import SignupForm from './auth/SignupForm';
import Home from './Home';
import Layout from './layout/Layout';
import NotFound from './layout/NotFound';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="*" element={<NotFound/>}/>
                    <Route path="signup" element={<SignupForm/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;