import React from 'react';
import styled from 'styled-components';
import Item from '../molecules/Item';

const List = () => {
    return (
        <Style>
            <Item />
            <Item />
        </Style>
    );
};

export default List;

const Style = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 1rem;
    width: 100%;
`;
