import Breadcrumbs from '../components/Breadcrumbs';

const subtitle = 'Case Studies';
const subtitleLink = '/case-studies';
const currentPage = 'Case Studies';
const currentPageLink = '/case-studies';

export default function CaseStudies() {
    return (
        <>
            <div className='case-studies-page light-background'>
                <div className='content'>
                    <Breadcrumbs
                        subtitle={subtitle}
                        subtitleLink={subtitleLink}
                        currentPage={currentPage}
                        currentPageLink={currentPageLink}
                    />
                    <h1>Case Studies</h1>
                </div>
            </div>
        </>
    );
}
