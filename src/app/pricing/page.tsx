import Breadcrumbs from '../components/Breadcrumbs';

export default function Pricing() {
    return (
        <>
            <div className='light-background sub-page pricing-page'>
                <div className='content'>
                    <Breadcrumbs
                        items={[
                            { label: 'Pricing', href: '/pricing' },
                        ]}
                    />
                    <h1>Pricing</h1>
                    <hr />
                </div>
            </div>
        </>
    );
}
