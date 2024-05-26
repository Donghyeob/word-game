import { createSlice } from '@reduxjs/toolkit';
import { getRandomWords } from './randomThunk';

const initialState = {
    buttonState: false,
    inputState: true,
    randomWords: [],
    targetWord: '',
    isLoading: false,
};

const randomSlice = createSlice({
    name: 'random',
    initialState,
    reducers: {
        getOneWord: state => {
            state.targetWord =
                state.randomWords[
                    Math.floor(Math.random() * state.randomWords.length)
                ];
        },
        corrected: state => {
            state.randomWords = state.randomWords.filter(
                el => el !== state.targetWord,
            );
        },
        endGame: state => {
            state.inputState = true;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(getRandomWords.pending, state => {
                state.randomWords.length = 0;
                state.buttonState = true;
                state.inputState = true;
                state.isLoading = true;
            })
            .addCase(getRandomWords.fulfilled, (state, action) => {
                state.randomWords = action.payload;
                state.buttonState = false;
                state.inputState = false;
                state.isLoading = false;
            })
            .addCase(getRandomWords.rejected, state => {
                state.buttonState = false;
                state.inputState = false;
                state.isLoading = false;
                // 나중에 error message 받아서 넘겨야징
            });
    },
});

export default randomSlice;
