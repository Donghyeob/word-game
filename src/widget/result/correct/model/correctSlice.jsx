import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    corrected: [],
};

const correctSlice = createSlice({
    name: 'correct',
    initialState,
    reducers: {
        addCorrect: (state, action) => {
            state.corrected.push(action.payload);
        },
    },
});

export default correctSlice;
