import React from 'react';
import styled from 'styled-components';
import { list } from '../../types/funcType';
import AccessButton from '../atoms/AccessButton';
import Header from '../organisms/Header';
import List from '../organisms/List';

const MainTemp = ({ list }: list) => (
    <Style>
        <TopRow>
            <Header />
            <AccessButton
                text={'글쓰기'}
                type="button"
                height={10}
                to="/write"
            />
        </TopRow>
        <List list={list} />
    </Style>
);

export default MainTemp;

const Style = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    align-items: flex-start;
    padding: 0 2rem 2rem 2rem;
`;

const TopRow = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
