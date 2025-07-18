//  new code refactored to handle infinite breadcrumbs
import Link from 'next/link';

type BreadcrumbItem = {
    label: string;
    href: string;
};

type BreadcrumbsProps = {
    items: BreadcrumbItem[];
};

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
    return (
        <div className='breadcrumbs'>
            <div className='content'>
                <Link href='/'>Home</Link>
                {items.map((item, index) => (
                    <span key={index}>
                        {' / '}
                        <Link
                            href={item.href}
                            className={
                                index === items.length - 1 ? 'last-child' : ''
                            }
                        >
                            {item.label}
                        </Link>
                    </span>
                ))}
            </div>
        </div>
    );
}

// old code
// import Link from 'next/link';

// type BreadcrumbsProps = {
//     subtitle0: string;
//     subtitleLink0: string;
//     subtitle1?: string;
//     subtitleLink1?: string;
// };

// export default function Breadcrumbs({
//     subtitle0,
//     subtitleLink0,
//     subtitle1,
//     subtitleLink1,
// }: BreadcrumbsProps) {
//     return (
//         <>
//             <div className='breadcrumbs'>
//                 <div className='content'>
//                     <Link href='/'>Home</Link> /{' '}
//                     <Link
//                         href={subtitleLink0}
//                         className={!subtitle1 ? 'underline' : ''}
//                     >
//                         {subtitle0}
//                     </Link>
//                     {subtitle1 && subtitleLink1 && (
//                         <>
//                             {' / '}
//                             <Link href={subtitleLink1} className='underline'>
//                                 {subtitle1}
//                             </Link>
//                         </>
//                     )}
//                 </div>
//             </div>
//         </>
//     );
// }
