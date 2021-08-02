import React from 'react';
import styled from 'styled-components';
import Contents from '../organisms/Contents';

const WriteTemp = () => {
    return (
        <Style>
            <Contents />
        </Style>
    );
};

export default WriteTemp;

const Style = styled.div`
    width: 100%;
    align-items: center;
    height: 60vh;
    background: #cecece;
    padding: 2rem;
`;
