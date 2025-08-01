'use client';

import Image from 'next/image';
import styles from '../styles/ImageCarousel.module.css';

const logos = [
    {
        src: '/imgs/carousel-logos/sofi.svg',
        width: 272,
        height: 73,
        alt: 'Sofi Logo',
    },
    {
        src: '/imgs/carousel-logos/ups.svg',
        width: 144,
        height: 169,
        alt: 'UPS Logo',
    },
    {
        src: '/imgs/carousel-logos/marriott.svg',
        width: 232,
        height: 207,
        alt: 'Marriott Logo',
    },
    {
        src: '/imgs/carousel-logos/norwegian.svg',
        width: 365,
        height: 145,
        alt: 'Norwegian Cruise Line Logo',
    },
    {
        src: '/imgs/carousel-logos/american-airlines.svg',
        width: 345,
        height: 133,
        alt: 'American Airlines Logo',
    },
    {
        src: '/imgs/carousel-logos/studio-kohler.svg',
        width: 480,
        height: 59,
        alt: 'Studio Kohler Logo',
    },
];

export default function ImageCarousel() {
    return (
        // Outer wrapper that hides the overflow, so the scrolling content stays within bounds
        <div className={styles.carouselWrapper}>
            {/* The actual moving track, which will scroll to the left in a loop */}
            <div className={styles.carouselTrack}>
                {/* We duplicate the logo set to allow smooth looping of content */}
                {[...logos, ...logos].map((logo, index) => (
                    <div className={styles.carouselItem} key={index}>
                        <Image
                            src={logo.src}
                            width={logo.width}
                            height={logo.height}
                            alt={logo.alt}
                            priority
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
