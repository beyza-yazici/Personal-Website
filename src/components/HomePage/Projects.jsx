import { useLanguage } from '../../hooks/useLanguage';
import data from '../../data.json';
import PropTypes from 'prop-types';

function Projects() {
    const { language } = useLanguage();
    const { left: leftProject, right: rightProject, labels } = data[language].projects;

    const ProjectCard = ({ project }) => (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6">
                <h3 className="text-xl font-bold mb-3 dark:text-white">
                    {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                        <span 
                        key={index}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-sm"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="flex gap-4">
                    <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#e92577] hover:underline"
                    >
                        {labels.github}
                    </a>
                    <a
                        href={project.visit}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#e92577] hover:underline"
                    >
                        {labels.demo}
                    </a>
                </div>
            <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
            />
            </div>
        </div>
    );

    ProjectCard.propTypes = {
        project: PropTypes.object.isRequired
    };

    return (
        <section className="py-16 px-16">
            <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
                {labels.projects}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                <ProjectCard project={leftProject} />
                <ProjectCard project={rightProject} />
            </div>
        </section>
    );
}

export default Projects;