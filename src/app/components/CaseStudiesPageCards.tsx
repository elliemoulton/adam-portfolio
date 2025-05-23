import Image from 'next/image';
import Link from 'next/link';
const cards = [
    {
        src: '/imgs/casestudiespage-ups.svg',
        width: 865,
        height: 452,
        alt: 'UPS Logo',
        title: 'UPS Supply Chain Solutions',
        subtitle: 'User Experience (UX)',
        description:
            'We helped UPS improve the user experience of their supply chain shipping quote process with a quantitative and qualitative UX analysis, including high fidelity mockups to showcase our recommendations.',
    },
    {
        src: '/imgs/casestudiespage-ups.svg',
        width: 865,
        height: 452,
        alt: 'UPS Logo',
        title: 'UPS Supply Chain Solutions',
        subtitle: 'User Experience (UX)',
        description:
            'We helped UPS improve the user experience of their supply chain shipping quote process with a quantitative and qualitative UX analysis, including high fidelity mockups to showcase our recommendations.',
    },
];

export default function CaseStudiesPageCards() {
    return (
        <>
            <div className='content case-studies-page'>
                {[...cards].map((card, index) => (
                    <div key={index} className='cards-wrapper'>
                        <div>
                            <Image
                                src={card.src}
                                width={1320}
                                height={524}
                                alt={card.alt}
                                priority
                            />
                        </div>
                        <div className='text-wrapper'>
                            <div className='titles'>
                                <h2>{card.title}</h2>
                                <h3>{card.subtitle}</h3>
                            </div>
                            <div className='description'>
                                <p>{card.description}</p>
                                <Link href='/'>Read More &nbsp; &rarr;</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
