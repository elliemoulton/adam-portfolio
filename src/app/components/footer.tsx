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
                            <p className='subtitle'>Our Services</p>
                            <ul>
                                <li>
                                    <Link href='/'>
                                        Web Design & Development
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/'>
                                        SEO & Content Marketing
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/'>User Experience (UX)</Link>
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
                                    <Link href='/case-studies'>Case Studies</Link>
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
