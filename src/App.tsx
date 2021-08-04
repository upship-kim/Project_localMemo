import React, { useEffect } from 'react';
import './App.css';
import WritePage from './pages/WritePage';

function App() {
    useEffect(() => {
        console.log('re-rendering');
    }, []);

    return (
        <div>
            <WritePage />
        </div>
    );
}

export default App;
