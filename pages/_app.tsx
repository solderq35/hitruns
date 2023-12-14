// @ts-nocheck
import "bootstrap/dist/css/bootstrap.min.css"
import "../main.scss"
import React from "react"
import type { AppProps } from "next/app"
import Head from "next/head"

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Head>
                <title>HitRuns</title>
                <meta
                    name="description"
                    content="Speedrun.com Clone (Hitman 3)"
                />
                <meta
                    property="og:image"
                    content="https://github.com/solderq35/hitruns/blob/source3/public/favicon/favicon.png?raw=true"
                />
            </Head>
            <Component {...pageProps} />
        </div>
    )
}

export default MyApp
