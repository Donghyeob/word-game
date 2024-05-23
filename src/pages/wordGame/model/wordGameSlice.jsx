import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isStart: 'init',
};

const wordGameSlice = createSlice({
    name: 'wordGame',
    initialState,
    reducers: {
        changeGameState: (state, action) => {
            state.isStart = action.payload;
        },
    },
});

export default wordGameSlice;
