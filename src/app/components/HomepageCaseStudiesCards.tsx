import Image from 'next/image';
import Link from 'next/link';
import styles from '../CaseStudiesCards.module.css';
import { caseStudiesData } from '../data/casestudiesdata';

export default function CaseStudiesCards() {
    return (
        <>
            <div className={styles.row}>
                {[...caseStudiesData].slice(0, 2).map((study, index) => (
                    <Link
                        href={`/case-studies/${study.slug}`}
                        key={index}
                        className={styles.card}
                    >
                        <div>
                            <Image
                                src={study.homepageImage.src}
                                width={study.homepageImage.width}
                                height={study.homepageImage.height}
                                alt={study.homepageImage.alt}
                                priority
                            />
                        </div>
                        <div className={styles.textWrapper}>
                            <h3>{study.title}</h3>
                            <p>{study.subtitle}</p>
                        </div>
                    </Link>
                ))}
            </div>
            <div className={styles.row}>
                {[...caseStudiesData].slice(2, 4).map((study, index) => (
                    <Link
                        href={`/case-studies/${study.slug}`}
                        key={index}
                        className={styles.card}
                    >
                        <div>
                            <Image
                                src={study.homepageImage.src}
                                width={study.homepageImage.width}
                                height={study.homepageImage.height}
                                alt={study.homepageImage.alt}
                                priority
                            />
                        </div>
                        <div className={styles.textWrapper}>
                            <h3>{study.title}</h3>
                            <p>{study.subtitle}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}
