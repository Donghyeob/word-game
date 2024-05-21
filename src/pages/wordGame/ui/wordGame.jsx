import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { TargetWord } from '../../../widget/targetWord';
import { getRandomWords } from '../../../entities/target/targetThunk';

export const WordGame = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRandomWords());
    }, []);

    return (
        <div>
            <TargetWord />
        </div>
    );
};
