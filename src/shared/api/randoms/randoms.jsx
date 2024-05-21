import instance from '../base';

export const getWords = number => {
    const config = {
        params: {
            number,
        },
    };
    return instance(config);
};
