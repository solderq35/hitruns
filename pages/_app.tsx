// @ts-nocheck
import "bootstrap/dist/css/bootstrap.min.css"
import "../main.scss"
import React from "react"
import type { AppProps } from "next/app"
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>HitRuns</title>
        <meta name="description" content="H3 Speedrun.com Mirror Site- Faster Load Times, More Mobile Friendly" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp
