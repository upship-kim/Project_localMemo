import React from 'react';
import styled from 'styled-components';
import { form } from '../../types/funcType';
import SmallText from '../atoms/SmallText';
import SubTitleText from '../atoms/SubTitleText';

type props = {
    title: string;
    body: string;
};
const Item = ({ title, body }: props) => {
    return (
        <Style>
            <SubTitleText text={title} />
            <SmallText text={body} />
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
