import Image from 'next/image';

const cards = [
        {
        src: '/imgs/dark-processcoffee.svg',
        width: 272,
        height: 73,
        alt: 'Process Coffee Logo',
        title: 'Process Coffee Roasters',
        description:
            'Web Design & Development',
    },
    {
        src: '/imgs/dark-sofi.svg',
        width: 272,
        height: 73,
        alt: 'Sofi Logo',
        title: 'Sofi',
        description:
            'SEO & Content Marketing',
    },
    {
        src: '/imgs/dark-ups.svg',
        width: 144,
        height: 169,
        alt: 'UPS Logo',
        title: 'UPS',
        description:
            'User Experience (UX)',
    },
        {
        src: '/imgs/dark-studiokohler.svg',
        width: 144,
        height: 169,
        alt: 'Studio Kohler Logo',
        title: 'Studio Kohler',
        description:
            'Web Design & UX',
    },
];

export default function CaseStudiesCard() {
    return (
        <>
            {[...cards].map((card, index) => (
                <div key={index}>
                    <div className='image container'>
                        <Image
                            src={card.src}
                            width={card.width}
                            height={card.height}
                            alt={card.alt}
                            priority
                        />
                    </div>
                    <h2>{card.title}</h2>
                    <p>{card.description}</p>
                </div>
            ))}
        </>
    );
}
