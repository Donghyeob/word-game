import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import correctSlice from '../../../widget/result/correct/model/correctSlice';
import wrongSlice from '../../../widget/result/wrong/model/wrongSlice';
import { bodyLabel, radiusBox } from '../../../app/styles/styles.css';
import { inputBox, inputWrapper } from './styled.css';
import randomSlice from '../../../entities/random/randomSlice';

export const Input = () => {
    const dispatch = useDispatch();
    const isStart = useSelector(state => state.wordGame.isStart);
    const targetWord = useSelector(state => state.random.targetWord);
    const [value, setValue] = useState('');
    const [disabled, setDisabled] = useState(false);

    const wordCheck = () => {
        if (targetWord === value) {
            dispatch(correctSlice.actions.addCorrect(value));
            dispatch(randomSlice.actions.corrected());
            dispatch(randomSlice.actions.getOneWord());
        } else {
            dispatch(wrongSlice.actions.addWrong(value));
        }
    };

    const onChangeInput = useCallback(event => {
        setValue(event.target.value);
    }, []);

    const onKeyDownInput = event => {
        if (event.key === 'Enter' && value !== '') {
            wordCheck();
            setValue('');
        }
    };

    useEffect(() => {
        console.log('is start check', isStart);
        if (isStart === 'end') {
            setValue('');
            setDisabled(true);
        } else if (isStart === 'start') {
            setDisabled(false);
        }
    }, [isStart]);

    return (
        <div className={inputWrapper}>
            <span className={bodyLabel}>입력란</span>
            <input
                className={`${radiusBox} ${inputBox}`}
                value={value}
                onChange={onChangeInput}
                onKeyDown={onKeyDownInput}
                disabled={disabled}
            />
        </div>
    );
};
