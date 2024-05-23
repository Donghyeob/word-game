import { style } from '@vanilla-extract/css';

export const inputWrapper = style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
});

export const inputBox = style({
    border: 'solid 2px #b8b2f2',
    textAlign: 'center',
    outline: 'none',
});
