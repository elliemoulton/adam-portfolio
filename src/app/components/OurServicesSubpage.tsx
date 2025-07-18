interface OurServicesSubpageProps {
    title: string;
    subtitle: string;
}

export default function OurServicesSubpage(props: OurServicesSubpageProps) {
    return (
        <>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </>
    );
}
