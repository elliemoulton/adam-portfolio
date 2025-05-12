import Link from 'next/link';

import ImageCarousel from './components/ImageCarousel';

export default function Home() {
    return (
        <>
            <div className='dark-background hero-section'>
                <div className='hero-section-upper'>
                    <div className='left-column'>
                        <h1>Get More From Your Website</h1>
                        <p>
                            Grow your online presence, attract new users,
                            convert customers.
                        </p>
                    </div>
                    <div className='right-column'>
                        <p className='p-small-bold'>
                            Collaborating with brands of all sizes around the
                            world, based in Amsterdam. Learn how we can help
                            manage your website, whether it&#39;s a fresh design
                            or improving user acquisition. Contact us for more
                            information.
                        </p>
                        <div className='cta-links'>
                            <Link href='/' className='contact-cta'>
                                CONTACT US
                            </Link>
                            <Link href='/' className='case-studies-cta'>
                                View Case Studies &nbsp; &rarr;
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='hero-section-lower'>
                    <ImageCarousel />
                </div>
            </div>
        </>
    );
}
