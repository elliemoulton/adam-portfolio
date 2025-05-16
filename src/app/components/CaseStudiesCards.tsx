import Image from 'next/image';
import styles from '../CaseStudiesCards.module.css';

const cards = [
    {
        src: '/imgs/casestudies-processcoffee.svg',
        width: 865,
        height: 452,
        alt: 'Process Coffee Logo',
        title: 'Process Coffee Roasters',
        description: 'Web Design & Development',
    },
    {
        src: '/imgs/casestudies-sofi.svg',
        width: 424,
        height: 226,
        alt: 'Sofi Logo',
        title: 'SoFi',
        description: 'SEO & Content Marketing',
    },
    {
        src: '/imgs/casestudies-ups.svg',

        width: 424,
        height: 226,
        alt: 'UPS Logo',
        title: 'UPS',
        description: 'User Experience (UX)',
    },
    {
        src: '/imgs/casestudies-studiokohler.svg',
        width: 865,
        height: 452,
        alt: 'Studio Kohler Logo',
        title: 'Studio KOHLER',
        description: 'Web Design & UX',
    },
];

export default function CaseStudiesCards() {
    return (
        <>
            <div className={styles.row}>
                {[...cards].slice(0, 2).map((card, index) => (
                    <div key={index} className={styles.card}>
                        <div>
                            <Image
                                src={card.src}
                                width={card.width}
                                height={card.height}
                                alt={card.alt}
                                priority
                            />
                        </div>
                        <div className={styles.textWrapper}>
                            <h3>{card.title}</h3>
                            <p>{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.row}>
                {[...cards].slice(2, 4).map((card, index) => (
                    <div key={index} className={styles.card}>
                        <div>
                            <Image
                                src={card.src}
                                width={card.width}
                                height={card.height}
                                alt={card.alt}
                                priority
                            />
                        </div>
                        <div className={styles.textWrapper}>
                            <h3>{card.title}</h3>
                            <p>{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
