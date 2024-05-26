import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import randomSlice from '../../../entities/random/randomSlice';
import { bodyLabel, radiusBox } from '../../../app/styles/styles.css';
import { timeLimitBox, timeLimitWrapper } from './styled.css';

export const TimeLimit = () => {
    const dispatch = useDispatch();
    const randomWords = useSelector(state => state.random.randomWords);
    const isLoading = useSelector(state => state.random.isLoading);
    const [time, setTime] = useState(60);
    const timerRef = useRef(null);
    const timeLimitRef = useRef(null);

    const timer = () => {
        clearTimeout(timeLimitRef.current);
        timerRef.current = setInterval(() => {
            setTime(prev => prev - 1);
        }, 1000);

        timeLimitRef.current = setTimeout(() => {
            dispatch(randomSlice.actions.endGame());
            clearInterval(timerRef.current);
        }, time * 1000);
    };

    useEffect(() => {
        if (randomWords.length === 0 && isLoading) {
            setTime(60);
        } else {
            timer();
        }

        return () => {
            clearInterval(timerRef.current);
            clearTimeout(timeLimitRef.current);
        };
    }, [randomWords]);

    return (
        <div className={timeLimitWrapper}>
            <span className={bodyLabel}>남은 시간</span>
            <div className={`${radiusBox} ${timeLimitBox}`}>{time} 초</div>
        </div>
    );
};
