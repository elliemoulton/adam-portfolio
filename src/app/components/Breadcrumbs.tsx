import Link from 'next/link';

type BreadcrumbsProps = {
    subtitle0: string;
    subtitleLink0: string;
    subtitle1?: string;
    subtitleLink1?: string;
};

export default function Breadcrumbs({
    subtitle0,
    subtitleLink0,
    subtitle1,
    subtitleLink1,
}: BreadcrumbsProps) {
    return (
        <div className='breadcrumbs'>
            <div className='content'>
                <Link href='/'>Home</Link> /{' '}
                <Link
                    href={subtitleLink0}
                    className={!subtitle1 ? 'underline' : ''}
                >
                    {subtitle0}
                </Link>
                {subtitle1 && subtitleLink1 && (
                    <>
                        {' / '}
                        <Link href={subtitleLink1} className='underline'>
                            {subtitle1}
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
}
