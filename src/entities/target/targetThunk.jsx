import { createAsyncThunk } from '@reduxjs/toolkit';
import { getWords } from '../../shared/api/randoms';

const WORD_QUANTITY = 50;

export const getRandomWords = createAsyncThunk('target/getRandomWords', async () => {
    try {
        const response = await getWords(WORD_QUANTITY);
        return response.data;
    } catch (error) {
        console.log('thunk get random word error', error);
    }
});
