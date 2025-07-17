import Breadcrumbs from '../components/Breadcrumbs';
import CaseStudiesPageCards from '../components/CaseStudiesPageCards';
import SubPageContactFormBlock from '../components/SubPageContactFormBlock';

export default function CaseStudiesPage() {
    return (
        <>
            <div className='light-background sub-page'>
                <div className='content'>
                    <Breadcrumbs
                        items={[
                            { label: 'Case Studies', href: '/case-studies' },
                        ]}
                    />
                    <h1>Case Studies</h1>
                    <hr />
                    <CaseStudiesPageCards />
                </div>
            </div>
            <SubPageContactFormBlock />
        </>
    );
}
