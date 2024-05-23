import { style } from '@vanilla-extract/css';

export const wrongTitle = style({
    backgroundColor: '#f86361',
});

export const wrongBody = style({
    backgroundImage: `url(src/shared/assets/images/wrong_mark.svg)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100px',
    backgroundPosition: 'center center',
});
