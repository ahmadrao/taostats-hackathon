import '../app/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import Nav from "@/components/Nav";

export const metadata = {
  title: "Taostats",
  description: "Taostats",
};



function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {

  return (
    <SessionProvider session={session}>
        <Nav />
        <Component {...pageProps} />
    
    </SessionProvider>


  )
}

export default App

