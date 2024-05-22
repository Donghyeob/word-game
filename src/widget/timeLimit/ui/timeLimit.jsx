import { useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { bodyLabel, radiusBox } from '../../../app/styles/styles.css';
import { timeLimitBox, timeLimitWrapper } from './styled.css';

export const TimeLimit = () => {
    const isStart = useSelector(state => state.wordGame.isStart);
    const isLoading = useSelector(state => state.random.isLoading);
    const INTERVAL_TIME = 1000;
    const INITIAL_TIME = 10;
    const [time, setTime] = useState(INITIAL_TIME);
    const timerRef = useRef(null);

    const timer = () => {
        if (isStart && !isLoading) {
            timerRef.current = setInterval(() => {
                setTime(prev => prev - 1);
            }, INTERVAL_TIME);
        }

        if (time === 0) {
            clearInterval(timerRef.current);
        }
    };

    useEffect(() => {
        setTime(INITIAL_TIME);
    }, [isStart]);

    useEffect(() => {
        timer();

        return () => clearInterval(timerRef.current);
    }, [time, isStart, isLoading]);

    return (
        <div className={timeLimitWrapper}>
            <span className={bodyLabel}>남은 시간</span>
            <div className={`${radiusBox} ${timeLimitBox}`}>{time} 초</div>
        </div>
    );
};
