import Link from 'next/link';

export default function Footer() {
    return (
        <>
            <footer className='light-background'>
                <div className='footer content'>
                    <div className='footer-upper'>
                        <div>
                            <p style={{ fontWeight: '500' }}>
                                Moulton Marketing B.V.
                            </p>
                        </div>
                        <div>
                            <Link href='/our-services'>
                                <p className='subtitle'>Our Services</p>
                            </Link>
                            <ul>
                                <li>
                                    <Link href='/our-services/web-design-and-development'>
                                        Web Design & Development
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/our-services/seo-and-content-marketing'>
                                        SEO & Content Marketing
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/our-services/user-experience'>
                                        User Experience (UX)
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className='subtitle'>Resources</p>
                            <ul>
                                <li>
                                    <Link href='/pricing'>Pricing</Link>
                                </li>
                                <li>
                                    <Link href='/case-studies'>
                                        Case Studies
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/about'>About</Link>
                                </li>
                                <li>
                                    <Link href='/'>Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='footer-lower'>
                        <p>&#169; Moulton Marketing B.V.</p>
                        <div className='copyright-links'>
                            <p>
                                <Link href='/'>Privacy Policy</Link>
                            </p>
                            <p>
                                <Link href='/'>Cookie Preferences</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
