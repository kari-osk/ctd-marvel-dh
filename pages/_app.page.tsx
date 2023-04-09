import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import LayoutGeneral from "dh-marvel/components/layouts/layout-general";
import { theme } from "dh-marvel/styles/material-theme";
import { CheckoutContextProvider } from "context/checkout.context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CheckoutContextProvider>
        <CssBaseline />
        <LayoutGeneral>
          <Component {...pageProps} />
        </LayoutGeneral>
        <style jsx global>{`
          /* Other global styles such as 'html, body' etc... */

          #__next {
            height: 100%;
          }
        `}</style>
      </CheckoutContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
