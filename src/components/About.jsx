export default function About() {
    const tools = [
        { name: 'vscode', icon: './assets/vscode.png', },
        { name: 'cursor', icon: './assets/cursor.png', },
        { name: 'MySQL', icon: './assets/firebase.png', },
        { name: 'mongodb', icon: './assets/mongodb.png', },
        { name: 'figma', icon: './assets/figma.png', },
        { name: 'git', icon: './assets/git.png', },
    ];

    const data = [
        {
            name: 'Languages',
            icon1: './assets/code-icon.png',
            icon2: './assets/code-icon-dark.png',
            description: 'HTML, CSS, JavaScript React Js, Next Js, Php, Python, Bootstrap, MySQL, Laravel',
        },
        {
            name: 'Education',
            icon1: './assets/edu-icon.png',
            icon2: './assets/edu-icon-dark.png',
            description: 'Batchelor of Science in Information Technology',
        },
        {
            name: 'Projects',
            icon1: './assets/project-icon.png',
            icon2: './assets/project-icon-dark.png',
            description: 'Built more than 5 projects',
        },
    ];
    return (
        <div id="about" className="w-full px-[12%] pt-4 pb-6 scroll-mt-20">
            <h4 className="text-center mb-1 text-lg font-Ovo">Introduction</h4>
            <h2 className="text-center text-5xl font-Ovo mb-8">About me</h2>

            <div className="flex w-full flex-col lg:flex-row items-center gap-10 my-10">
                <div className="max-w-max mx-auto relative">
                    <img src='./assets/user-image.png' alt="" className="w-64 sm:w-80 rounded-3xl max-w-none border-2 border-gray-200 dark:border-emerald-500/40 shadow-lg" />
                    
                </div>
                <div className="flex-1">
                    <p className="mb-6 max-w-2xl font-Ovo text-[15px] leading-7">I am a Full Stack Developer and a graduating Bachelor of Science in Information Technology (BSIT) student from Davao del Norte State College. I am passionate about building useful, user-friendly digital solutions and turning ideas into clean, responsive interfaces and functional web applications. With experience in both front-end and back-end development, I enjoy designing and developing complete systems that are efficient, scalable, and easy to use. I focus on writing clean code and creating intuitive user experiences that solve real-world problems. I am continuously improving my skills in modern web technologies to develop innovative and impactful web applications.</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
                        {data.map((data) => (
                            <li key={data.name} className="border border-gray-300 dark:border-white/30 rounded-xl p-5 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:shadow-white/80 dark:hover:bg-darkHover/50">
                                <img src={data.icon1} alt="" className="w-7 mt-2 dark:hidden" />
                                <img src={data.icon2} alt="" className="w-7 mt-2 hidden dark:block" />
                                <h3 className="my-3 font-semibold text-gray-700 dark:text-white">{data.name}</h3>
                                <p className="text-gray-600 text-sm dark:text-white/80">{data.description}</p>
                            </li>
                        ))}
                    </ul>
                    <h4 className="my-4 text-gray-700 font-Ovo dark:text-white/80">Tools i use</h4>

                    <ul className="flex items-center gap-3 sm:gap-4">
                        {tools.map((tool) => (
                            <li key={tool.name} className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-300 dark:border-white/30 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                                <img src={tool.icon} alt={tool.name} className="w-5 sm:w-7" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}