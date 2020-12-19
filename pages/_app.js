import "../styles/globals.css";
import UserAuthProvider from "../lib/context/User/Provider";

function MyApp({ Component, pageProps }) {
  return (
    <UserAuthProvider>
      <Component {...pageProps} />
    </UserAuthProvider>
  );
}

export default MyApp;
