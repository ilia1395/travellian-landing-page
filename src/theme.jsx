import { inputLabelClasses } from '@mui/material';
import { createTheme } from '@mui/material/styles';

let theme = createTheme({
    breakpoints: {
        values: {
            xs: 320,
            sm: 768,
            md: 1152,
            lg: 1440,
            xl: 1920,
        },
    },
    palette: {
        primary: {
            main: '#FF7757',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#172432',        
            contrastText: '#ffffff',
        },
        text: {
            primary: '#172432',     
            secondary: '#767E86',    
        },
        background: {
            default: '#ffffff',     
            paper: '#ffffff',        
        },
    },
    typography: {
        fontFamily: 'Rubik, serif',
        fontSize: 16,
        color: 'white',
        h1: { 
            fontFamily: 'Playfair Display, serif',
            fontSize: '40px',
            color: '#172432'
        },
        h2: { 
            fontFamily: 'Playfair Display, serif',
            fontSize: '18px',
            color: '#767E86'
        },
        button: { fontSize: '20px', textTransform: 'capitalize'},
    },
    shape: { borderRadius: 12 },
    components: {
        MuiLink: {
            styleOverrides: {
                root: {
                fontSize: '20px',
                fontFamily: 'Rubik, serif',
                },
            },
        },
    },
});

theme = createTheme(theme, {
  typography: {
    h1: {
      ...theme.typography.h1,
      [theme.breakpoints.up('sm')]: { fontSize: '54px' },
      [theme.breakpoints.up('md')]: { fontSize: '64px' },
    },
    h2: {
      ...theme.typography.h2,
      [theme.breakpoints.up('sm')]: { fontSize: '20px' },
      [theme.breakpoints.up('md')]: { fontSize: '24px' },
    },
  },
  components: {
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: '14px',
          fontFamily: 'Rubik, serif',
          color: '#767E86',
          [theme.breakpoints.up('sm')]: { fontSize: '16px' },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: '14px',
          [theme.breakpoints.up('sm')]: { fontSize: '16px' },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          fontSize: '14px',
          [theme.breakpoints.up('sm')]: { fontSize: '16px' },
          [theme.breakpoints.up('md')]: { fontSize: '18px' },
          [theme.breakpoints.up('lg')]: { fontSize: '20px' },
        },
      },
    },
  },
});
export default theme;