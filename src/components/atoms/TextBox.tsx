import React from 'react';
import { TextBoxType } from '../../types/atomType';

const TextBox = ({ value, ...props }: TextBoxType) => {
    return <textarea {...props}>{value}</textarea>;
};

export default TextBox;
