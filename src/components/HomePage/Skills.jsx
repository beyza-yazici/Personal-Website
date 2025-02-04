import { useLanguage } from '../../hooks/useLanguage';
import data from '../../data.json';

function Skills() {
    const { language } = useLanguage();
    const { title, skills } = data[language].skillsSection;

    return (
        <section className="py-16 px-16">
            <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
                {title}
            </h2>
            
            <div className="flex flex-wrap justify-center gap-8 max-w-3xl mx-auto">
                {skills.map((skill, index) => (
                    <div 
                        key={index} 
                        className="flex flex-col items-center gap-2 w-24"
                    >
                        <div className="w-16 h-16 flex items-center justify-center">
                            <img
                                src={`/images/${skill.icon}`}
                                alt={skill.name}
                                className="w-12 h-12 object-contain"
                            />
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300 text-center uppercase">
                            {skill.name}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;