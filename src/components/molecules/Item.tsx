import React from 'react';
import styled from 'styled-components';
import SmallText from '../atoms/SmallText';
import SubTitleText from '../atoms/SubTitleText';

const Item = () => {
    return (
        <Style>
            <SubTitleText text="title" />
            <SmallText text={'body'} />
        </Style>
    );
};

export default Item;
const Style = styled.div`
    background: #ececec;
    border-radius: 4px;
    width: 100%;
    height: auto;
    padding: 1.4rem 0.8rem;
`;
