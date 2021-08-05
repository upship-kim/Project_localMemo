import React from 'react';
import styled from 'styled-components';
import { TextBoxType } from '../../types/atomType';

const TextBox = ({ value, children, ...props }: TextBoxType) => {
    return (
        <Style {...props} placeholder="내용을 입력하세요">
            {children ? children : value}
        </Style>
    );
};

export default TextBox;

const Style = styled.textarea`
    width: 100%;
    outline: none;
    background: white;
    border-radius: 4px;
    border: none;
    padding: 0.4rem 1rem;
    height: 20vh;
`;
