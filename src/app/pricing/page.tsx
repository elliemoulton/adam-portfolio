import Breadcrumbs from '../components/Breadcrumbs';

const subtitle0 = 'Pricing';
const subtitleLink0 = '/pricing';

export default function Pricing() {
    return (
        <>
            <div className='light-background sub-page pricing-page'>
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
