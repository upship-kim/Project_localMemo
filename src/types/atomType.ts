export type TextType = {
    text: string;
};
export type ButtonType = {
    type: 'submit' | 'button';
    text: string;
    onClick?: () => void;
};

export type InputType = {
    name?: string;
    id?: string;
    value?: string | number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
};

export type TextBoxType = {
    name?: string;
    value?: string | number;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};