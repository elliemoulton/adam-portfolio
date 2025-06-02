import Image from 'next/image';
import Link from 'next/link';

const cards = [
    {
        src: '/imgs/case-studies-page/ups.svg',
        alt: 'UPS Logo',
        title: 'UPS Supply Chain Solutions',
        subtitle: 'User Experience (UX)',
        description:
            'We helped UPS improve the user experience of their supply chain shipping quote process with a quantitative and qualitative UX analysis, including high fidelity mockups to showcase our recommendations.',
    },
    {
        src: '/imgs/case-studies-page/sofi.svg',
        alt: 'SoFi Logo',
        title: 'SoFi',
        subtitle: 'SEO & Content Marketing',
        description:
            'Lorem ipsum dolor sit amet consectetur. Odio pulvinar vel sapien nunc amet et aenean pellentesque. Nisl ipsum libero orci et faucibus malesuada platea proin. Viverra leo ultrices eleifend ipsum scelerisque.',
    },
    {
        src: '/imgs/case-studies-page/studio-kohler.svg',
        alt: 'Studio KOHLER Logo',
        title: 'Studio KOHLER',
        subtitle: 'Web Design & UX',
        description:
            'We redesigned Studio KOHLER\'s homepage to improve user flows and encourage new and returning users to more efficiently achieve their goals. A follow-up UX audit was conducted to improve the product saving experience.',
    },
    {
        src: '/imgs/case-studies-page/process-coffee.svg',
        alt: 'Process Coffee Roasters Logo',
        title: 'Process Coffee Roasters',
        subtitle: 'Web Design & Development',
        description:
            'We designed and developed a brand new website for Process Coffee Roasters, a small-scale specialty coffee roaster based in Santa Monica, CA. ',
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
                                <Link href='/' className='read-more'>
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
