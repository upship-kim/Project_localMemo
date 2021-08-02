import React from 'react';
import styled from 'styled-components';
import { TextType } from '../../types/atomType';

const TitleText = ({ text }: TextType) => {
    return <Style>{text}</Style>;
};

export default TitleText;

const Style = styled.h1`
    color: #444444;
`;
