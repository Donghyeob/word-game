import { useDispatch, useSelector } from 'react-redux';
import wordGameSlice from '../../../pages/wordGame/model/wordGameSlice';
import { resetButton } from './styled.css';

export const Reset = () => {
    const dispatch = useDispatch();
    const buttonState = useSelector(state => state.random.buttonState);

    const onClickReset = () => {
        dispatch(wordGameSlice.actions.changeGameState(false));
    };

    return (
        <button
            className={resetButton}
            onClick={onClickReset}
            disabled={buttonState}
        >
            Reset
        </button>
    );
};
