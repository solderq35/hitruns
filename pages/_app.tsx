// @ts-nocheck
import "bootstrap/dist/css/bootstrap.min.css"
import "../main.scss"
import React from "react"
import {Helmet} from "react-helmet";

import type { AppProps } from "next/app"

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
            <Helmet>
                <meta charSet="utf-8" />
                <title>HitRuns</title>
				<meta name="description" content="H3 Speedrun.com Mirror Site - Faster Loading Time, Mobile Friendly" />
            </Helmet>,
    <Component {...pageProps} />
)

export default MyApp
