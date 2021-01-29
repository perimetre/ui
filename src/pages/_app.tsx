import { AppProps } from 'next/dist/next-server/lib/router/router';
import React from 'react';
import '../src/styles/globals.css';

/**
 * The next app wrapper
 *
 * @param props The wrapper props
 * @param props.Component The next.js component for the page
 * @param props.pageProps The next.js props given tot he component
 *
 * @returns next.js app wrapper
 */
const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => <Component {...pageProps} />;

export default MyApp;
