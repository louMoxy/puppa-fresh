import {createTheme} from "@mui/material";

export const theme = createTheme(
    {
        palette: {
            type: 'light',
            primary: {
                main: '#61c1af',
                light: '#c7ddd9',
                dark: '#468D7F',
            },
            secondary: {
                main: '#e16038',
                light: '#f7c6a5',
            },
            third: {
                main: '#171345',
                light: '#A7A5B8',
                text: '#fff'
            },
            text: {
                primary: '#171345',
                secondary: '#74718F',
                disabled: '#A7A5B8',
                hint: '#171345'
            },
        },
        typography: {
            h1: {
                fontFamily: 'bely-display,sans-serif',
                color: '#171345',
                fontSize: '3.5rem',
                '@media (max-width:900px)': {
                    fontSize: '2.5rem',
                }
            },
            h2: {
                fontFamily: 'bely-display,sans-serif',
                color: '#171345'
            },
            h3: {
                fontFamily: 'bely-display,sans-serif',
                color: '#171345'
            },
            h4: {
                fontFamily: 'bely-display,sans-serif',
                color: '#171345'
            },
            h5: {
                fontFamily: 'bely-display,sans-serif',
                color: '#171345'
            },
            h6: {
                fontFamily: 'bely-display,sans-serif',
                color: '#171345'
            },
            button: {
                fontFamily: 'brandon-grotesque,sans-serif',
                color: '#fff'
            },
            a: {
                fontFamily: 'brandon-grotesque,sans-serif',
            },
            subtitle1: {
                fontFamily: 'brandon-grotesque,sans-serif',
                color: '#171345',
                fontSize: '1.2rem',
            },
            body1: {
                fontFamily: 'brandon-grotesque,sans-serif',
                color: '#171345'
            },
            body2: {
                fontFamily: 'brandon-grotesque,sans-serif',
                color: '#171345'
            },
            p: {
                fontFamily: 'brandon-grotesque,sans-serif',
                color: '#171345'
            },
            caption:  {
                fontFamily: 'brandon-grotesque,sans-serif',
                color: '#171345'
            },
            overline:  {
                fontFamily: 'brandon-grotesque,sans-serif',
                color: '#171345'
            },
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        color: '#fff'
                    }
                }
            }
        }
    }
);
