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

import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface HCNavBarProps {
    trigger: boolean;
}

interface HCNavbarItemProps {
    label: string;
    link: string;
}

interface HCNavBarTriggerProps {
    onClick: (() => React.MouseEventHandler | void);
    trigger: boolean;
    icons?: Array<React.ReactElement | string>;
}

const HCNavbar: React.FC<HCNavBarProps> = ({ trigger, children }) => {
    return (
        <nav className={`hc-navbar${ trigger ? ' open' : '' }`}>
            <ul>
                { children }
            </ul>
        </nav>
    );
};

const HCNavbarItem: React.FC<HCNavbarItemProps> = ({ label, link, children }) => {
    const router = useRouter();
    const isActive = router.pathname === link;
    return (
        <li>
            <Link href={ link } passHref>
                <span className={`hc-navbar__item${ isActive ? ' active' : '' }`}>{ label || children }</span>
            </Link>
        </li>
    );
};

const HCNavbarTrigger: React.FC<HCNavBarTriggerProps> = ({ onClick, trigger, icons }) => {
    return (
        <button className="hc-js-navbar__trigger material-icons" onClick={ onClick }>
            { trigger ? (icons ? icons[1] : 'close') : (icons ? icons[0] : 'menu') }
        </button>
    );
};

export { HCNavbar, HCNavbarItem, HCNavbarTrigger };