import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import targetSlice from '../../../entities/target/targetSlice';

export const TargetWord = () => {
    const dispatch = useDispatch();
    const targetWord = useSelector(state => state.target.targetWord);

    useEffect(() => {
        dispatch(targetSlice.actions.getOneWord());
    }, [targetWord]);

    return <h1>{targetWord}</h1>;
};
