export default function Services() {
    const services = [
        {
            name: 'Web developer',
            icon: './assets/web-icon.png',
            description: 'I build responsive, scalable web applications from front-end to back-end. Custom sites, APIs, and full-stack solutions tailored to your needs.',
            link: '#',
        },
        {
            name: 'Mobile app',
            icon: './assets/mobile-icon.png',
            description: 'Design and development of mobile applications for iOS and Android. From concept to deployment, with focus on performance and user experience.',
            link: '#',
        },
        {
            name: 'UI/ UX design',
            icon: './assets/ui-icon.png',
            description: 'User-centered interfaces and experiences that are intuitive and accessible. Wireframes, prototypes, and visual design for web and mobile.',
            link: '#',
        },
        {
            name: 'Graphics design',
            icon: './assets/graphics-icon.png',
            description: 'Visual design for branding, marketing, and digital products. Logos, illustrations, and assets that align with your project and identity.',
            link: '#',
        }
    ];
    return (
        <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">What i offer</h4>
            <h2 className="text-center text-5xl font-Ovo">My services</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-600 dark:text-white/80">
                I&apos;m  I am a Full Stack Web Developer who builds modern, responsive, and user-friendly web applications. I develop complete web solutions from front-end design to back-end functionality.
            </p>

            <div className="grid grid-cols-auto gap-6 my-10">
                {services.map((service) => (
                    <div key={service.name} className="border border-gray-300 dark:border-white/30 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-green">
                        <img src={service.icon} alt="" className="w-10" />
                        <h3 className="text-lg my-4 text-gray-700 dark:text-white">{service.name}</h3>
                        <p className="text-sm text-gray-600 leading-5 dark:text-white/80">{service.description}</p>
                        <a href={service.link} className="flex items-center gap-2 text-sm mt-5"><img src="" alt="" className="w-4" /></a>
                    </div>
                ))}
            </div>
        </div>
    )
}