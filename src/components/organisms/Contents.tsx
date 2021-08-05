import React from 'react';
import styled from 'styled-components';
import { temp } from '../../types/funcType';
import TextBox from '../atoms/TextBox';
import TitleInput from '../atoms/TitleInput';
import ButtonRow from '../molecules/ButtonRow';

const Contents = ({ onChange, form }: temp) => {
    return (
        <Style>
            <TitleInput
                placeholder="title을 입력하세요"
                name="title"
                onChange={onChange}
                value={form.title}
            />
            <TextBox name="body" onChange={onChange}>
                {form.body}
            </TextBox>
            <ButtonRow />
        </Style>
    );
};

export default Contents;

const Style = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 1rem;
    width: 100%;
`;
