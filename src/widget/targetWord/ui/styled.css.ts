import { style } from '@vanilla-extract/css';

export const targetWordWrapper = style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});

export const targetWordBox = style({
    display: 'flex',
    alignItems: 'center',
    height: '96px',
    padding: '10px 55px',
    backgroundColor: '#e9ebf7',
    borderRadius: '8px',
    fontSize: '64px',
    fontWeight: '500',
    color: '#444444',
    boxSizing: 'border-box',
});
