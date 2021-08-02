import React, { useEffect, useState } from 'react';
import './App.css';
import TitleText from './components/atoms/TitleText';
import SmallText from './components/atoms/SmallText';
import TitleInput from './components/atoms/TitleInput';
import TextBox from './components/atoms/TextBox';
import CancleButton from './components/atoms/CancleButton';
import AccessButton from './components/atoms/AccessButton';

function App() {
    const hello: string = 'hello';
    const [state, setState] = useState('');
    useEffect(() => {
        console.log('re-rendering');
    }, []);

    return (
        <div>
            <TitleText text={hello} />
            <SmallText text="ddd" />
            <CancleButton
                type="button"
                text="취소"
                onClick={() => console.log('취소')}
            />
            <AccessButton
                type="button"
                text="승인"
                onClick={() => console.log('승인')}
            />
            <TitleInput
                onChange={e => setState(e.target.value)}
                value={state}
                placeholder="title을 입력해주세요"
            />
            <TextBox onChange={e => setState(e.target.value)} value={state} />
        </div>
    );
}

export default App;
