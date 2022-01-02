import React from 'react';
import type { AppProps } from 'next/app';

import '../scss/main.scss';

function AppMain({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default AppMain;