import Breadcrumbs from '@/app/components/Breadcrumbs';
import OurServicesSubpage from '../../components/OurServicesSubpage';


export default function UserExperiencePage() {
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
                                    label: 'User Experience (UX)',
                                    href: '/our-services/user-experience',
                                },
                            ]}
                        />
                        <OurServicesSubpage
                            title='User Experience (UX)'
                            subtitle='Our Process'
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
