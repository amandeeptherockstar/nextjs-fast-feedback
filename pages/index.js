import Head from "next/head";
import { Button } from "@chakra-ui/react";
import Logo from "@/styles/Logo";
import { useUserAuthContext } from "@/lib/context/User";
import { Github, Logout } from "@/utils/icons";

export default function Home() {
  const auth = useUserAuthContext();

  const signInWithGithub = () => auth.signInWithGithub();

  const signOut = () => auth.signOut();

  console.log(auth.user, "user");

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='w-screen h-screen flex items-center justify-center'>
        <div className='self-center'>
          <div className='logo my-4'>
            <Logo />
          </div>
          <Button
            onClick={signInWithGithub}
            leftIcon={
              <div className='flex items-center'>
                <Github />
              </div>
            }
            className='mr-2'
          >
            Continue with Github
          </Button>
          {auth.user && (
            <Button
              leftIcon={
                <div className='flex items-center'>
                  <Logout />
                </div>
              }
              onClick={signOut}
            >
              Sign out
            </Button>
          )}
        </div>
      </main>
    </div>
  );
}
