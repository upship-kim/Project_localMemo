import React, { useState } from 'react';
import styled from 'styled-components';
import WriteTemp from '../components/templates/WriteTemp';
import { temp } from '../types/funcType';

const WritePage = () => {
    const [form, setForm] = useState({ title: '', body: '' });

    const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(form);
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
