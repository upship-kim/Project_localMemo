import React from 'react';
import styled from 'styled-components';
import { InputType } from '../../types/atomType';

const TitleInput = ({ ...props }: InputType) => {
    return <Styled {...props} />;
};

export default TitleInput;

const Styled = styled.input`
    width: 100%;
    outline: none;
    background: white;
    border-radius: 4px;
    border: none;
    padding: 0.4rem 1rem;
`;
