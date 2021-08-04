import React from 'react';
import styled from 'styled-components';
import CancleButton from '../atoms/CancleButton';
import AccessButton from '../atoms/AccessButton';
import { useHistory } from 'react-router';

const ButtonRow = () => {
    const history = useHistory();
    const onCancle = () => {
        history.goBack();
    };
    return (
        <Style>
            <CancleButton text="취소" type="button" onClick={onCancle} />
            <AccessButton text="저장" type="submit" />
        </Style>
    );
};

export default ButtonRow;

const Style = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    padding: 0;
`;
