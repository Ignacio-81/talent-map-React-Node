import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

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
        },
    }

})
function App() {
    return (
        <ThemeProvider theme={theme}>
            <div >
                <header >
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
       </ThemeProvider>
    );
}

export default App;
