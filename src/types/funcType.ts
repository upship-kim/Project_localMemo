export type temp = {
    form: {
        title: string;
        body: string;
    };
    onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => void;
};
