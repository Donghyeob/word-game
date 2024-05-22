import { combineReducers } from 'redux';
import wordGameSlice from '../../../pages/wordGame/model/wordGameSlice';
import randomSlice from '../../../entities/random/randomSlice';

const rootReducer = (state, action) => {
    const combineReducer = combineReducers({
        wordGame: wordGameSlice.reducer,
        random: randomSlice.reducer,
    });
    return combineReducer(state, action);
};

export default rootReducer;
