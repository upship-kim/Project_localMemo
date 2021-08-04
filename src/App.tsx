import React, { useEffect, useState } from 'react';
import './App.css';
import WritePage from './pages/WritePage';
import MainPage from './pages/MainPage';
import { Route, Switch } from 'react-router-dom';
import { form } from './types/funcType';

function App() {
    const [list, setList] = useState<form[]>([]);
    const [id, setId] = useState<number>(1);
    console.log(JSON.parse(JSON.stringify(list)));
    return (
        <Switch>
            <Route exact path="/">
                <MainPage list={list} />
            </Route>
            <Route exact path="/write">
                <WritePage
                    list={list}
                    setList={setList}
                    id={id}
                    setId={setId}
                />
            </Route>
        </Switch>
    );
}

export default App;
