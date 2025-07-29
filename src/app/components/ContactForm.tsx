'use client'; // needed when using React hooks / event handlers

import { useState } from 'react';
import styles from '../styles/ContactForm.module.css';

export default function ContactForm() {
    const [status, setStatus] = useState<
        'idle' | 'sending' | 'success' | 'error'
    >('idle');

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault(); // stop browser reload

        setStatus('sending');

        const formData = new FormData(e.currentTarget);

        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message'),
        };

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setStatus('success');
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
        }
    }

    return (
        <div className={styles.formWrapper}>
            <form onSubmit={handleSubmit} className={styles.form}>
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
                    <button type='submit' disabled={status === 'sending'}>
                        {status === 'sending' ? 'Sending...' : 'SUBMIT'}
                    </button>
                </div>
            </form>

            {status === 'success' && (
                <p>✅ Thank you! We&apos;ll be in touch soon.</p>
            )}
            {status === 'error' && (
                <p>❌ Something went wrong. Please try again.</p>
            )}
        </div>
    );
}

// ******** old code that doesn't send the form to the email address ********
// import styles from '../ContactForm.module.css';

// export default function ContactForm() {
//     return (
//         <>
//             <div className={styles.formWrapper}>
//                 <form action='/' method='POST' className={styles.form}>
//                     <h2>Contact Us</h2>
//                     <label htmlFor='name'>Name</label>
//                     <input
//                         type='text'
//                         id='name'
//                         name='name'
//                         className={styles.input}
//                         required
//                     />
//                     <label htmlFor='email'>Email</label>
//                     <input
//                         type='email'
//                         id='email'
//                         name='email'
//                         className={styles.input}
//                         required
//                     />
//                     <label htmlFor='message'>How Can We Help?</label>
//                     <select
//                         id='message'
//                         name='message'
//                         className={styles.input}
//                         required
//                     >
//                         <option defaultValue='' disabled>
//                             {' '}
//                         </option>
//                         <option value='Web Design & Development'>
//                             Web Design & Development
//                         </option>
//                         <option value='SEO & Content Marketing'>
//                             SEO & Content Marketing
//                         </option>
//                         <option value='User Experience (UX)'>
//                             User Experience (UX)
//                         </option>
//                         <option value='Other'>Other</option>
//                     </select>
//                     <div>
//                         <button type='submit'>SUBMIT</button>
//                     </div>
//                 </form>
//             </div>
//         </>
//     );
// }
