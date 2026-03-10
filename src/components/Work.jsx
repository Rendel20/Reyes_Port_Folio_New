export default function Work() {
    const work = [
        {
            name: 'SignSpeak',
            icon: './assets/sign-speak.png',
            description: 'SignSpeak is a sign language translation web application that converts hand gestures into text to help improve communication with people who are deaf or hard of hearing. The platform also allows users to learn sign language interactively. This project was developed as my capstone project.',
            link: '#',
            codeLink: '#',
        },
        {
            name: 'ChatVibe',
            icon: './assets/chat-vibe.png',
            description: 'ChatVibe is a random online chat messaging platform that allows users to instantly connect and communicate with other people in real time through a simple and user-friendly interface.',
            link: '#',
            codeLink: '#',
        },
        {
            name: 'NetBridge',
            icon: './assets/net-bridge.png',
            description: 'NetBridge is a local intranet messaging platform designed for communication within a local network. It allows users to send messages and stay connected even without an internet connection, making it ideal for offices, schools, or local environments.',
            link: '#',
            codeLink: '#',
        },
        {
            name: 'FileBridge',
            icon: './assets/file-bridge.png',
            description: 'FileBridge is a file management and organization system that helps users store, manage, and arrange their documents efficiently. It provides a structured way to keep files organized and easily accessible.',
            link: '#',
            codeLink: '#',
        },
        {
            name: 'SmartTask',
            icon: './assets/smart-task.png',
            description: 'Smart Task Manager is a full-stack productivity web application that helps users organize and prioritize tasks efficiently. The system includes task management, deadline tracking, productivity analytics, and smart task recommendations based on priority and urgency. It is built using React, Laravel API, and MySQL.',
            link: '#',
            codeLink: '#',
        },
        {
            name: 'FaceAttend',
            icon: './assets/face-attend.png',
            description: 'A web-based attendance system that uses facial recognition to automatically detect and record user attendance in real time, built using Laravel, React, and MySQL.',
            link: '#',
            codeLink: '#',
        }
    ];
    return (
        <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
            <h2 className="text-center text-5xl font-Ovo">My latest work</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-600 dark:text-white/80">
                Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end and full-stack development.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                {work.map((project) => (
                    <article
                        key={project.name}
                        className="group border border-gray-300 dark:border-white/20 rounded-xl overflow-hidden bg-white dark:bg-darkHover/30 hover:shadow-lg dark:hover:shadow-green transition-all duration-300 hover:-translate-y-1"
                    >
                        <div className="aspect-video w-full bg-gray-100 dark:bg-darkTheme overflow-hidden">
                            <img
                                src={project.icon}
                                alt={project.name}
                                className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-300"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white font-Ovo mb-3">
                                {project.name}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-white/80 leading-relaxed mb-5 line-clamp-4">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <a
                                    href={project.link}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-emerald-500 to-cyan-500 text-white hover:opacity-90 transition-opacity"
                                >
                                    View Project
                                    <img src="./assets/right-arrow-white.png" alt="" className="w-3.5" />
                                </a>
                                <a
                                    href={project.codeLink}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border border-gray-300 dark:border-emerald-500/40 text-gray-700 dark:text-white hover:bg-lightHover dark:hover:bg-darkHover transition-colors"
                                >
                                    View Code
                                </a>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
            <a href="#" className="w-max flex items-center justify-center gap-2 text-gray-700 border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover rounded-full py-2 px-8 mx-auto my-12 duration-300 dark:text-white">
                Show more
                <img src="./assets/right-arrow-bold.png" alt="" className="w-4 dark:hidden" />
                <img src="./assets/right-arrow-bold-dark.png" alt="" className="w-4 hidden dark:block" />
            </a>
        </div>
    );
}
