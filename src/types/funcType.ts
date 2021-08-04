export type temp = {
    form: {
        title: string;
        body: string;
    };
    onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => void;
};

export type form = {
    title: string;
    body: string;
};

export type list = {
    list: form[];
    setList?: React.Dispatch<React.SetStateAction<never[]>>;
};

export type setList = {};
