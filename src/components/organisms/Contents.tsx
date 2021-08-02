import React from 'react';
import styled from 'styled-components';
import TextBox from '../atoms/TextBox';
import TitleInput from '../atoms/TitleInput';
import ButtonRow from '../molecules/ButtonRow';

const Contents = () => {
    return (
        <Style>
            <TitleInput placeholder="title을 입력하세요" />
            <TextBox />
            <ButtonRow />
        </Style>
    );
};

export default Contents;

const Style = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 1rem;
    height: 60vh;
    padding: 0;
`;
