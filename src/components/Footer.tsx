import { FaDiscord, FaGithub, FaTwitch, FaTwitter, FaYoutube } from "react-icons/fa"

const Footer = () => {
    const links = [
        { href: "https://discord.com", icon: <FaDiscord /> },
        { href: "https://twitch.com", icon: <FaTwitch /> },
        { href: "https://x.com", icon: <FaTwitter /> },
        { href: "https://github.com", icon: <FaGithub /> },
        { href: "https://youtube.com", icon: <FaYoutube /> },
    ]
    return (
        <footer className="w-screen bg-violet-300 py-4 text-black">
            <div className="container mx-auto flex flex-col justify-between px-4 items-center gap-4 md:flex-row">
                <p className="text-center text-sm md:text-left">
                    &copy; Nova 2025. All rights reserved
                </p>

                <div className="flex justify-center gap-4 md:justify-start">
                    {links.map((link) => (
                        <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-black transition-colors duration-500 ease-in-out hover:text-white">
                            {link.icon}
                        </a>
                    ))}
                </div>

                <a href="#privacy-policy" className="text-center text-sm hover:underline md:text-right">
                    Privacy Policy
                </a>
            </div>
        </footer>
    )
}

export default Footer