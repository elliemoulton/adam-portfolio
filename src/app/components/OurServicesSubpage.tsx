import styles from '../styles/OurServicesSubpage.module.css';
import Image from 'next/image';

const techStackImages = [
    { src: '/imgs/tech-stack/figma.svg', alt: 'Figma' },
    { src: '/imgs/tech-stack/react.svg', alt: 'React' },
    { src: '/imgs/tech-stack/nextjs.svg', alt: 'Next.js' },
    { src: '/imgs/tech-stack/elementor.svg', alt: 'Elementor' },
    { src: '/imgs/tech-stack/wordpress.svg', alt: 'WordPress' },
    { src: '/imgs/tech-stack/shopify.svg', alt: 'Shopify' },
    { src: '/imgs/tech-stack/squarespace.svg', alt: 'Squarespace' },
];

interface OurServicesSubpageProps {
    title: string;
    subtitle: string;
    services: {
        title: string;
        description: string;
    }[];
}

export default function OurServicesSubpage(props: OurServicesSubpageProps) {
    return (
        <>
            <div className={styles.ourServicesSubpage}>
                <div className='light-background'>
                    <div className='content'>
                        <h1>{props.title}</h1>
                        <h2>{props.subtitle}</h2>
                        <div className={styles.services}>
                            {[...props.services].map((service, index) => (
                                <div key={index} className={styles.service}>
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                </div>
                            ))}
                            <Image
                                src='/imgs/mvector/blue.svg'
                                alt='Vector Illustration'
                                width={206}
                                height={571}
                                className={styles.blueVector1}
                            />
                            <Image
                                src='/imgs/m-vectors/blue.svg'
                                alt='Vector Illustration'
                                width={206}
                                height={571}
                                className={styles.blueVector2}
                            />
                        </div>
                        <div className={styles.techStack}>
                            <h2>Our Tech Stack</h2>
                            <div className={styles.techStackImages}>
                                {techStackImages.map((image, index) => (
                                    <Image
                                        key={index}
                                        src={image.src}
                                        alt={image.alt}
                                        width={0}
                                        height={90}
                                        className={styles.techStackImage}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='dark-background'>
                    <div className={styles.caseStudies}>
                        <h2 className='content'>Case Studies</h2>
                        <Image
                            src='/imgs/m-vectors/white.svg'
                            alt='Vector Illustration'
                            width={0}
                            height={100}
                            className={styles.whiteVector}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
