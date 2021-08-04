import React from 'react';
import styled from 'styled-components';
import { ButtonType } from '../../types/atomType';

const AccessButton = ({ text, height, ...props }: ButtonType) => {
    return (
        <StyledButton {...props} style={{ height: `${height}%` }}>
            {text}
        </StyledButton>
    );
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
