import { bodyText } from './styled.css';

export const Text = ({ text }) => {
    return (
        <>
            {text.map((value, index) => {
                return (
                    <span className={bodyText} key={index}>
                        {value}
                    </span>
                );
            })}
        </>
    );
};
