import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1a1a1a',
        },
        secondary: {
            main: '#b002c7',
        },
    },
    components: {
        MuiCssBaseline: {
          styleOverrides: {
            h1: {
              fontSize: '1.5em',
             
            },
            h2: {
              fontSize: '1.35em',
              
            },
            h3: {
              fontSize: '1.25em',
             
            },
            h4: {
              fontSize: '1.15em',
              
            },
            h5: {
              fontSize: '1.05em',
            },
            h6: {
              fontSize: '1em',
            },
            p: {
              fontSize: '1em',
            },
            li: {
              fontSize: '1em',
              lineHeight: 1.6,
              margin: '0.5rem 0',
            },
            code: {
                fontSize: '1em',
            }
          },
        },
        MuiSvgIcon: {
          styleOverrides: {
            root: {
              fontSize: '2.2rem',
            },
          },
        },
      }
});

export default theme;
