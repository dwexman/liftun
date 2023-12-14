import { Route, Routes } from 'react-router-dom';
import { HomePage} from "./pages/HomePage";
import { CrearAccion} from "./components/CrearAccion";
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';

const theme = createTheme({
    palette: {
      background: {
        default: 'white',
      },
    },
  });

    const App = () => {
        return (
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Routes>
              <Route path="/" element={<CrearAccion/>} />
              <Route path="/cerrar" element={<HomePage />} />
            </Routes>
          </ThemeProvider>
        );
      };

export default App;
