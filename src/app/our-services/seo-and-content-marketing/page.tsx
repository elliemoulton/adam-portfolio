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
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
