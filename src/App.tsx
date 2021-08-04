import React, { useEffect, useState } from 'react';
import './App.css';
import WritePage from './pages/WritePage';
import MainPage from './pages/MainPage';
import { Route, Switch } from 'react-router-dom';
import { form } from './types/funcType';

function App() {
    const [list, setList] = useState<form[]>([]);
    const [id, setId] = useState<number>(1);

    useEffect(() => {
        const LoadList = localStorage.getItem('data');
        if (LoadList !== null) {
            const ParseList = JSON.parse(LoadList);
            setList(ParseList);
            console.log(ParseList);
            setId(ParseList.length + 1);
        }
    }, []);
    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(list));
    }, [list]);

    return (
        <Switch>
            <Route exact path="/">
                <MainPage list={list} setList={setList} />
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
