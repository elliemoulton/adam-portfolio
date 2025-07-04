import styles from '../ContactForm.module.css';

export default function ContactForm() {
    return (
        <>
            <div className={styles.formWrapper}>
                <form action='/' method='POST' className={styles.form}>
                    <h2>Contact Us</h2>
                    <label htmlFor='name'>Name</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        className={styles.input}
                        required
                    />
                    <label htmlFor='email'>Email</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        className={styles.input}
                        required
                    />
                    <label htmlFor='message'>How Can We Help?</label>
                    <select
                        id='message'
                        name='message'
                        className={styles.input}
                        required
                    >
                        <option defaultValue='' disabled>
                            {' '}
                        </option>
                        <option value='Web Design & Development'>
                            Web Design & Development
                        </option>
                        <option value='SEO & Content Marketing'>
                            SEO & Content Marketing
                        </option>
                        <option value='User Experience (UX)'>
                            User Experience (UX)
                        </option>
                        <option value='Other'>Other</option>
                    </select>
                    <div>
                        <button type='submit'>SUBMIT</button>
                    </div>
                </form>
            </div>
        </>
    );
}
