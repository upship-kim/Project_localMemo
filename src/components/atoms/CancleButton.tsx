import React from 'react';
import styled from 'styled-components';
import { ButtonType } from '../../types/atomType';

const CancleButton = ({ text, ...props }: ButtonType) => {
    return <StyledButton {...props}>{text}</StyledButton>;
};

export default CancleButton;

const StyledButton = styled.button`
    outline: none;
    width: 20%;
    border: none;
    padding: 0.4rem 1rem;
    border-radius: 4px;
    background: #fdb9b9;
`;
