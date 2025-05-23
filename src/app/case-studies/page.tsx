import Breadcrumbs from '../components/Breadcrumbs';
import SubPageTitle from '../components/SubPageTitle';
import CaseStudiesPageCards from '../components/CaseStudiesPageCards';

const subtitle0 = 'Case Studies';
const subtitleLink0 = '/case-studies';

export default function CaseStudies() {
    return (
        <>
            <div className='light-background sub-page case-studies-page '>
                <div className='content'>
                    <Breadcrumbs
                        subtitle0={subtitle0}
                        subtitleLink0={subtitleLink0}
                    />
                    <SubPageTitle subtitle0={subtitle0} />
                    <CaseStudiesPageCards />
                </div>
            </div>
        </>
    );
}
