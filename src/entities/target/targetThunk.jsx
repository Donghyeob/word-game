import { createAsyncThunk } from '@reduxjs/toolkit';
import { getWords } from '../../shared/api/randoms';

const WORD_QUANTITY = 50;

export const getRandomWords = createAsyncThunk('target/getRandomWords', async () => {
    try {
        return await getWords(WORD_QUANTITY);
    } catch (error) {
        console.log('thunk get random word error', error);
    }
});
