import '../styles/global.css';

import type { ColorScheme } from '@mantine/core';
import { Box, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { getCookie, setCookies } from 'cookies-next';
import type { GetServerSidePropsContext } from 'next';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { ToastProvider } from 'react-toast-notifications';

// Now you can access your environment variables using process.env.MY_VARIABLE

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    props.colorScheme
  );

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme =
      value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    setCookies('mantine-color-scheme', nextColorScheme, {
      maxAge: 60 * 60 * 24 * 30,
    });
  };

  return (
    <>
      <Box>
        <ColorSchemeProvider
          colorScheme={colorScheme}
          toggleColorScheme={toggleColorScheme}
        >
          <MantineProvider
            theme={{ colorScheme }}
            withGlobalStyles
            withNormalizeCSS
          >
            <ToastProvider>
              <Component {...pageProps} />
            </ToastProvider>
          </MantineProvider>
        </ColorSchemeProvider>
      </Box>
    </>
  );
}

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  colorScheme: getCookie('mantine-color-scheme', ctx) || 'light',
});
