// import Image from "next/image";

import Link from 'next/link';

export default function Home() {
    return (
        <>
            <div className='dark-background hero-section'>
                <div className='left-column'>
                    <h1>Get More From Your Website</h1>
                    <p>
                        Grow your online presence, attract new users, convert
                        customers.
                    </p>
                </div>
                <div className='right-column'>
                    <p>
                        Collaborating with brands of all sizes around the world,
                        based in Amsterdam. Learn how we can help manage your
                        website, whether it&#39;s a fresh design or improving
                        user acquisition. Contact us for more information.
                    </p>
                    <div>
                        <Link href='/'>CONTACT US</Link>
                        <Link href='/'>View Case Studies &rarr;</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
