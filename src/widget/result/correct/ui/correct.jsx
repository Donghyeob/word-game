import { useSelector } from 'react-redux';
import { Box } from '../../box/ui/box';
import { correctBody, correctTitle } from './styled.css';

export const Correct = () => {
    const corrected = useSelector(state => state.correct.corrected);
    const count = corrected.length;

    const params = {
        title: correctTitle,
        body: correctBody,
    };

    return (
        <Box addClass={params} title="정답" count={count} text={corrected} />
    );
};
