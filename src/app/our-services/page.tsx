import Breadcrumbs from '../components/Breadcrumbs';
import Link from 'next/link';

export default function OurServices() {
    return (
        <>
            <div className='light-background subpage our-services-page'>
                <div className='content'>
                    <Breadcrumbs
                        items={[
                            { label: 'Our Services', href: '/our-services' },
                        ]}
                    />
                    <h1>Our Services</h1>
                    <hr />
                    <Link href='our-services/web-design-and-development'>
                        <h2>Web Design and Development</h2>
                    </Link>
                </div>
            </div>
        </>
    );
}
