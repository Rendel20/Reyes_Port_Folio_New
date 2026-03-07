export default function Footer() {
    return (
        <div className="mt-20">
            <div className="text-center">
                <a href="#!">
                    <img src="/assets/logo.png" alt="" className="w-36 mx-auto mb-2 dark:hidden" />
                    <img src="" alt="" className="w-36 mx-auto mb-2 hidden dark:block" />
                </a>

                <div className="w-max flex items-center gap-2 mx-auto">
                    <img src="./assets/mail_icon.png" alt="" className="w-5 dark:hidden" />
                    <img src="./assets/mail_icon_dark.png" alt="" className="w-5 hidden dark:block" />

                    <a href="">rendelreyes399@gmail.com</a>
                </div>
            </div>
            <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-3">
                <p>© {new Date().getFullYear()} <a href="" target="_blank">Created With ♡ By Rendel R. Reyes</a><a href=""></a> • All rights reserved.</p>
                <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
                    <li><a href="https://github.com/Rendel20">GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/rendel-reyes-09259b340/">LinkedIn</a></li>
                    <li><a href="https://www.facebook.com/rendel.reyes.5">Facebook</a></li>
                </ul>
            </div>
        </div>
    )
}