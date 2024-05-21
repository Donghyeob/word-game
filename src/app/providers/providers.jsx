import { Provider } from 'react-redux';
import wrapper from '../store/store';

export const Providers = ({ children }) => {
    return <Provider store={wrapper}>{children}</Provider>;
};
