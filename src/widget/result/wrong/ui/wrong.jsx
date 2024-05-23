import { useSelector } from 'react-redux';
import { Box } from '../../box/ui/box';
import { wrongBody, wrongTitle } from './styled.css';

export const Wrong = () => {
    const wrong = useSelector(state => state.wrong.wrong);
    const count = wrong.length;

    const params = {
        title: wrongTitle,
        body: wrongBody,
    };

    return <Box addClass={params} title="오답" count={count} text={wrong} />;
};
