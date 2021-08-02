import React from 'react';
import styled from 'styled-components';
import { InputType } from '../../types/atomType';

const SearchInput = ({ ...props }: InputType) => {
    return <Styled {...props} />;
};

export default SearchInput;

const Styled = styled.input`
    width: 100%;
    outline: none;
    background: #acacac;
    border-radius: 4px;
    border: none;
    padding: 0.4rem 1rem;
`;
