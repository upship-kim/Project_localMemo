import React from 'react';
import styled from 'styled-components';
import CancleButton from '../atoms/CancleButton';
import AccessButton from '../atoms/AccessButton';

const ButtonRow = () => {
    return (
        <Style>
            <CancleButton text="취소" type="button" />
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
