import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import WriteTemp from '../components/templates/WriteTemp';
import { form, write } from '../types/funcType';

const WritePage = ({ list, setList, id, setId }: write) => {
    const history = useHistory();

    const [form, setForm] = useState<form>({ id: id, title: '', body: '' });
    const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        setList([form, ...list]);
        console.log(form);
        setId(() => id + 1);
        history.push('/');
    };
    const onChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setForm({ ...form, id: id, [e.target.name]: e.target.value });
    };

    return (
        <Container>
            <Style>
                <form onSubmit={onSubmit}>
                    <WriteTemp onChange={onChange} form={form} />
                </form>
            </Style>
        </Container>
    );
};

export default WritePage;
const Container = styled.div`
    padding: 5rem;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Style = styled.div`
    background: #cecece;
    width: 60%;
    height: auto;
    padding: 2rem;
`;
