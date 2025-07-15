import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
      contrastText: '#000000',
    },
    secondary: {
      main: '#FF7757',
    },
    text: {
      primary: '#172432',     
      secondary: '#172432',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
  },
});
export default theme;