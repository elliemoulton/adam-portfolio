import Breadcrumbs from '../components/Breadcrumbs';

const subtitle0 = 'About';
const subtitleLink0 = '/about';

export default function About() {
    return (
        <>
            <div className='light-background sub-page about-page'>
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
