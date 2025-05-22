type SubPageTitleProps = {
    subtitle0: string;
};

export default function SubPageTitle({ subtitle0 }: SubPageTitleProps) {
    return (
        <div className='light-background sub-page'>
            <div className='content'>
                <h1>{subtitle0}</h1>
                <hr />
            </div>
        </div>
    );
}
