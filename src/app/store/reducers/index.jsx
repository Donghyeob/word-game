import { combineReducers } from 'redux';
import targetSlice from '../../../entities/target/targetSlice';

const rootReducer = (state, action) => {
    const combineReducer = combineReducers({
        target: targetSlice.reducer,
    });
    return combineReducer(state, action);
};

export default rootReducer;
