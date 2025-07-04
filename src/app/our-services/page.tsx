import Breadcrumbs from '../components/Breadcrumbs';

const subtitle0 = 'Our Services';
const subtitleLink0 = '/case-studies';

export default function OurServices() {
    return (
        <>
            <div className='light-background sub-page our-services-page'>
                <div className='content'>
                    <Breadcrumbs
                        subtitle0={subtitle0}
                        subtitleLink0={subtitleLink0}
                    />
                    <h1>{subtitle0}</h1>
                    <hr />
                </div>
            </div>
        </>
    );
}
