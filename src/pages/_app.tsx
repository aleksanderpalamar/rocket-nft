import type { AppProps } from "next/app";
import { Provider } from "urql";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { client, ssrCache } from "../lib/urql";

import { SidebarDrawerProvider } from "../context/SidebarDrawer";

function MyApp({ Component, pageProps }: AppProps) {
  if (pageProps.urqlState) {
    ssrCache.restoreData(pageProps.urqlState);
  }

  return (
    <ChakraProvider theme={theme}>
      <Provider value={client}>
      <SidebarDrawerProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </SidebarDrawerProvider>
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;
