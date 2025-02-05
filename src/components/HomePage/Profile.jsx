import { useLanguage } from '../../hooks/useLanguage';
import data from '../../data.json';

function Profile() {
    const { language } = useLanguage();
    const { information, aboutme, labels } = data[language].profile;

    return (
        <section className="py-16 px-16">
            <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
                {labels.profile}
            </h2>

            <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
                
                <div className="md:w-1/3 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
                    <h3 className="text-xl font-semibold mb-6 text-[#e92577]">
                        {labels.basicInfo}
                    </h3>
                    
                    <div className="space-y-4">
                        <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                {labels.birthday}
                            </p>
                            <p className="font-medium dark:text-white">
                                {information.birthday}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                {labels.location}
                            </p>
                            <p className="font-medium dark:text-white">
                                {information.location}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                {labels.education}
                            </p>
                            <p className="font-medium dark:text-white">
                                {information.education}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                {labels.role}
                            </p>
                            <p className="font-medium dark:text-white">
                                {information.role}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="md:w-2/3 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
                    <h3 className="text-xl font-semibold mb-6 text-[#e92577]">
                        {labels.aboutMe}
                    </h3>
                    
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {aboutme}
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Profile;