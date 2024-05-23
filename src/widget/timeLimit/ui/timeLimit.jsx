import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { bodyLabel, radiusBox } from '../../../app/styles/styles.css';
import { timeLimitBox, timeLimitWrapper } from './styled.css';
import wordGameSlice from '../../../pages/wordGame/model/wordGameSlice';

export const TimeLimit = () => {
    const dispatch = useDispatch();
    const isStart = useSelector(state => state.wordGame.isStart);
    const isLoading = useSelector(state => state.random.isLoading);
    const INTERVAL_TIME = 1000;
    const INITIAL_TIME = 60;
    const [time, setTime] = useState(INITIAL_TIME);
    const timerRef = useRef(null);

    const timer = () => {
        timerRef.current = setInterval(() => {
            setTime(prev => prev - 1);
        }, INTERVAL_TIME);

        if (isStart === 'start' && time === 0) {
            clearInterval(timerRef.current);
            dispatch(wordGameSlice.actions.changeGameState('end'));
        }
    };

    useEffect(() => {
        if (isStart === 'init') {
            setTime(INITIAL_TIME);
        }
    }, [isStart]);

    useEffect(() => {
        if (isStart === 'start' && !isLoading) {
            timer();
        }
        return () => clearInterval(timerRef.current);
    }, [time, isStart, isLoading]);

    return (
        <div className={timeLimitWrapper}>
            <span className={bodyLabel}>남은 시간</span>
            <div className={`${radiusBox} ${timeLimitBox}`}>{time} 초</div>
        </div>
    );
};
