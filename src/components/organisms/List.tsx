import React from 'react';
import styled from 'styled-components';
import { form, list } from '../../types/funcType';
import SubTitleText from '../atoms/SubTitleText';
import Item from '../molecules/Item';

const List = ({ list }: list) => {
    return (
        <Style>
            {list &&
                list.map((item: form, index) => (
                    <Item key={index} title={item.title} body={item.body} />
                ))}

            {list.length === 0 && (
                <SubTitleText text="새 메모를 작성해보세요 :)" />
            )}
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
