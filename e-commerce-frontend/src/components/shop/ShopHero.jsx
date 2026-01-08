import React from "react";
import heroImg from "../../assets/shoppage/technology 1.png";
import { Link } from 'react-router-dom';

export default function ShopHero() {
    return (
        <section className="relative w-full overflow-hidden bg-[#FFFFFF] py-8">
            <div className="container mx-auto bg-gradient-to-r from-[#96E9FB] to-[#ABECD6] rounded-[20px] px-6 py-0 lg:px-20">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    {/* LEFT CONTENT */}
                    <div className="space-y-8 flex flex-col items-center text-center lg:items-start lg:text-left z-20 relative pt-20 pb-0 lg:py-0">
                        <h5 className="font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#2A7CC7] uppercase">
                            SUMMER 2020
                        </h5>
                        <h1 className="font-bold text-[40px] leading-[50px] tracking-[0.2px] text-[#252B42] lg:text-[58px] lg:leading-[80px]">
                            NEW COLLECTION
                        </h1>
                        <h4 className="font-normal text-[20px] leading-[30px] tracking-[0.2px] text-[#737373] max-w-[291px] lg:max-w-[380px]">
                            We know how large objects will act, but things on a small scale.
                        </h4>
                        <Link to="/shop" className="inline-flex items-center justify-center rounded-[5px] bg-[#23A6F0] px-[40px] py-[15px] gap-[10px] text-[24px] font-bold leading-[32px] tracking-[0.1px] text-white hover:bg-blue-600">
                            SHOP NOW
                        </Link>
                    </div>

                    {/* RIGHT CONTENT (SVG COMPOSITE) */}
                    <div className="relative flex justify-center lg:justify-end w-full">

                        {/* ------------ DESKTOP SVG (Original) ------------ */}
                        <div className="relative hidden lg:block w-full max-w-[600px] aspect-[700/600]">
                            {/* Desktop Back Circles */}
                            <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" viewBox="0 0 700 600" fill="none">
                                <circle cx="373" cy="308" r="250" fill="white" />
                            </svg>
                            {/* Desktop Image */}
                            <img src={heroImg} alt="New collection model" className="absolute inset-0 w-full h-full object-contain object-bottom z-10" />
                            {/* Desktop Front Circles */}
                            <svg className="absolute inset-0 w-full h-full z-20 pointer-events-none" viewBox="0 0 700 600" fill="none">
                                <circle cx="103" cy="110" r="40" fill="white" />
                                <circle cx="666" cy="191" r="7.6" fill="#977DF4" />
                                <circle cx="95" cy="488" r="7.6" fill="#977DF4" />
                                <circle cx="650" cy="329" r="15.5" fill="white" />
                            </svg>
                        </div>

                        <div className="relative lg:hidden w-full max-w-[388px] aspect-[388/453]">
                            {/* Mobile Back Circles - viewBox offset -80 to shift circles further down */}
                            <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" viewBox="0 -80 388 453" fill="none">
                                {/* Ellipse 26 (Big White): w=294, left=35, top=0 -> cx=182, cy=147, r=147 */}
                                <circle cx="182.6" cy="147.1" r="147.1" fill="white" />
                            </svg>

                            {/* Mobile Image */}
                            {/* User Request: structure 'absolute h-full w-full', and 'object-contain' to prevent cropping */}
                            <div className="absolute h-full w-full z-10">
                                <img src={heroImg} alt="Model" className="w-full h-full object-contain object-bottom" />
                            </div>

                            {/* Mobile Front Circles - viewBox offset -80 */}
                            <svg className="absolute inset-0 w-full h-full z-20 pointer-events-none" viewBox="0 -80 388 453" fill="none">
                                {/* Small White: w=47, left=0, top=7 -> cx=23.5, cy=30.5, r=23.5 */}
                                <circle cx="23.5" cy="30.5" r="23.5" fill="white" />

                                {/* Tiny White: w=18.4, left=337, top=150 -> cx=346, cy=159, r=9.2 */}
                                <circle cx="346.3" cy="159.8" r="9.2" fill="white" />

                                {/* Tiny Purple 1: w=9, left=350, top=74 -> cx=355, cy=78, r=4.5 */}
                                <circle cx="355.3" cy="78.5" r="4.5" fill="#977DF4" />

                                {/* Tiny Purple 2: w=9, left=14, top=248 -> cx=19, cy=253, r=4.5 */}
                                <circle cx="19" cy="253" r="4.5" fill="#977DF4" />
                            </svg>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
