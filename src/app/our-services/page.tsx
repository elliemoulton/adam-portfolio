import Breadcrumbs from '../components/Breadcrumbs';

export default function OurServices() {
    return (
        <>
            <div className='light-background sub-page our-services-page'>
                <div className='content'>
                    <Breadcrumbs
                        items={[
                            { label: 'Our Services', href: '/our-services' },
                        ]}
                    />
                    <h1>Our Services</h1>
                    <hr />
                </div>
            </div>
        </>
    );
}
