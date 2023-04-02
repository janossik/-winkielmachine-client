import { ThemeProvider } from 'styled-components';
import GlobalStyle from '~/theme/GlobalStyle';
import { theme } from '~/theme/theme';
import { RouletteProvider } from '~/hooks/useRoulette';

const MainProvider = ({ children }: { children: React.ReactElement }) => {
  return (
    <RouletteProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </RouletteProvider>
  );
};

export default MainProvider;
