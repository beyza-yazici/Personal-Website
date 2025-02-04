
import { useLanguage } from '../../hooks/useLanguage';
import data from '../../data.json';

function HeroSection() {
    const { language } = useLanguage();
    const content = data[language].heroSection;

    return (
        <div className="flex flex-row items-start justify-between gap-8 p-8">
            
            <div className="flex-1">
                <h1 className="flex items-center gap-2 text-2xl font-bold mb-4">
                    {content.greeting} <span role="img" aria-label="wave">👋</span>
                </h1>

                <p className="text-lg mb-6 dark:text-white">
                    {content.intro}
                </p>

                <div className="flex gap-4 mb-6">
                    {content.socials.map((social, index) => (
                        <a
                            key={index}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-80 transition-opacity"
                        >
                            <img
                                src={`/icons/${social.logo}`}
                                alt={social.altText}
                                className="w-6 h-6"
                            />
                        </a>
                    ))}
                </div>

                <div className="text-sm text-gray-400">
                    <div dangerouslySetInnerHTML={{ __html: content.ctaHTML }} className="mb-2" />
                    <div>
                        Invite me to join your team →{' '}
                        <a 
                            href={`mailto:${content.email}`}
                            className="text-[#e92577] hover:underline"
                        >
                            beyzanyazici@hotmail.com
                        </a>
                    </div>
                </div>
            </div>

            <div className="w-64 h-64 rounded-2xl overflow-hidden border-4 border-[#e92577] flex-shrink-0">
                <img
                    src={content.profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
}

export default HeroSection;