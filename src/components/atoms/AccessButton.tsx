import React from 'react';
import styled from 'styled-components';
import { ButtonType } from '../../types/atomType';

const AccessButton = ({ text, ...props }: ButtonType) => {
    return <StyledButton {...props}>{text}</StyledButton>;
};

export default AccessButton;
const StyledButton = styled.button`
    outline: none;
    width: 20%;
    border: none;
    padding: 0.4rem 1rem;
    border-radius: 4px;
    background: #aaaaaa;
`;
