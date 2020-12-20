import { ChakraProvider } from "@chakra-ui/react";
import UserAuthProvider from "@/lib/context/User/Provider";
import { customTheme } from "@/styles/theme";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <UserAuthProvider>
        <Component {...pageProps} />
      </UserAuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;
