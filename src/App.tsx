import React, { useEffect, useState } from 'react';
import './App.css';
import WritePage from './pages/WritePage';
import MainPage from './pages/MainPage';

function App() {
    useEffect(() => {
        console.log('re-rendering');
    }, []);

    return (
        <div>
            <MainPage />
        </div>
    );
}

export default App;
