import React from 'react';
import styled from 'styled-components';
import { TextType } from '../../types/atomType';

const SmallText = ({ text }: TextType) => {
    return <Style>{text}</Style>;
};

export default SmallText;

const Style = styled.span`
    color: #5a5a5a;
`;
