import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger/src';
import rootReducer from './reducers';

const isDev = process.env.NODE_ENV !== 'production';

const createStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
        devTools: isDev,
    });
};

const wrapper = createStore();

export default wrapper;
