import { style } from '@vanilla-extract/css';

export const correctTitle = style({
    backgroundColor: '#4dc187',
});

export const correctBody = style({
    backgroundImage: `url(src/shared/assets/images/correct_mark.svg)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100px',
    backgroundPosition: 'center center',
});
