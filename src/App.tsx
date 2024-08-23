import { ThemeProvider } from 'styled-components';
import { Provider } from './contexts/Contexto';
import Principal from './pages/Principal';
import { mega } from './styles/theme';

function App() {
  const theme = mega
  return (
    <ThemeProvider theme={theme}>
      <Provider>
        <Principal />
      </Provider>
    </ThemeProvider>
  );
}

export default App;

