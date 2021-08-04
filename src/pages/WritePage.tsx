import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import WriteTemp from '../components/templates/WriteTemp';
import { form } from '../types/funcType';

type write = {
    list: form[];
    setList: React.Dispatch<React.SetStateAction<form[]>>;
};

const WritePage = ({ list, setList }: write) => {
    const history = useHistory();
    const [form, setForm] = useState({ title: '', body: '' });

    const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        setList([form, ...list]);
        console.log(form);
        history.push('/');
    };
    const onChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
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
