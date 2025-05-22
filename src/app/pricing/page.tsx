import Breadcrumbs from '../components/Breadcrumbs';
import SubPageTitle from '../components/SubPageTitle';

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
                    <SubPageTitle subtitle0={subtitle0} />
                </div>
            </div>
        </>
    );
}
