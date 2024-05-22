import { globalStyle, style } from '@vanilla-extract/css';

globalStyle('html, body', {
    height: '100vh',
    margin: '0',
    padding: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'linear-gradient(to bottom, #a8d0f3, #d7fbfc)',
});

export const bodyLabel = style({
    fontSize: '20px',
    color: '#707070',
    marginBottom: '8px',
});

export const radiusBox = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '450px',
    height: '80px',
    padding: '16px 0',
    borderRadius: '48px',
    fontSize: '36px',
    fontWeight: '500',
    color: '#444444',
    boxSizing: 'border-box',
});
