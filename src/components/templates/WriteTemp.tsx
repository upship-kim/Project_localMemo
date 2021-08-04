import React from 'react';
import styled from 'styled-components';
import { temp } from '../../types/funcType';
import Contents from '../organisms/Contents';
import Header from '../organisms/Header';

const WriteTemp = ({ onChange, form }: temp) => {
    return (
        <Style>
            <Header />
            <Contents onChange={onChange} form={form} />
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
