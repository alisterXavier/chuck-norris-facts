import { client } from "@/apolloClient/apollo";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="flex-col bg-[#09011f] min-h-[90vh] w-[100vw] p-5 flex items-center justify-center">
        <Component {...pageProps} />
      </div>
    </ApolloProvider>
  );
}
