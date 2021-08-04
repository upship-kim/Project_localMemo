import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonType } from '../../types/atomType';

const AccessButton = ({ text, height, to, ...props }: ButtonType) => {
    if (to) {
        return (
            <StyledLink {...props} style={{ height: `${height}%` }} to={to}>
                {text}
            </StyledLink>
        );
    }

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
    :hover {
        cursor: pointer;
    }
`;
const StyledLink = styled(Link)`
    outline: none;
    width: 20%;
    border: none;
    padding: 0.4rem 1rem;
    border-radius: 4px;
    background: #aaaaaa;
    color: black;
    text-decoration: none;
    text-align: center;
`;
