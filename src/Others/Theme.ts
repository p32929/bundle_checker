import { createTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
export const theme = createTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
    },
    overrides: {
        MuiTextField: {
            root: {
                '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button':
                {
                    display: 'none',
                },
                '& input[type=number]': {
                    MozAppearance: 'textfield',
                },
            }
        }
    }
});
