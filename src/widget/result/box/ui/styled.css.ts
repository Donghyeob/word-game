import { style } from '@vanilla-extract/css';

export const radiusBox = style({
    width: '410px',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '8px',
    alignItems: 'center',
    backgroundColor: '#eff4f6',
    overflow: 'hidden',
});

export const boxTitle = style({
    width: '100%',
    height: '48px',
    display: 'flex',
    color: '#ffffff',
    fontSize: '28px',
    justifyContent: 'center',
    alignItems: 'center',
});

export const boxBody = style({
    width: '100%',
    height: '184px',
    padding: '20px 30px',
    fontSize: '28px',
    color: '#444444',
    overflowY: 'auto',
    wordBreak: 'break-all',
});

export const bodyText = style({
    marginRight: '8px',
});
