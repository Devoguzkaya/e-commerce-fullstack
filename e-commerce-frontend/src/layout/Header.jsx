import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, Phone, Mail, Instagram, Youtube, Facebook, Twitter, Heart, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const getLinkClass = (path) => {
        const baseClass = "text-[18px] md:text-sm font-normal md:font-bold hover:text-[#252B42] transition-colors leading-[24px] md:leading-[24px]";
        // Check for active state
        // Special case for Shop to include sub-routes
        const isActive = path === '/shop'
            ? location.pathname.startsWith('/shop')
            : location.pathname === path;

        return `${baseClass} ${isActive ? 'text-[#252B42]' : 'text-[#737373]'}`;
    };

    return (
        <header className="w-full bg-white transition-all duration-300 font-bold">
            {/* Top Bar - Desktop Only */}
            <div className="hidden md:block w-full bg-[#252B42] text-white py-[10px]">
                <div className="container mx-auto px-4 flex justify-between items-center text-[14px] leading-[24px] tracking-[0.2px] font-bold">
                    <div className="flex items-center gap-[30px]">
                        <div className="flex items-center gap-[5px]">
                            <Phone size={16} />
                            <span>(225) 555-0118</span>
                        </div>
                        <div className="flex items-center gap-[5px]">
                            <Mail size={16} />
                            <span>michelle.rivera@example.com</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-[10px]">
                        <span className="font-bold">Follow Us and get a chance to win 80% off</span>
                    </div>
                    <div className="flex items-center gap-[10px]">
                        <span className="font-bold">Follow Us :</span>
                        <div className="flex items-center gap-[10px]">
                            <Instagram size={16} className="cursor-pointer hover:text-[#23A6F0] transition-colors" />
                            <Youtube size={16} className="cursor-pointer hover:text-[#23A6F0] transition-colors" />
                            <Facebook size={16} className="cursor-pointer hover:text-[#23A6F0] transition-colors" />
                            <Twitter size={16} className="cursor-pointer hover:text-[#23A6F0] transition-colors" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center py-4 md:h-[90px] md:py-0">

                    {/* Logo & Mobile Menu Toggle */}
                    <div className="w-full md:w-auto flex justify-between items-center">
                        <Link to="/" className="text-2xl font-bold text-[#252B42] tracking-tight">
                            Bandage
                        </Link>

                        {/* Mobile Icons */}
                        <div className="flex md:hidden items-center space-x-4 text-[#737373]">
                            <button className="hover:text-blue-600 transition-colors">
                                <Search className="w-6 h-6" />
                            </button>
                            <button className="hover:text-blue-600 transition-colors">
                                <ShoppingCart className="w-6 h-6" />
                            </button>
                            <button onClick={toggleMenu} className="hover:text-blue-600 transition-colors">
                                <Menu className="w-6 h-6" />
                            </button>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center gap-4 md:gap-[15px] mt-8 md:mt-0 w-full md:w-auto`}>
                        <Link to="/" className={getLinkClass('/')}>Home</Link>

                        {/* Shop Dropdown Trigger (Visual Only for now) */}
                        <Link to="/shop" className={`${getLinkClass('/shop')} flex items-center gap-2`}>
                            Shop
                            {/* <ChevronDown size={12} className="hidden md:block" /> */}
                        </Link>

                        <Link to="/about" className={getLinkClass('/about')}>About</Link>
                        <Link to="/blog" className={getLinkClass('/blog')}>Blog</Link>
                        <Link to="/team" className={getLinkClass('/team')}>Team</Link>
                        <Link to="/contact" className={getLinkClass('/contact')}>Contact</Link>
                        <Link to="/pages" className={getLinkClass('/pages')}>Pages</Link>

                        {/* Mobile Menu Extra Links if needed */}
                        <div className="flex md:hidden flex-col items-center gap-4 mt-4 text-[#23A6F0]">
                            <Link to="/login" className="flex items-center gap-2 text-[18px] font-normal leading-[24px]">
                                <User className="w-6 h-6" /> Login / Register
                            </Link>
                        </div>
                    </nav>

                    {/* Right Section (Desktop Only) */}
                    <div className="hidden md:flex items-center space-x-[30px] text-[#23A6F0]">
                        <button className="flex items-center font-bold text-sm hover:text-blue-600 transition-colors">
                            <User className="w-4 h-4 mr-[5px]" />
                            Login / Register
                        </button>
                        <div className="flex items-center space-x-[30px]">
                            <button className="hover:text-blue-600 transition-colors"><Search className="w-4 h-4" /></button>
                            <button className="flex items-center hover:text-blue-600 transition-colors">
                                <ShoppingCart className="w-4 h-4" />
                                <span className="ml-1 text-xs font-normal">1</span>
                            </button>
                            <button className="flex items-center hover:text-blue-600 transition-colors">
                                <Heart className="w-4 h-4" />
                                <span className="ml-1 text-xs font-normal">1</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
