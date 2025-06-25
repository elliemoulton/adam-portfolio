// Update the import path if the file is actually located elsewhere, for example:
import { caseStudiesData } from '../../data/casestudiesdata';

import Image from 'next/image';
import { notFound } from 'next/navigation';

// This function runs at build time and tells Next.js which dynamic routes
// to pre-render (i.e., generate static HTML for each project page).
// This makes your site faster and SEO-friendly.
export async function generateStaticParams() {
    return caseStudiesData.map((study) => ({
        slug: study.slug, // Each slug becomes a valid route: /case-studies/[slug]
    }));
}

export default function CaseStudyPage({
    params,
}: {
    params: { slug: string };
}) {
    // Find the project in your data that matches the current slug
    const caseStudy = caseStudiesData.find(
        (study) => study.slug === params.slug
    );
    // If not found, return the 404 page
    if (!caseStudy) return notFound();

    return (
        <>
            <div className='light-background'>
                <div className='content'>
                    <h1>{caseStudy.title}</h1>
                    <p>{caseStudy.subtitle}</p>
                    <Image
                        src={caseStudy.src}
                        alt={caseStudy.alt}
                        width={400}
                        height={200}
                    />
                </div>
            </div>
        </>
    );
}
