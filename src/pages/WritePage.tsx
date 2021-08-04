import React from 'react';
import styled from 'styled-components';
import WriteTemp from '../components/templates/WriteTemp';

const WritePage = () => {
    return (
        <Container>
            <Style>
                <WriteTemp />
            </Style>
        </Container>
    );
};

export default WritePage;
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
