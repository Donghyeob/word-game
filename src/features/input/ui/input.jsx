import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { bodyLabel, radiusBox } from '../../../app/styles/styles.css';
import { inputBox, inputWrapper } from './styled.css';

export const Input = () => {
    const isStart = useSelector(state => state.wordGame.isStart);
    const targetWord = useSelector(state => state.random.targetWord);
    const [value, setValue] = useState('');
    const [disabled, setDisabled] = useState(false);

    const wordCheck = () => {
        if (targetWord === value) {
            console.log('정답');
        } else {
            console.log('오답');
        }
    };

    const onChangeInput = useCallback(event => {
        setValue(event.target.value);
    }, []);

    const onKeyDownInput = event => {
        if (event.key === 'Enter' && value !== '') {
            wordCheck();
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
