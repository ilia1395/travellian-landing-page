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
            fontFamily: 'Rubik, serif',
            fontSize: '18px',
            color: '#767E86'
        },
        h3: { 
            fontFamily: 'Playfair Display, serif',
            fontSize: '28px',
            color: '#172432'
        },
        h4: { 
          fontFamily: 'Rubik, serif',
          fontSize: '32px',
          color: '#FF7757'
        },
        h5: { 
          fontFamily: 'Rubik, serif',
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#FFFFFF'
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
        MuiButton: {
          styleOverrides: {
            root: {
              fontSize: '20px',
              textTransform: 'capitalize',
              color: 'white',
              boxShadow: 'none'
            },
          },
        },
        MuiIconButton: {
          styleOverrides: {
            root: {
              padding: 0,
              '& .MuiSvgIcon-root': {
                fontSize: '24px', 
                color: '#ffffff',
              },
              '&:active .MuiSvgIcon-root': {
                color: '#FF7757',
              },
            },
          },
        },
        MuiInputAdornment: {
          styleOverrides: {
            root: {
              // Icon style in DatePicker input field
              '& .MuiIconButton-root .MuiSvgIcon-root': {
                color: '#767E86',
              },
              '& .MuiIconButton-root:active .MuiSvgIcon-root': {
                color: '#FF7757',
              },
            },
          },
        },
        MuiFormLabel: {
          styleOverrides: {
            root: {
              fontSize: '14px',
              fontFamily: 'Rubik, serif',
              color: '#767E86',
              textTransform: 'uppercase',
            }
          }
        },
        MuiMenuItem: {
          styleOverrides: {
            root: {
              fontSize: '14px',
            }
          }
        },
        MuiSelect: {
          styleOverrides: {
            root: {
              fontSize: '14px',
            }
          }
        },
        MuiRadio: {
          styleOverrides: {
            root: {
              padding: 0,
              paddingTop: '24px',
              color: '#ffffff',
              '&.Mui-checked': {
                color: '#FF7757',
              },
            },
          },
          defaultProps: {
            icon: (
              <span
                style={{
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  backgroundColor: '#ffffff',
                  display: 'inline-block',
                }}
              />
            ),
            checkedIcon: (
              <span
                style={{
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  backgroundColor: '#FF7757',
                  display: 'inline-block',
                }}
              />
            ),
          },
        },
        MuiRating: {
          styleOverrides: {
            iconFilled: {
              color: '#ffb400',
            },
            iconEmpty: {
              color: '#ccc',
            }
          }
        },
    },
});

theme = createTheme(theme, {
  typography: {
    h1: {
      ...theme.typography.h1,
      [theme.breakpoints.up('sm')]: { fontSize: '54px' },
      [theme.breakpoints.up('md')]: { fontSize: '64px' },
      [theme.breakpoints.up('lg')]: { fontSize: '84px' },
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
          ...theme.components.MuiFormLabel.styleOverrides.root,
          [theme.breakpoints.up('sm')]: { fontSize: '16px' },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          ...theme.components.MuiMenuItem.styleOverrides.root,
          [theme.breakpoints.up('sm')]: { fontSize: '16px' },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          ...theme.components.MuiSelect.styleOverrides.root,
          [theme.breakpoints.up('sm')]: { fontSize: '16px' },
          [theme.breakpoints.up('md')]: { fontSize: '18px' },
          [theme.breakpoints.up('lg')]: { fontSize: '20px' },
        },
      },
    },
  }
});
export default theme;