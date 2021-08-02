import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/organisms/Header';
import Contents from './components/organisms/Contents';
import WriteTemp from './components/templates/WriteTemp';

function App() {
    const hello: string = 'hello';
    const [state, setState] = useState('');
    useEffect(() => {
        console.log('re-rendering');
    }, []);

    return (
        <div>
            <Header />
            <WriteTemp />
        </div>
    );
}

export default App;
