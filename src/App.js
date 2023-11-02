import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import '@fontsource/roboto';
import Form from './Components/Form.js';

//Creamos en Tema para la aplicacion customizando MUI
const theme = createMuiTheme({
    typography: {
        "textAlign": 'left',
        /* htmlFontSize: 15, */
    },
    palette: {
        primary: {
            main: '#0a4894fe',
            secondary: '#4b4b4b',
        },
        secondary: {
            main: '#747474',
            secondary: '#ffff',
        },
        textColor: {
            text1: '938f8f',
            text2: 'white',
        }
    }

})
function App() {
    return (
        <ThemeProvider theme={theme}>
            <Form/>
        </ThemeProvider>
    );
}

export default App;
