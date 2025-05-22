import Link from 'next/link';

type BreadcrumbsProps = {
    subtitle: string;
    subtitleLink: string;
    currentPage: string;
    currentPageLink: string;
};

export default function Breadcrumbs({
    subtitle,
    subtitleLink,
    currentPage,
    currentPageLink,
}: BreadcrumbsProps) {
    return (
        <div className='breadcrumbs'>
            <div className='content'>
                <Link href='/'>Home</Link> /{' '}
                <Link href={subtitleLink}>{subtitle}</Link> /{' '}
                <Link href={currentPageLink}>{currentPage}</Link>
            </div>
        </div>
    );
}
