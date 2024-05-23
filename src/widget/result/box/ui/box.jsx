import { Text } from './text';
import { boxBody, boxTitle, radiusBox } from './styled.css';

export const Box = ({ addClass, title, count, text }) => {
    return (
        <div className={radiusBox}>
            <div
                className={`${boxTitle} ${addClass.title}`}
            >{`${title} (${count})`}</div>
            <div className={`${boxBody} ${addClass.body}`}>
                <Text text={text} />
            </div>
        </div>
    );
};
