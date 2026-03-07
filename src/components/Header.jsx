export default function Header() {
    return (
        <div className="w-11/12 max-w-3xl text-center mx-auto flex flex-col items-center justify-start pt-6 pb-10 gap-4">
            <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-1 font-Ovo">
                I'm Rendel Reyes
            </h3>
            <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo -mt-2">Full stack web developer</h1>
            <p className="max-w-2xl mx-auto font-Ovo text-base sm:text-lg text-gray-600 dark:text-gray-300">
            Specializing in building responsive, scalable, and user-focused web applications. BSIT graduate from Davao del Norte State College with a passion for transforming ideas into efficient digital solutions.
            </p>
            <p className="max-w-xl mx-auto font-Ovo text-sm text-gray-500 dark:text-gray-400">
                React · Node.js · APIs · PHP · JavaScript · MySQL · Laravel
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <a href="#contact"
                    className="px-10 py-2.5 border rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white flex items-center gap-2 dark:border-transparent shadow-green">
                    contact me <img src="./assets/right-arrow-white.png" alt="" className="w-4" />
                </a>

                <a href="./assets/cv.pdf" download
                    className="px-10 py-2.5 rounded-full border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover flex items-center gap-2 bg-white dark:bg-transparent dark:text-white">
                    my resume <img src="./assets/download-icon.png" alt="" className="w-4 dark:invert" />
                </a>
            </div>
        </div>
    )
}