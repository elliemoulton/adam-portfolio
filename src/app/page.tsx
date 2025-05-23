import Link from 'next/link';
import Image from 'next/image';

import ImageCarousel from './components/ImageCarousel';
import HomepageCaseStudiesCards from './components/HomepageCaseStudiesCards';
import ContactForm from './components/ContactForm';

export default function Home() {
    return (
        <>
            <div className='dark-background hero-section'>
                <div className='hero-section-upper content'>
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
            <div className='light-background'>
                <div className='our-services-block content'>
                    <div className='text-block'>
                        <h2>Our Services</h2>
                        <h3>Web Design & Development</h3>
                        <p>
                            We create visually compelling, responsive websites
                            that not only look great but are built to perform.
                            From design to development, we ensure your site
                            aligns with your brand and meets your business
                            goals.
                        </p>
                        <Link href='/'>Learn More &nbsp; &rarr;</Link>
                        <h3>SEO & Content Marketing</h3>
                        <p>
                            Our SEO strategies are designed to increase your
                            online visibility and drive qualified users to your
                            site. We optimize your site&#39;s content,
                            structure, and technical elements to improve search
                            engine rankings.
                        </p>
                        <Link href='/'>Learn More &nbsp; &rarr;</Link>
                        <h3>Web Design & Development</h3>
                        <p>
                            We focus on enhancing the user experience by making
                            your website intuitive, easy to navigate, and
                            engaging. Our goal is to create seamless
                            interactions that keep users satisfied and encourage
                            conversions.
                        </p>
                        <Link href='/'>Learn More &nbsp; &rarr;</Link>
                    </div>
                </div>
            </div>
            <div className='dark-background'>
                <div className='case-studies-block content'>
                    <h2>
                        Learn more about how we work. Explore case studies from
                        some of our latest projects.
                    </h2>
                    <HomepageCaseStudiesCards />
                    <Link href='/'>View All Case Studies &nbsp; &rarr;</Link>
                </div>
                <div className=' about-block content'>
                    <h2>ABOUT MOULTON MARKETING</h2>
                    <div className='about-block-content'>
                        <div className='text-block'>
                            <p>
                                Moulton Marketing is a boutique SEO, UX, and web
                                design agency based in Amsterdam, dedicated to
                                helping businesses enhance their online presence
                                with smart, data-driven strategies.
                                <br />
                                <br />
                                Founded by Adam Moulton after a successful
                                career in the U.S. at some of the top
                                performance marketing agencies, the company
                                brings a global perspective to digital
                                marketing.
                                <br />
                                <br />
                                Adam&#39;s passion for travel and freelancing
                                inspired him to create an agency that blends
                                creativity, technical expertise, and
                                user-focused design to deliver impactful
                                results.
                            </p>
                        </div>
                        <Image
                            src='/imgs/profile.svg'
                            alt='Adam Moulton Profile'
                            width={509}
                            height={600}
                        />
                    </div>
                </div>
                <div className='content contact-block'>
                    <ContactForm />
                </div>
            </div>
        </>
    );
}
