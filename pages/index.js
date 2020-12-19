import Head from "next/head";
import { useUserAuthContext } from "../lib/context/User";
import styles from "../styles/Home.module.css";

export default function Home() {
  const auth = useUserAuthContext();

  const signInWithGithub = () => auth.signInWithGithub();

  const signOut = () => auth.signOut();

  console.log(auth.user, "user");

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href='https://nextjs.org'>Fast Feedback!</a>
        </h1>

        <button onClick={signInWithGithub}>Sign In with github</button>
        {auth.user && <button onClick={signOut}>Sign out</button>}
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{" "}
          <img src='/vercel.svg' alt='Vercel Logo' className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
