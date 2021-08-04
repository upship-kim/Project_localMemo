import React from 'react';
import styled from 'styled-components';
import Contents from '../organisms/Contents';
import Header from '../organisms/Header';

const WriteTemp = () => {
    return (
        <Style>
            <Header />
            <Contents />
        </Style>
    );
};

export default WriteTemp;

const Style = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    align-items: flex-start;
    padding: 0 2rem 2rem 2rem;
`;
