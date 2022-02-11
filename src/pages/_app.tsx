import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import { SidebarDrawerProvider } from "../context/SidebarDrawer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarDrawerProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </SidebarDrawerProvider>
    </ChakraProvider>
  );
}

export default MyApp;
