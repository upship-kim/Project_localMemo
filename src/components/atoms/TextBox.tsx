import React from 'react';
import styled from 'styled-components';
import { TextBoxType } from '../../types/atomType';

const TextBox = ({ value, ...props }: TextBoxType) => {
    return <Style {...props}>{value}</Style>;
};

export default TextBox;

const Style = styled.textarea`
    width: 100%;
    outline: none;
    background: white;
    border-radius: 4px;
    border: none;
    padding: 0.4rem 1rem;
    height: 40vh;
`;
