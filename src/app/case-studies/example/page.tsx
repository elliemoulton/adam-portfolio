import Breadcrumbs from '../../components/Breadcrumbs';

const subtitle0 = 'Case Studies';
const subtitleLink0 = '/case-studies';
const subtitle1 = 'Example';
const subtitleLink1 = '/case-studies/example';

export default function Example() {
    return (
        <>
            <div className='content'>
                <Breadcrumbs
                    subtitle0={subtitle0}
                    subtitleLink0={subtitleLink0}
                    subtitle1={subtitle1}
                    subtitleLink1={subtitleLink1}
                />
                <p>hello world example</p>
            </div>
        </>
    );
}
