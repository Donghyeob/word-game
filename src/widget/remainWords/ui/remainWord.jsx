import { useSelector } from 'react-redux';
import { remainDiv } from './styled.css';

export const RemainWord = () => {
    const isLoading = useSelector(state => state.random.isLoading);
    const randomWordsLength = useSelector(
        state => state.random.randomWords.length,
    );
    const remainWordCount = isLoading ? 0 : randomWordsLength;

    return <div className={remainDiv}>{remainWordCount}</div>;
};
