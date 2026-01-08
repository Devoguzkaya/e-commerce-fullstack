import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, Phone, Mail, Instagram, Youtube, Facebook, Twitter, Heart, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import md5 from 'md5';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const user = useSelector(state => state.client.user);
    const categories = useSelector(state => state.product.categories);

    // Group Categories
    const womenCategories = categories.filter(c => c.code.startsWith('k:'));
    const menCategories = categories.filter(c => c.code.startsWith('e:'));

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

                        {/* Shop Dropdown Trigger */}
                        <div className="relative group z-50">
                            <Link to="/shop" className={`${getLinkClass('/shop')} flex items-center gap-2 py-4`}>
                                Shop
                                <ChevronDown size={12} className="hidden md:block" />
                            </Link>

                            {/* Dropdown Menu */}
                            <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-4 px-6 min-w-[400px] hidden group-hover:flex gap-8 border border-gray-100 transform transition-all duration-200">
                                {/* Women Column */}
                                <div className="flex flex-col gap-2">
                                    <h5 className="font-bold text-[#252B42] text-lg border-b pb-2 mb-2 w-[150px]">Kadın</h5>
                                    {womenCategories.map(cat => (
                                        <Link
                                            key={cat.id}
                                            to={`/shop/kadin/${cat.title.toLowerCase()}/${cat.id}`}
                                            className="text-[#737373] hover:text-[#23A6F0] transition-colors text-sm"
                                        >
                                            {cat.title}
                                        </Link>
                                    ))}
                                </div>

                                {/* Men Column */}
                                <div className="flex flex-col gap-2">
                                    <h5 className="font-bold text-[#252B42] text-lg border-b pb-2 mb-2 w-[150px]">Erkek</h5>
                                    {menCategories.map(cat => (
                                        <Link
                                            key={cat.id}
                                            to={`/shop/erkek/${cat.title.toLowerCase()}/${cat.id}`}
                                            className="text-[#737373] hover:text-[#23A6F0] transition-colors text-sm"
                                        >
                                            {cat.title}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <Link to="/about" className={getLinkClass('/about')}>About</Link>
                        <Link to="/blog" className={getLinkClass('/blog')}>Blog</Link>
                        <Link to="/team" className={getLinkClass('/team')}>Team</Link>
                        <Link to="/contact" className={getLinkClass('/contact')}>Contact</Link>
                        <Link to="/pages" className={getLinkClass('/pages')}>Pages</Link>

                        {/* Mobile Menu Extra Links if needed */}
                        <div className="flex md:hidden flex-col items-center gap-4 mt-4 text-[#23A6F0]">
                            {user?.name ? (
                                <div className="flex items-center gap-2 text-[18px] font-normal leading-[24px]">
                                    {user.email ? (
                                        <img
                                            src={`https://www.gravatar.com/avatar/${md5(user.email)}?s=24&d=mp`}
                                            alt="User Avatar"
                                            className="w-6 h-6 rounded-full"
                                        />
                                    ) : (
                                        <User className="w-6 h-6" />
                                    )}
                                    <span>{user.name}</span>
                                </div>
                            ) : (
                                <Link to="/login" className="flex items-center gap-2 text-[18px] font-normal leading-[24px]">
                                    <User className="w-6 h-6" /> Login / Register
                                </Link>
                            )}
                        </div>
                    </nav>

                    {/* Right Section (Desktop Only) */}
                    <div className="hidden md:flex items-center space-x-[30px] text-[#23A6F0]">
                        {user?.name ? (
                            <div className="relative group">
                                <button className="flex items-center font-bold text-sm">
                                    {user.email ? (
                                        <img
                                            src={`https://www.gravatar.com/avatar/${md5(user.email)}?s=32&d=mp`}
                                            alt="User Avatar"
                                            className="w-8 h-8 rounded-full mr-[5px]"
                                        />
                                    ) : (
                                        <User className="w-4 h-4 mr-[5px]" />
                                    )}
                                    <span>{user.name}</span>
                                    <ChevronDown size={14} className="ml-1" />
                                </button>
                                <div className="absolute right-0 top-full pt-2 hidden group-hover:block z-50 min-w-[200px]">
                                    <div className="bg-white shadow-lg rounded-md border border-gray-100 py-2 flex flex-col items-start text-left">
                                        <Link to="/previous-orders" className="w-full px-4 py-2 hover:bg-gray-50 text-[#737373] hover:text-[#23A6F0] text-sm font-normal">Siparişlerim</Link>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <Link to="/login" className="flex items-center font-bold text-sm hover:text-blue-600 transition-colors">
                                <User className="w-4 h-4 mr-[5px]" />
                                Login / Register
                            </Link>
                        )}
                        <div className="flex items-center space-x-[30px]">
                            <button className="hover:text-blue-600 transition-colors"><Search className="w-4 h-4" /></button>

                            {/* Cart Dropdown */}
                            <div className="relative group pointer-events-auto z-50">
                                <Link to="/cart" className="flex items-center hover:text-blue-600 transition-colors py-4">
                                    <ShoppingCart className="w-4 h-4" />
                                    <span className="ml-1 text-xs font-normal">
                                        {useSelector(state => state.shoppingCart.cart.reduce((sum, item) => sum + item.count, 0))}
                                    </span>
                                </Link>

                                {/* Dropdown Body */}
                                <div className="absolute right-0 top-[80%] w-[320px] bg-white shadow-xl rounded-md overflow-hidden hidden group-hover:block border border-gray-100 animate-fade-in z-50">
                                    <h4 className="p-4 font-bold text-gray-700 border-b">
                                        Sepetim ({useSelector(state => state.shoppingCart.cart.reduce((sum, item) => sum + item.count, 0))} Ürün)
                                    </h4>

                                    <div className="max-h-[300px] overflow-y-auto">
                                        {useSelector(state => state.shoppingCart.cart).map((item, idx) => (
                                            <div key={idx} className="flex gap-4 p-4 border-b hover:bg-gray-50">
                                                <div className="w-[60px] h-[80px] rounded object-cover overflow-hidden flex-shrink-0 border bg-gray-100">
                                                    <img
                                                        src={(item.product.images && item.product.images[0] && item.product.images[0].url) || (Array.isArray(item.product.images) ? item.product.images[0] : item.product.images) || "https://via.placeholder.com/60"}
                                                        alt={item.product.name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div className="flex flex-col justify-between flex-grow">
                                                    <h5 className="font-bold text-sm text-[#252B42] line-clamp-2">{item.product.name}</h5>
                                                    <div className="flex justify-between items-center mt-2">
                                                        <span className="text-xs text-gray-500">Adet: {item.count}</span>
                                                        <span className="font-bold text-[#23A6F0] text-sm">
                                                            ${(item.product.price * item.count).toFixed(2)}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        {useSelector(state => state.shoppingCart.cart).length === 0 && (
                                            <div className="p-8 text-center text-gray-500 text-sm">Sepetiniz boş</div>
                                        )}
                                    </div>

                                    <div className="p-4 flex gap-2">
                                        <Link to="/cart" className="flex-1 py-3 border border-gray-300 rounded text-center text-sm font-bold text-gray-700 hover:bg-gray-50">
                                            Sepete Git
                                        </Link>
                                        <Link to="/checkout" className="flex-1 py-3 bg-[#ER7C40] bg-orange-500 rounded text-center text-sm font-bold text-white hover:bg-orange-600">
                                            Siparişi Tamamla
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <button className="flex items-center hover:text-blue-600 transition-colors">
                                <Heart className="w-4 h-4" />
                                <span className="ml-1 text-xs font-normal">0</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
