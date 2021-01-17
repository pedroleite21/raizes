import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    text: {
      primary: '#fff',
    },
    primary: {
      main: '#E0A31B',
    },
    secondary: {
      main: '#C8F4DC',
    },
    background: {
      default: '#212121',
      paper: '#303030',
    },
  },
  typography: {
    fontFamily: '"Poppins", Arial, Helvetica, sans-serif',
  },
});

export default theme;
