
import { useLanguage } from '../../hooks/useLanguage';
import data from '../../data.json';

function HeroSection() {
    const { language } = useLanguage();
    const content = data[language].heroSection;

    return (
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 px-6 md:px-40 py-8 md:py-30">
    <div className="flex-1 space-y-6">
        <h1 className="flex items-center gap-2 text-2xl md:text-3xl font-bold">
            {content.greeting} <span role="img" aria-label="wave">👋</span>
        </h1>

        <p className="text-lg md:text-xl dark:text-white">
            {content.intro}
        </p>

        <div className="flex flex-wrap gap-6">
            {content.socials.map((social, index) => (
                <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                >
                    <img
                        src={`/images/${social.logo}`}
                        alt={social.altText}
                        className="w-8 h-8" 
                    />
                </a>
            ))}
        </div>

        <div className="text-base text-gray-400 space-y-2">
            <div dangerouslySetInnerHTML={{ __html: content.ctaHTML }} />
            <div>
                {content.invitation}{' '}
                <a 
                    href={`mailto:${content.email}`}
                    className="text-[#e92577] hover:underline"
                >
                    {content.email}
                </a>
            </div>
        </div>
    </div>

    <div className="w-48 h-48 md:w-60 md:h-60 rounded-2xl overflow-hidden border-4 border-[#e92577] flex-shrink-0">
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