import { useState } from 'react';

export default function Contact() {
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        const form = event.target;
        const formData = new FormData(form);

        // Web3Forms: add your access key (get one free at https://web3forms.com)
        const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
        if (!accessKey) {
            setStatus({ type: 'error', message: 'Contact form is not configured. Add VITE_WEB3FORMS_ACCESS_KEY to .env' });
            setIsSubmitting(false);
            return;
        }

        formData.append('access_key', accessKey);
        formData.set('subject', `Portfolio – New message from ${formData.get('name') || 'Someone'}`);

        try {
            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData,
            }).then((r) => r.json());

            if (res.success) {
                setStatus({ type: 'success', message: res.message || 'Message sent successfully!' });
                form.reset();
            } else {
                setStatus({ type: 'error', message: res.message || 'Something went wrong. Please try again.' });
            }
        } catch (err) {
            setStatus({ type: 'error', message: 'Network error. Please check your connection and try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div id="contact" className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('./assets/footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center dark:bg-none">
            <h4 className="text-center mb-2 text-lg font-Ovo">Connect with me</h4>
            <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-600 dark:text-white/80">
                I&apos;d love to hear from you! If you have any questions, comments or feedback, please use the form below.
            </p>

            <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
                <input type="hidden" name="subject" value="Portfolio – Contact form" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8">
                    <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full px-3 py-2.5 focus:ring-2 focus:ring-emerald-500/30 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white dark:bg-darkHover/30"
                        required
                        name="name"
                        disabled={isSubmitting}
                    />
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-3 py-2.5 focus:ring-2 focus:ring-emerald-500/30 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white dark:bg-darkHover/30"
                        required
                        name="email"
                        disabled={isSubmitting}
                    />
                </div>
                <textarea
                    rows="6"
                    placeholder="Enter your message"
                    className="w-full px-4 py-2.5 focus:ring-2 focus:ring-emerald-500/30 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white mb-6 dark:bg-darkHover/30"
                    required
                    name="message"
                    disabled={isSubmitting}
                />
                <div className="text-center">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="py-2.5 px-8 w-max flex items-center justify-center gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 disabled:opacity-60 disabled:cursor-not-allowed dark:bg-transparent dark:border dark:border-emerald-500/50 dark:hover:bg-darkHover dark:hover:border-emerald-400"
                    >
                        {isSubmitting ? 'Sending…' : 'Submit now'}
                        {!isSubmitting && (
                            <img src="./assets/right-arrow-white.png" alt="" className="w-4" />
                        )}
                    </button>
                    {status.message && (
                        <p
                            className={`mt-4 text-sm font-Ovo ${
                                status.type === 'success'
                                    ? 'text-emerald-600 dark:text-emerald-400'
                                    : 'text-red-600 dark:text-red-400'
                            }`}
                        >
                            {status.message}
                        </p>
                    )}
                </div>
            </form>
        </div>
    );
}
