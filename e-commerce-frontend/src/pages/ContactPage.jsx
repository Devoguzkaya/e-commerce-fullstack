import React from 'react';
import headerBg from '../assets/contact.png';

export default function ContactPage() {
    return (
        <div className="bg-white">
            <div className="relative py-10 md:pt-[160px] md:pb-[112px] flex items-center justify-center min-h-auto md:min-h-[446px]">
                <img
                    src={headerBg}
                    alt="Contact Background"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />

                <div className="container mx-auto px-4 flex flex-col items-center relative z-10 w-full max-w-[1050px]">

                    <div className="flex flex-col items-center gap-[30px] w-full max-w-[600px] text-center">
                        <h2 className="font-['Montserrat'] font-bold text-[30px] md:text-[40px] leading-[35px] md:leading-[50px] tracking-[0.2px] text-[#252B42]">
                            Questions & Answers
                        </h2>

                        <p className="font-['Montserrat'] font-medium text-[14px] leading-[20px] tracking-[0.2px] text-[#737373]">
                            Problems trying to resolve the conflict between the two major realms of Classical physics:
                        </p>

                        <a href="tel:+12255550118" className="font-['Montserrat'] font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#23A6F0]">
                            CONTACT US
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
}
