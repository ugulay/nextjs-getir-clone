import type { AppProps } from 'next/app';
import { useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ThemeProvider } from 'next-themes';
import { PersistGate } from 'redux-persist/integration/react'

import '../styles/globals.css';

import { Provider } from 'react-redux';
import { store, persistor } from '../store/store';

function MyApp({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps) {

  const [queryClient] = useState(() => new QueryClient());

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider defaultTheme="light" attribute="class">
          <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>

              <Component {...pageProps} />

            </Hydrate>
            <ReactQueryDevtools />
          </QueryClientProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default MyApp
