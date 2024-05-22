import { style } from '@vanilla-extract/css';

export const resetButton = style({
    width: '180px',
    height: '66px',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: '#806de8',
    color: '#ffffff',
    fontSize: '28px',
    cursor: 'pointer',
    ':hover': {
        backgroundColor: '#6956d2',
    },
});
