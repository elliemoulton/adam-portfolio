import Image from 'next/image';
import Link from 'next/link';

import { caseStudiesData } from '../data/casestudiesdata';

export default function CaseStudiesPageCards() {
    return (
        <>
            <div className='content case-studies-page'>
                {[...caseStudiesData].map((study, index) => (
                    <div key={index} className='cards-wrapper'>
                        <div>
                            <Image
                                src={study.caseStudiesImage.src}
                                width={1320}
                                height={524}
                                alt={study.caseStudiesImage.alt}
                                priority
                            />
                        </div>
                        <div className='text-wrapper'>
                            <div className='titles'>
                                <h2>{study.title}</h2>
                                <h3>{study.subtitle}</h3>
                            </div>
                            <div className='description'>
                                <p>{study.description}</p>
                                <Link
                                    href={`/case-studies/${study.slug}`}
                                    className='read-more'
                                >
                                    Read More &nbsp; &rarr;
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
