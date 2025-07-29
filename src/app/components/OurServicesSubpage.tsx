import styles from '../styles/OurServicesSubpage.module.css';

interface OurServicesSubpageProps {
    title: string;
    subtitle: string;
    services: {
        title: string;
        description: string;
    }[];
}

export default function OurServicesSubpage(props: OurServicesSubpageProps) {
    return (
        <>
            <div className={styles.ourServicesSubpage}>
                <h1>{props.title}</h1>
                <h2>{props.subtitle}</h2>
                {[...props.services].map((service, index) => (
                    <div key={index}>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
