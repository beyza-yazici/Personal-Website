
import data from '../data.json';
import { useLanguage } from '../hooks/useLanguage';

function Footer() {
    const { language } = useLanguage();
    const { contact } = data[language];

    return (
        <footer className="py-16 px-16 bg-white dark:bg-gray-800">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8 dark:text-white">
                    Let&apos;s work together on <br />
                    your next product.
                </h2>

                <div className="flex justify-center items-center gap-6">
                    <a
                        href={contact.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-300 hover:text-[#e92577] transition-colors"
                    >
                        Github
                    </a>
                    <a
                        href={contact.personalBlog}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-300 hover:text-[#e92577] transition-colors"
                    >
                        Personal Blog
                    </a>
                    <a
                        href={contact.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-300 hover:text-[#e92577] transition-colors"
                    >
                        Linkedin
                    </a>
                    <a
                        href={`mailto:${contact.email}`}
                        className="text-gray-600 dark:text-gray-300 hover:text-[#e92577] transition-colors"
                    >
                        Email
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;