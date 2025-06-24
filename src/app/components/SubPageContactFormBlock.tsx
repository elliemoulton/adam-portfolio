import ContactForm from './ContactForm';

export default function SubPageContactFormBlock() {
    return (
        <>
            <div className='dark-background contact-form-block'>
                <h2 style={{ textAlign: 'center' }}>
                    Interested in working with us? Contact us to learn more
                    about how we can support your website.
                </h2>
                <ContactForm />
            </div>
        </>
    );
}
