//Meterial UI
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

//Fonts
import '@fontsource/roboto';

//Components
import Form from './Components/Form.js';

//Redux
import { Provider } from 'react-redux';
import store from './redux/store.js';

//Creamos en Tema para la aplicacion customizando MUI
const theme = createTheme({
    typography: {
        "textAlign": 'left',
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
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Form />
            </ThemeProvider>
        </Provider>
    );
}

export default App;
