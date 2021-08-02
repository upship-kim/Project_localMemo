import React from 'react';
import { TextType } from '../../types/atomType';

const TitleText = ({ text }: TextType) => {
    return <h1>{text}</h1>;
};

export default TitleText;
