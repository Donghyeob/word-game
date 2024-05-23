import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    wrong: [],
};

const wrongSlice = createSlice({
    name: 'wrong',
    initialState,
    reducers: {
        addWrong: (state, action) => {
            state.wrong.push(action.payload);
        },
    },
});

export default wrongSlice;
