import Image from 'next/image';
import Link from 'next/link';
import styles from '../CaseStudiesCards.module.css';
import { caseStudiesData } from '../data/casestudiesdata';

export default function CaseStudiesCards() {
    return (
        <>
            {[0, 1].map((rowIndex) => (
                <div className={styles.row} key={rowIndex}>
                    {caseStudiesData
                        .slice(rowIndex * 2, rowIndex * 2 + 2)
                        .map((study) => (
                            <Link
                                href={`/case-studies/${study.slug}`}
                                key={study.slug}
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
            ))}

            {/* old code... new code with [0,1].map makes it go through the studies 2x and make 2 rows of 2 */}
            {/* 
            <div className={styles.row}>
                {caseStudiesData.slice(0, 2).map((study) => (
                    <Link
                        href={`/case-studies/${study.slug}`}
                        key={study.slug}
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
                {caseStudiesData.slice(2, 4).map((study) => (
                    <Link
                        href={`/case-studies/${study.slug}`}
                        key={study.slug}
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
            </div> */}
        </>
    );
}
