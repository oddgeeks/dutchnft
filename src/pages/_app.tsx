import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { createGlobalStyle } from 'styled-components';
import store, { persistor } from '@/redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import '@/styles/globals.css';

const GlobalStyle = createGlobalStyle`
  :root {
    --active-color: black;
    --breadcrumb-color: rgba(0, 0, 0, 0.6);
    --border-color: rgba(0, 0, 0, .7);
  }

  [class="dark"] {
    --active-color: white;
    --breadcrumb-color: rgba(255, 255, 255, 0.6);
    --border-color: rgba(255, 255, 255, .7);
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyle />
        <ThemeProvider enableSystem={false} attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
