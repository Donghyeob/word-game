import { useDispatch, useSelector } from 'react-redux';
import { resetButton } from './styled.css';
import { getRandomWords } from '../../../entities/random/randomThunk';

export const Reset = () => {
    const dispatch = useDispatch();
    const buttonState = useSelector(state => state.random.buttonState);

    const onClickReset = () => {
        dispatch(getRandomWords());
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
