import Breadcrumbs from "@/app/components/Breadcrumbs";

export default function WebDesignAndDevelopmentPage() {
    return (
        <>
            <div className='content'>
                <Breadcrumbs
                    items={[
                        { label: "Our Services", href: "/our-services" },
                        { label: "Web Design and Development", href: "/our-services/web-design-and-development" },
                    ]}
                />
                <h1>Web Design and Development</h1>
                <p>
                    We create stunning, user-friendly websites that not only
                    look great but also perform well. Our team specializes in
                    both front-end and back-end development, ensuring a seamless
                    experience for your users.
                </p>
                <p>
                    Whether you need a simple landing page or a complex web
                    application, we have the expertise to bring your vision to
                    life.
                </p>
                <p>
                    Contact us today to discuss how we can help you achieve your
                    web design and development goals!
                </p>
            </div>
        </>
    );
}
