import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import randomSlice from '../../../entities/random/randomSlice';
import { targetWordBox, targetWordWrapper } from './styled.css';
import { bodyLabel } from '../../../app/styles/styles.css';

export const TargetWord = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.random.isLoading);
    const targetWord = useSelector(state => state.random.targetWord);

    useEffect(() => {
        if (!isLoading) {
            dispatch(randomSlice.actions.getOneWord());
        }
    }, [isLoading]);

    return (
        <div className={targetWordWrapper}>
            <span className={bodyLabel}>제시어</span>
            <div className={targetWordBox}>{targetWord}</div>
        </div>
    );
};
