import Breadcrumbs from '../components/Breadcrumbs';

export default function About() {
    return (
        <>
            <div className='light-background subpage about-page'>
                <div className='content'>
                    <Breadcrumbs items={[{ label: 'About', href: '/about' }]} />
                    <h1>About</h1>
                    <hr />
                </div>
            </div>
        </>
    );
}
