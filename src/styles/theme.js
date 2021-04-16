import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ED2B2E'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: red.A400
    },
  },
});

export default theme;
