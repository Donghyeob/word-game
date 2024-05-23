import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { remainDiv } from './styled.css';

export const RemainWord = () => {
    const isLoading = useSelector(state => state.random.isLoading);
    const randomWordsLength = useSelector(
        state => state.random.randomWords.length,
    );
    const [remainWordsCount, setRemainWordsCount] = useState(randomWordsLength);

    useEffect(() => {
        setRemainWordsCount(isLoading ? 0 : randomWordsLength);
    }, [isLoading, randomWordsLength]);

    return <div className={remainDiv}>{remainWordsCount}</div>;
};
