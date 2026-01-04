import React from 'react';
import { Search, ShoppingCart, User, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="w-full bg-white transition-all duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center py-4 md:h-20 md:py-0">

                    {/* Top Row: Logo & Mobile Icons */}
                    <div className="w-full md:w-auto flex justify-between items-center">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center">
                            <Link to="/" className="text-2xl font-bold text-title tracking-tight font-sans">
                                Bandage
                            </Link>
                        </div>

                        {/* Mobile Icons (User, Search, Cart, Menu) */}
                        <div className="flex md:hidden items-center space-x-4 text-[#737373]">
                            <button className="hover:text-blue-600 transition-colors">
                                <User className="w-6 h-6" />
                            </button>
                            <button className="hover:text-blue-600 transition-colors">
                                <Search className="w-6 h-6" />
                            </button>
                            <button className="hover:text-blue-600 transition-colors">
                                <ShoppingCart className="w-6 h-6" />
                            </button>
                            <button className="hover:text-blue-600 transition-colors">
                                <Menu className="w-6 h-6" />
                            </button>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    {/* Desktop: Horizontal | Mobile: Vertical, centered, always visible */}
                    <nav className="flex flex-col md:flex-row items-center gap-6 md:gap-8 mt-8 md:mt-0 font-['Montserrat']">
                        <Link to="/" className="text-[30px] md:text-sm font-normal md:font-bold text-[#737373] hover:text-title transition-colors leading-[45px]">Home</Link>
                        <Link to="/product" className="text-[30px] md:text-sm font-normal md:font-bold text-[#737373] hover:text-title transition-colors leading-[45px]">Product</Link>
                        <Link to="/pricing" className="text-[30px] md:text-sm font-normal md:font-bold text-[#737373] hover:text-title transition-colors leading-[45px]">Pricing</Link>
                        <Link to="/contact" className="text-[30px] md:text-sm font-normal md:font-bold text-[#737373] hover:text-title transition-colors leading-[45px]">Contact</Link>
                    </nav>

                    {/* Right Section (Desktop Only: Login/Register & Icons) - Keeping hidden on mobile as per image focusing on vertical links */}
                    <div className="hidden md:flex items-center space-x-6">
                        <button className="flex items-center text-primary font-bold text-sm hover:text-blue-600 transition-colors">
                            <User className="w-4 h-4 mr-2" />
                            Login / Register
                        </button>
                        <div className="flex items-center space-x-6 text-primary">
                            <button className="hover:text-blue-600 transition-colors"><Search className="w-5 h-5" /></button>
                            <button className="flex items-center hover:text-blue-600 transition-colors">
                                <ShoppingCart className="w-5 h-5" />
                                <span className="ml-1 text-xs font-normal">1</span>
                            </button>
                            <button className="flex items-center hover:text-blue-600 transition-colors">
                                {/* Heart icon is not in the mobile image provided, keeping it for desktop consistency or removing if user wants 100% replacement. Keeping it. */}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
