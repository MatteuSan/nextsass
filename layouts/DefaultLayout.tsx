/*
 *  Copyright (c) 2022 Matteu
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in all
 *  copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *  SOFTWARE.
 */

import React, { useState } from 'react';
import Head from 'next/head';
import { MdClose, MdMenu } from 'react-icons/md';

import {
    HCFooter,
    HCHeader,
    HCHeaderActions,
    HCHeaderBrand,
    HCNavbar,
    HCNavbarItem,
    HCNavbarTrigger
} from '../components';
import { site } from '../constants/site';
// import { NextRouter, useRouter } from 'next/router';

interface DefaultLayoutProps {
    title: string;
    description?: string;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ title, description, children }) => {

    // const router: NextRouter = useRouter();
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    return (
        <>
            <Head>
                <title>{ title } - { site.name } | { site.tagline }</title>
                <meta name="description" content={ description } />

                <link rel="apple-touch-icon" sizes="180x180" href={ `${ site.url }/img/favicon.png` } />
                <link rel="icon" type="img/png" sizes="32x32" href={ `${ site.url }/img/favicon.png` } />
                <link rel="icon" type="img/png" sizes="16x16" href={ `${ site.url }/img/favicon.png` } />

                <meta property="og:title" content={ `${ title } - ${ site.name }` } />
                <meta property="og:description" content={ description || site.tagline } />
                <meta property="og:type" content="website" />
                <meta property="og:image" content={ `${ site.url }/img/favicon.png` } />
                <meta property="og:url" content={ site.url } />

                <meta name="twitter:title" content={ `${ title } - ${ site.name }` } />
                <meta name="twitter:description"
                    content={ description || site.tagline } />
                <meta name="twitter:image" content={ `${ site.url }/img/favicon.png` } />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content={ site.twitter } />

                <meta name="theme-color" content={ site.themeColor } />
            </Head>
            <HCHeader>
                <HCHeaderBrand>{ site.name }</HCHeaderBrand>
                <HCHeaderActions>
                    <HCNavbarTrigger
                        onClick={ () => setIsNavbarOpen(!isNavbarOpen) }
                        trigger={ isNavbarOpen }
                        icons={ [<MdMenu key={ null } />, <MdClose key={ null } />] }
                    />
                    <HCNavbar trigger={ isNavbarOpen }>
                        <HCNavbarItem label="Home" link="/" />
                        <HCNavbarItem label="About" link="/about" />
                    </HCNavbar>
                </HCHeaderActions>
            </HCHeader>
            <main className="content-wrap">
                { children }
            </main>
            <HCFooter title={ site.name } version={ site.version } />
        </>
    );
};

export default DefaultLayout;