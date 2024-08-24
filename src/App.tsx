import { ThemeProvider } from 'styled-components';
import { Provider } from './contexts/Contexto';
import Principal from './pages/Principal';
import useTema from './hooks/useTema';

function App() {
  const {themeMegasena} = useTema();
  return (
      <ThemeProvider theme={themeMegasena}>
        <Provider>
          <Principal />
        </Provider>
      </ThemeProvider>
  );
}

export default App;

