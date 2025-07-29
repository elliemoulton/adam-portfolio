import Breadcrumbs from '@/app/components/Breadcrumbs';
import OurServicesSubpage from '../../components/OurServicesSubpage';

export default function SeoAndContentMarketingPage() {
    return (
        <>
            <div className='our-services-subpage'>
                <div className='light-background'>
                    <div className='content'>
                        <Breadcrumbs
                            items={[
                                {
                                    label: 'Our Services',
                                    href: '/our-services',
                                },
                                {
                                    label: 'SEO and Content Marketing',
                                    href: '/our-services/seo-and-content-marketing',
                                },
                            ]}
                        />
                        <OurServicesSubpage
                            title='SEO and Content Marketing'
                            subtitle='Our Process'
                            services={[
                                {
                                    title: 'Brand Alignment',
                                    description:
                                        'We work with you to understand your goals and plan the best approach for your website.',
                                },
                                {
                                    title: 'Wireframing',
                                    description:
                                        'Our team creates visually appealing and user-friendly designs tailored to your brand.',
                                },
                                {
                                    title: 'High Fidelity Prototyping',
                                    description:
                                        'We build fast, responsive, and accessible websites using modern technologies.',
                                },
                                {
                                    title: 'Development',
                                    description:
                                        'After launch, we provide ongoing support and maintenance to ensure your site’s success.',
                                },
                            ]}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
