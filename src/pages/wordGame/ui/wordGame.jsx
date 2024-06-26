import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { TargetWord } from '../../../widget/targetWord';
import { Reset } from '../../../features/reset';
import { RemainWord } from '../../../widget/remainWords';
import { TimeLimit } from '../../../widget/timeLimit';
import { getRandomWords } from '../../../entities/random/randomThunk';
import { Input } from '../../../features/input';
import { Correct, Wrong } from '../../../widget/result';
import {
    bodyWrapper,
    footerWrapper,
    headerWrapper,
    wordGameWrapper,
} from './styled.css';

export const WordGame = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRandomWords());
    }, []);

    return (
        <div className={wordGameWrapper}>
            <div className={headerWrapper}>
                <Reset />
                <RemainWord />
            </div>
            <div className={bodyWrapper}>
                <TargetWord />
                <TimeLimit />
                <Input />
            </div>
            <div className={footerWrapper}>
                <Correct />
                <Wrong />
            </div>
        </div>
    );
};
