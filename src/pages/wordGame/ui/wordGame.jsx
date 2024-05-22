import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TargetWord } from '../../../widget/targetWord';
import { Reset } from '../../../features/reset';
import { RemainWord } from '../../../widget/remainWords';
import { TimeLimit } from '../../../widget/timeLimit';
import wordGameSlice from '../model/wordGameSlice';
import { getRandomWords } from '../../../entities/random/randomThunk';
import { bodyWrapper, headerWrapper, wordGameWrapper } from './styled.css';

export const WordGame = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.random.isLoading);
    const isStart = useSelector(state => state.wordGame.isStart);

    useEffect(() => {
        if (!isStart && !isLoading) {
            dispatch(wordGameSlice.actions.changeGameState(true));
            dispatch(getRandomWords());
        }
    }, [isStart, isLoading]);

    return (
        <div className={wordGameWrapper}>
            <div className={headerWrapper}>
                <Reset />
                <RemainWord />
            </div>
            <div className={bodyWrapper}>
                <TargetWord />
                <TimeLimit />
            </div>
            <div className="footer">correct & wrong</div>
        </div>
    );
};
