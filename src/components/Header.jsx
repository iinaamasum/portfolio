import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const location = useLocation();

    const isActive = (paths) => paths.includes(location.pathname);

    const linkClass = (paths) =>
        isActive(paths)
            ? 'text-blue-600 font-semibold'
            : 'text-gray-700 hover:text-blue-500';

    return (
        <header className="border-b border-gray-200">
            <div className="flex justify-between items-center h-20 px-6 md:px-10">
                <div
                    className={`text-2xl cormorant-garamond-bold ${linkClass([
                        '/',
                        '/portfolio',
                        '/portfolio/',
                    ])}`}
                >
                    <Link
                        className="text-black hover:text-black"
                        to="/portfolio"
                    >
                        {'Md. Masum Mia'}
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-6">
                    <Link
                        to="/portfolio"
                        className={linkClass([
                            '/',
                            '/portfolio',
                            '/portfolio/',
                        ])}
                    >
                        About Me
                    </Link>
                    <Link
                        to="/publications"
                        className={linkClass(['/publications'])}
                    >
                        Publications
                    </Link>

                    <Link to="/blogs" className={linkClass(['/blogs'])}>
                        Blogs
                    </Link>
                    <Link
                        to="/research-interests-projects"
                        className={linkClass(['/research-interests-projects'])}
                    >
                        Research Interests & Projects
                    </Link>
                    <Link
                        to="/experiences"
                        className={linkClass(['/experiences'])}
                    >
                        Experiences
                    </Link>
                    <Link
                        to="/teaching-services"
                        className={linkClass(['/teaching-services'])}
                    >
                        Teaching & Services
                    </Link>
                    <Link to="/awards" className={linkClass(['/awards'])}>
                        Awards
                    </Link>
                    <Link to="/cv" className={linkClass(['/cv'])}>
                        CV
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden"
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                >
                    <FontAwesomeIcon
                        icon={isOpen ? faTimes : faBars}
                        size="lg"
                    />
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            {isOpen && (
                <nav className="md:hidden flex flex-col gap-4 px-6 pb-4">
                    <Link
                        to="/portfolio"
                        className={linkClass([
                            '/',
                            '/portfolio',
                            '/portfolio/',
                        ])}
                        onClick={toggleMenu}
                    >
                        About Me
                    </Link>
                    <Link
                        to="/publications"
                        className={linkClass(['/publications'])}
                        onClick={toggleMenu}
                    >
                        Publications
                    </Link>
                    <Link
                        to="/blogs"
                        className={linkClass(['/blogs'])}
                        onClick={toggleMenu}
                    >
                        Blogs
                    </Link>
                    <Link
                        to="/research-interests-projects"
                        className={linkClass(['/research-interests-projects'])}
                        onClick={toggleMenu}
                    >
                        Research Interests & Projects
                    </Link>
                    <Link
                        to="/experiences"
                        className={linkClass(['/experiences'])}
                        onClick={toggleMenu}
                    >
                        Experiences
                    </Link>
                    <Link
                        to="/teaching-services"
                        className={linkClass(['/teaching-services'])}
                        onClick={toggleMenu}
                    >
                        Teaching & Services
                    </Link>
                    <Link
                        to="/awards"
                        className={linkClass(['/awards'])}
                        onClick={toggleMenu}
                    >
                        Awards
                    </Link>
                    <Link
                        to="/cv"
                        className={linkClass(['/cv'])}
                        onClick={toggleMenu}
                    >
                        CV
                    </Link>
                </nav>
            )}
        </header>
    );
};

export default Header;
