'use client';

import Head from 'next/head';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    return (
        <>
            <Head>
                <link
                    rel='preload'
                    href='/fonts/PPNeueMontreal-Book.woff2'
                    as='font'
                    type='font/woff2'
                    crossOrigin='anonymous'
                />
            </Head>
            <header className={isHomePage ? 'dark-background' : 'light-background'}>
                <nav className='content'>
                    <p>
                        <Link href='/' className='logo'>
                            Moulton / Marketing
                        </Link>
                    </p>
                    <ul>
                        <li>
                            <Link href='/our-services'>Our Services</Link>
                        </li>
                        <li>
                            <Link href='/pricing'>Pricing</Link>
                        </li>
                        <li>
                            <Link href='/case-studies'>Case Studies</Link>
                        </li>
                        <li>
                            <Link href='/about'>About</Link>
                        </li>
                        <li>
                            <Link href='/' className='contact-cta'>
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
