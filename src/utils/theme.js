import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
  },
  typography: {
    fontFamily: '"Poppins", Arial, Helvetica, sans-serif',
  }
});

export default theme;
