import '../styles/global.css';

// 1. import `NextUIProvider` component
import { createTheme, NextUIProvider } from '@nextui-org/react';

// 2. Call `createTheme` and pass your custom values
// eslint-disable-next-line @typescript-eslint/naming-convention, no-underscore-dangle
const darkTheme = createTheme({ type: 'dark' });

/** @ts-ignore */
function MyApp({ Component, pageProps }) {
  return (
    // 2. Use at the root of your app
    <NextUIProvider theme={darkTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
