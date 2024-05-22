import { style } from '@vanilla-extract/css';

export const wordGameWrapper = style({
    width: '940px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px',
    borderRadius: '40px',
    backgroundColor: '#ffffff',
    boxShadow: '0 3px 6px 0 rgba(24, 43, 88, 0.2)',
});

export const headerWrapper = style({
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
});

export const bodyWrapper = style({
    width: '450px',
    gap: '40px',
    display: 'flex',
    flexDirection: 'column',
});

export const footerWrapper = style({});
