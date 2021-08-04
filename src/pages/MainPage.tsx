import React, { useState } from 'react';
import styled from 'styled-components';
import MainTemp from '../components/templates/MainTemp';
import { list } from '../types/funcType';

const MainPage = ({ list }: list) => {
    return (
        <Container>
            <Style>
                <MainTemp list={list} />
            </Style>
        </Container>
    );
};

export default MainPage;
const Container = styled.div`
    padding: 5rem;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Style = styled.div`
    background: #cecece;
    width: 60%;
    height: auto;
    padding: 2rem;
`;
