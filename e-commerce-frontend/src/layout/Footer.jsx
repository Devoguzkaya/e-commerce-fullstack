import React from 'react';
import { Facebook, Instagram, Twitter, Phone, MapPin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="w-full bg-[#252B42] pt-10">
            {/* Main Container */}
            <div className="w-[85%] max-w-[1050px] mx-auto flex flex-col">

                {/* Top Section: CTA */}
                <div className="flex flex-col md:flex-row justify-between items-center py-10 gap-8 md:gap-0 border-b border-[#393E52]">
                    <div className="flex flex-col gap-[10px] w-full md:w-auto">
                        <h3 className="font-['Montserrat'] font-bold text-[24px] leading-[32px] tracking-[0.1px] text-white">
                            Consulting Agency For Your Business
                        </h3>
                        <p className="font-['Montserrat'] font-normal text-[14px] leading-[20px] tracking-[0.2px] text-white">
                            the quick fox jumps over the lazy dog
                        </p>
                    </div>
                    <button className="bg-[#23A6F0] text-white font-['Montserrat'] font-bold text-[14px] leading-[22px] tracking-[0.2px] px-[40px] py-[15px] rounded-[5px] hover:bg-blue-600 transition-colors">
                        Contact Us
                    </button>
                </div>

                {/* Middle Section: Links & Contact */}
                <div className="py-[50px] grid grid-cols-1 md:grid-cols-5 gap-[30px]">
                    {/* Column 1: Company Info */}
                    <div className="flex flex-col gap-[20px]">
                        <h5 className="font-['Montserrat'] font-bold text-[16px] leading-[24px] tracking-[0.1px] text-white">
                            Company Info
                        </h5>
                        <div className="flex flex-col gap-[10px]">
                            {["About Us", "Carrier", "We are hiring", "Blog"].map((item, index) => (
                                <a key={index} href="#" className="font-['Montserrat'] font-bold text-[14px] leading-[24px] tracking-[0.2px] text-white hover:text-[#23A6F0] transition-colors">
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Legal */}
                    <div className="flex flex-col gap-[20px]">
                        <h5 className="font-['Montserrat'] font-bold text-[16px] leading-[24px] tracking-[0.1px] text-white">
                            Legal
                        </h5>
                        <div className="flex flex-col gap-[10px]">
                            {["About Us", "Carrier", "We are hiring", "Blog"].map((item, index) => (
                                <a key={index} href="#" className="font-['Montserrat'] font-bold text-[14px] leading-[24px] tracking-[0.2px] text-white hover:text-[#23A6F0] transition-colors">
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 3: Features */}
                    <div className="flex flex-col gap-[20px]">
                        <h5 className="font-['Montserrat'] font-bold text-[16px] leading-[24px] tracking-[0.1px] text-white">
                            Features
                        </h5>
                        <div className="flex flex-col gap-[10px]">
                            {["Business Marketing", "User Analytic", "Live Chat", "Unlimited Support"].map((item, index) => (
                                <a key={index} href="#" className="font-['Montserrat'] font-bold text-[14px] leading-[24px] tracking-[0.2px] text-white hover:text-[#23A6F0] transition-colors">
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 4: Resources */}
                    <div className="flex flex-col gap-[20px]">
                        <h5 className="font-['Montserrat'] font-bold text-[16px] leading-[24px] tracking-[0.1px] text-white">
                            Resources
                        </h5>
                        <div className="flex flex-col gap-[10px]">
                            {["IOS & Android", "Watch a Demo", "Customers", "API"].map((item, index) => (
                                <a key={index} href="#" className="font-['Montserrat'] font-bold text-[14px] leading-[24px] tracking-[0.2px] text-white hover:text-[#23A6F0] transition-colors">
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 5: Get In Touch */}
                    <div className="flex flex-col gap-[20px]">
                        <h5 className="font-['Montserrat'] font-bold text-[16px] leading-[24px] tracking-[0.1px] text-white">
                            Get In Touch
                        </h5>
                        <div className="flex flex-col gap-[10px]">
                            <div className="flex items-center gap-[10px]">
                                <Phone size={24} className="text-[#23A6F0]" />
                                <span className="font-['Montserrat'] font-bold text-[14px] leading-[24px] tracking-[0.2px] text-white">
                                    (480) 555-0103
                                </span>
                            </div>
                            <div className="flex items-center gap-[10px]">
                                <MapPin size={24} className="text-[#23A6F0]" />
                                <span className="font-['Montserrat'] font-bold text-[14px] leading-[24px] tracking-[0.2px] text-white">
                                    4517 Washington Ave.
                                </span>
                            </div>
                            <div className="flex items-center gap-[10px]">
                                <Mail size={24} className="text-[#23A6F0]" />
                                <span className="font-['Montserrat'] font-bold text-[14px] leading-[24px] tracking-[0.2px] text-white">
                                    debra.holt@example.com
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="bg-[#252B42] w-full py-[25px]">
                <div className="w-[85%] max-w-[1050px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
                    <h6 className="font-['Montserrat'] font-bold text-[14px] leading-[24px] tracking-[0.2px] text-white text-center md:text-left">
                        Made With Love By Finland All Right Reserved
                    </h6>
                    <div className="flex gap-[20px]">
                        <Facebook size={24} className="text-[#23A6F0] hover:text-white transition-colors cursor-pointer" />
                        <Instagram size={24} className="text-[#23A6F0] hover:text-white transition-colors cursor-pointer" />
                        <Twitter size={24} className="text-[#23A6F0] hover:text-white transition-colors cursor-pointer" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
