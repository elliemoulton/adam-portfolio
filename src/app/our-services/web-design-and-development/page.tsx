import Breadcrumbs from '@/app/components/Breadcrumbs';

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
                        <h1>Web Design and Development</h1>
                        <h2>Our Process</h2>
                    </div>
                </div>
            </div>
        </>
    );
}
