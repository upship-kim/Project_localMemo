import React, { useEffect, useState } from 'react';
import './App.css';
import WritePage from './pages/WritePage';
import MainPage from './pages/MainPage';
import { Route, Switch } from 'react-router-dom';
import { form, list } from './types/funcType';

function App() {
    const [list, setList] = useState<form[]>([]);

    return (
        <Switch>
            <Route exact path="/">
                <MainPage list={list} />
            </Route>
            <Route exact path="/write">
                <WritePage list={list} setList={setList} />
            </Route>
        </Switch>
    );
}

export default App;
