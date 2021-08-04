import React from 'react';
import styled from 'styled-components';
import SmallText from '../atoms/SmallText';
import TitleText from '../atoms/TitleText';

const Header = () => {
    return (
        <Container>
            <TitleText text="Local Memo App" />
            <SmallText text="나만의 로컬 메모장" />
        </Container>
    );
};

export default Header;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    margin-bottom: 1rem;
`;
