import React from 'react';
import { Play, Facebook, Instagram, Twitter } from 'lucide-react';

// Client Logos
import hooli from '../assets/hoolisvg.svg';
import lyft from '../assets/lyftsvg.svg';
import stripe from '../assets/stripesvg.svg';
import aws from '../assets/awssvg.svg';
import reddit from '../assets/redditsvg.svg';
import robinhood from '../assets/robinhoodsvg.svg';

// Team Images (Reusing likely assets or placeholders)
import team1 from '../assets/teampage/team-1-user-1.jpg';
import team2 from '../assets/teampage/team-1-user-2.jpg';
import team3 from '../assets/teampage/team-1-user-3.jpg';

const AboutPage = () => {
    return (
        <div className="bg-white">
            {/* 1. Hero Section */}
            <div className="container mx-auto px-4 py-20 lg:py-0 lg:h-[600px] flex items-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center w-full">
                    {/* Text Content */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-8">
                        <h5 className="font-['Montserrat'] font-bold text-[16px] text-[#252B42] hidden lg:block">
                            ABOUT COMPANY
                        </h5>
                        <h1 className="font-['Montserrat'] font-bold text-[40px] lg:text-[58px] text-[#252B42] leading-tight">
                            ABOUT US
                        </h1>
                        <p className="font-['Montserrat'] font-normal text-[20px] text-[#737373] max-w-[376px]">
                            We know how large objects will act, but things on a small scale
                        </p>
                        <button className="bg-[#23A6F0] text-white font-['Montserrat'] font-bold text-[14px] px-[40px] py-[15px] rounded-[5px] hover:bg-blue-600 transition-colors">
                            Get Quote Now
                        </button>
                    </div>
                    {/* Image */}
                    <div className="relative w-full h-[400px] lg:h-[600px] bg-no-repeat bg-center bg-contain" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1595991209241-354364c361e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)', backgroundSize: 'contain', backgroundPosition: 'center' }}>
                        {/* Pink Circles (Decorative) - Simplified */}
                        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#FFE9EA] rounded-full -z-10 translate-x-[-100px] translate-y-[-100px] hidden lg:block"></div>
                    </div>
                </div>
            </div>

            {/* 2. Stats Section */}
            <div className="container mx-auto px-4 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
                    <div className="flex flex-col items-center">
                        <h1 className="font-['Montserrat'] font-bold text-[58px] text-[#252B42]">15K</h1>
                        <h5 className="font-['Montserrat'] font-bold text-[16px] text-[#737373]">Happy Customers</h5>
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="font-['Montserrat'] font-bold text-[58px] text-[#252B42]">150K</h1>
                        <h5 className="font-['Montserrat'] font-bold text-[16px] text-[#737373]">Monthly Visitors</h5>
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="font-['Montserrat'] font-bold text-[58px] text-[#252B42]">15</h1>
                        <h5 className="font-['Montserrat'] font-bold text-[16px] text-[#737373]">Countries Worldwide</h5>
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="font-['Montserrat'] font-bold text-[58px] text-[#252B42]">100+</h1>
                        <h5 className="font-['Montserrat'] font-bold text-[16px] text-[#737373]">Top Partners</h5>
                    </div>
                </div>
            </div>

            {/* 3. Video Section */}
            <div className="container mx-auto px-4 py-20 flex justify-center">
                <div className="relative w-full max-w-[989px] h-[540px] rounded-[20px] overflow-hidden bg-gray-200">
                    <img
                        src="https://images.unsplash.com/photo-1536768138796-3c9b43332305?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                        alt="Video Cover"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button className="w-[92px] h-[92px] bg-[#23A6F0] rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                            <Play className="text-white w-8 h-8 fill-current" />
                        </button>
                    </div>
                </div>
            </div>

            {/* 4. Team Section */}
            <div className="container mx-auto px-4 py-20">
                <div className="text-center mb-20">
                    <h2 className="font-['Montserrat'] font-bold text-[40px] text-[#252B42] mb-4">Meet Our Team</h2>
                    <p className="font-['Montserrat'] font-normal text-[14px] text-[#737373] max-w-[469px] mx-auto">
                        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
                    {[team1, team2, team3].map((img, idx) => (
                        <div key={idx} className="flex flex-col items-center w-[316px]">
                            <div className="w-full h-[231px] overflow-hidden">
                                <img src={img} alt="Team Member" className="w-full h-full object-cover" />
                            </div>
                            <div className="flex flex-col items-center p-[30px] gap-2">
                                <h5 className="font-['Montserrat'] font-bold text-[16px] text-[#252B42]">Username</h5>
                                <h6 className="font-['Montserrat'] font-bold text-[14px] text-[#737373]">Profession</h6>
                                <div className="flex items-center gap-5 text-[#23A6F0]">
                                    <Facebook className="w-6 h-6 fill-current cursor-pointer" />
                                    <Instagram className="w-6 h-6 cursor-pointer" />
                                    <Twitter className="w-6 h-6 fill-current cursor-pointer" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 5. Clients Section */}
            <div className="bg-[#FAFAFA] py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-10">
                        <h2 className="font-['Montserrat'] font-bold text-[40px] text-[#252B42] mb-4">Big Companies Are Here</h2>
                        <p className="font-['Montserrat'] font-normal text-[14px] text-[#737373] max-w-[547px] mx-auto">
                            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 py-10 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
                        <img src={hooli} alt="Hooli" className="h-10 md:h-12" />
                        <img src={lyft} alt="Lyft" className="h-10 md:h-12" />
                        <img src={stripe} alt="Stripe" className="h-10 md:h-12" />
                        <img src={aws} alt="AWS" className="h-10 md:h-12" />
                        <img src={reddit} alt="Reddit" className="h-10 md:h-12" />
                        <img src={robinhood} alt="Robinhood" className="h-10 md:h-12" />
                    </div>
                </div>
            </div>

            {/* 6. Work With Us Section */}
            <div className="flex w-full h-[636px] bg-[#2A7CC7] text-white">
                <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center h-full">
                    {/* Text Left */}
                    <div className="flex flex-col gap-6 lg:w-1/2 py-10 lg:pl-0 z-10">
                        <h5 className="font-['Montserrat'] font-bold text-[16px]">WORK WITH US</h5>
                        <h2 className="font-['Montserrat'] font-bold text-[40px] leading-tight">Now Let's grow Yours</h2>
                        <p className="font-['Montserrat'] font-normal text-[14px] leading-6 max-w-[440px]">
                            The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th
                        </p>
                        <button className="border border-white text-white font-['Montserrat'] font-bold text-[14px] px-[40px] py-[15px] rounded-[5px] w-fit hover:bg-white hover:text-[#2A7CC7] transition-colors">
                            Button
                        </button>
                    </div>
                    {/* Image Right */}
                    <div className="lg:w-1/2 h-full hidden lg:block relative">
                        <img
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            className="absolute inset-0 w-full h-full object-cover"
                            alt="Work With Us"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
