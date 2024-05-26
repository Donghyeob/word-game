import { combineReducers } from 'redux';
import randomSlice from '../../../entities/random/randomSlice';
import correctSlice from '../../../widget/result/correct/model/correctSlice';
import wrongSlice from '../../../widget/result/wrong/model/wrongSlice';

const rootReducer = (state, action) => {
    const combineReducer = combineReducers({
        random: randomSlice.reducer,
        correct: correctSlice.reducer,
        wrong: wrongSlice.reducer,
    });
    return combineReducer(state, action);
};

export default rootReducer;
