import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Formulario from './Components/formulario';

//Creamos en Tema para la aplicacion customizando MUI
const theme = createMuiTheme({
    typography: {
        "textAlign": 'left',
    },
    palette: {
        primary: {
            main: '#1473e6',
            secondary: '#4b4b4b',
        },
        secondary: {
            main: '#747474',
            secondary: '#ffff',
        },
    }

})
function App() {
    return (
        <ThemeProvider theme={theme}>
            <Formulario/>
        </ThemeProvider>
    );
}

export default App;
