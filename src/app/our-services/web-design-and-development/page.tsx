import Breadcrumbs from '@/app/components/Breadcrumbs';
import OurServicesSubpage from '../../components/OurServicesSubpage';


export default function WebDesignAndDevelopmentPage() {
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
                                    label: 'Web Design and Development',
                                    href: '/our-services/web-design-and-development',
                                },
                            ]}
                        />
                        <OurServicesSubpage
                            title='Web Design and Development'
                            subtitle='Our Process'
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
