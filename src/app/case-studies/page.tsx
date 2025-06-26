import Breadcrumbs from '../components/Breadcrumbs';
import CaseStudiesPageCards from '../components/CaseStudiesPageCards';
import SubPageContactFormBlock from '../components/SubPageContactFormBlock';

const subtitle0 = 'Case Studies';
const subtitleLink0 = '/case-studies';

export default function CaseStudiesPage() {
    return (
        <>
            <div className='light-background sub-page'>
                <div className='content'>
                    <Breadcrumbs
                        subtitle0={subtitle0}
                        subtitleLink0={subtitleLink0}
                    />
                    <h1>{subtitle0}</h1>
                    <hr />
                    <CaseStudiesPageCards />
                </div>
            </div>
            <SubPageContactFormBlock />
        </>
    );
}
