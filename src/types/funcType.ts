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
    id: number;
    title: string;
    body: string;
};

export type list = {
    list: form[];
};

export type write = {
    list: form[];
    setList: React.Dispatch<React.SetStateAction<form[]>>;
    id: number;
    setId: React.Dispatch<React.SetStateAction<number>>;
};
