import { useState } from 'react';

const CONTACT_INFO = [
  {
    label: 'Email',
    value: 'omeiregiftchidiebube@gmail.com',
    href: 'mailto:omeiregiftchidiebube@gmail.com',
    color: '#EA4335',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91c-.857-.527-1.31-1.416-1.31-2.386" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '+234 8132098868',
    href: 'tel:+2348132098868',
    color: '#22C55E',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    label: 'Location',
    value: 'Lagos, Nigeria',
    color: '#4285F4',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    label: 'Availability',
    value: 'Open to new projects',
    color: '#F59E0B',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const SOCIALS = [
  {
    label: 'WhatsApp',
    href: 'https://wa.me/2348132098868',
    color: '#25D366',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/Gift.Chidiebube',
    color: '#1877F2',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@pinkylove2128',
    color: '#000000',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/GiftOmeire1',
    color: '#1DA1F2',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    ),
  },
];


const INITIAL_FORM = { name: '', email: '', subject: '', message: '' };

const inputClass =
  'w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition-colors duration-200 focus:border-pink-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-pink-500/30 dark:border-slate-600 dark:bg-slate-900 dark:text-white dark:placeholder-gray-500 dark:focus:bg-slate-900';

function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = 'Please enter your name.';
    if (!form.email.trim()) {
      nextErrors.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!form.subject.trim()) nextErrors.subject = 'Please add a subject.';
    if (!form.message.trim()) {
      nextErrors.message = 'Please write a message.';
    } else if (form.message.trim().length < 10) {
      nextErrors.message = 'Your message should be at least 10 characters.';
    }
    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setForm(INITIAL_FORM);
    }, 1000);
  };

  const resetForm = () => {
    setIsSent(false);
    setErrors({});
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <span className="rounded-full border border-pink-200 bg-pink-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-pink-600 dark:border-pink-500/30 dark:bg-pink-500/10 dark:text-pink-400">
          Contact
        </span>
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Let's build something <span className="text-pink-500">great together</span>
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
          Whether you have a project in mind, a question, or just want to say hello —
          I'd love to hear from you. I usually reply within 24 hours.
        </p>
      </div>

      <section className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-800">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Contact Information</h2>
            <ul className="mt-6 space-y-5">
              {CONTACT_INFO.map((item) => (
                <li key={item.label} className="flex items-center gap-4">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                    style={{ color: item.color, backgroundColor: `${item.color}1A` }}
                  >
                    {item.icon}
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm font-semibold text-gray-900 hover:text-pink-600 dark:text-white dark:hover:text-pink-400"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">{item.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-gray-100 pt-6 dark:border-slate-700">
              <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                Find me on
              </p>
              <div className="mt-3 flex flex-wrap gap-3">
                {SOCIALS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    title={social.label}
                    style={{ color: social.color }}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-gray-50 transition-all duration-200 hover:-translate-y-0.5 hover:border-current hover:shadow-md dark:border-slate-600 dark:bg-slate-900"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm sm:p-10 dark:border-slate-700 dark:bg-slate-800">
            {isSent ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-pink-50 text-3xl">
                  ✅
                </div>
                <h2 className="mt-6 text-2xl font-bold text-gray-900 dark:text-white">Message Sent!</h2>
                <p className="mt-2 max-w-sm text-gray-600 dark:text-gray-400">
                  Thanks for reaching out. I'll get back to you as soon as possible.
                </p>
                <button
                  type="button"
                  onClick={resetForm}
                  className="mt-8 rounded-full border-2 border-pink-500 px-8 py-3 text-sm font-semibold text-pink-600 transition-colors duration-200 hover:bg-pink-50 dark:hover:bg-pink-500/10"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-200">
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Jane Doe"
                      value={form.name}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.name)}
                      className={inputClass}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs font-medium text-red-500">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-200">
                      Your Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="jane@example.com"
                      value={form.email}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.email)}
                      className={inputClass}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs font-medium text-red-500">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="mt-6">
                  <label htmlFor="subject" className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-200">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Project inquiry"
                    value={form.subject}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.subject)}
                    className={inputClass}
                  />
                  {errors.subject && (
                    <p className="mt-1.5 text-xs font-medium text-red-500">{errors.subject}</p>
                  )}
                </div>

                <div className="mt-6">
                  <label htmlFor="message" className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-200">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.message)}
                    className={inputClass}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs font-medium text-red-500">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-8 w-full rounded-full bg-pink-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-500/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-pink-600 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 sm:w-auto"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;