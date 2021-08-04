import React from 'react';
import styled from 'styled-components';
import { TextType } from '../../types/atomType';

const SubTitleText = ({ text }: TextType) => {
    return <Style>{text}</Style>;
};

export default SubTitleText;

const Style = styled.h2`
    color: #444444;
    margin-bottom: 0.4rem;
`;
