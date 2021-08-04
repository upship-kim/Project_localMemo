import React from 'react';
import styled from 'styled-components';
import { form, list } from '../../types/funcType';
import CancleButton from '../atoms/CancleButton';
import SubTitleText from '../atoms/SubTitleText';
import Item from '../molecules/Item';

const List = ({ list, setList }: list) => {
    const filter = (id: number) => {
        const changeList = list.filter(i => i.id !== id);
        setList(changeList);
    };

    return (
        <Style>
            {list &&
                list.map((item: form) => (
                    <ItemBlock>
                        <Item
                            key={item.id}
                            title={item.title}
                            body={item.body}
                        />

                        <CancleButton
                            text="삭제"
                            type="button"
                            onClick={() => filter(item.id)}
                        />
                    </ItemBlock>
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
const ItemBlock = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
