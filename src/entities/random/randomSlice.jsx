import { createSlice } from '@reduxjs/toolkit';
import { getRandomWords } from './randomThunk';

const initialState = {
    buttonState: false,
    randomWords: [],
    targetWord: '',
    isLoading: false,
};

/**
 * 1. API를 이용해 단어를 가져옴
 * 2. 배열에서 하나의 단어를 꺼내고 엘리먼트는 삭제해야함
 */
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
    },
    extraReducers: builder => {
        builder
            .addCase(getRandomWords.pending, state => {
                state.buttonState = true;
                state.isLoading = true;
            })
            .addCase(getRandomWords.fulfilled, (state, action) => {
                state.randomWords = action.payload;
                state.buttonState = false;
                state.isLoading = false;
            })
            .addCase(getRandomWords.rejected, state => {
                state.buttonState = false;
                state.isLoading = false;
                // 나중에 error message 받아서 넘겨야징
            });
    },
});

export default randomSlice;
