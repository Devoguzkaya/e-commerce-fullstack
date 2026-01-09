import React, { useState, useRef } from 'react';
import { Play, Facebook, Instagram, Twitter } from 'lucide-react';

import hooli from '../assets/hoolisvg.svg';
import lyft from '../assets/lyftsvg.svg';
import stripe from '../assets/stripesvg.svg';
import aws from '../assets/awssvg.svg';
import reddit from '../assets/redditsvg.svg';
import robinhood from '../assets/robinhoodsvg.svg';

import team1 from '../assets/teampage/team-1-user-1.jpg';
import team2 from '../assets/teampage/team-1-user-2.jpg';
import team3 from '../assets/teampage/team-1-user-3.jpg';

import yellowDress from '../assets/about/yellowdress.png';
import pinkyGirl from '../assets/about/pinkygirl.png';
import videoCover from '../assets/about/videocover.png';

const AboutPage = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const handlePlayVideo = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    return (
        <div className="bg-white">
            <div className="container mx-auto px-4 py-10 lg:py-20 flex flex-col items-center lg:flex-row lg:items-center gap-10 lg:gap-0 lg:h-[600px]">
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-8 lg:w-1/2 z-10">
                    <h5 className="font-['Montserrat'] font-bold text-[16px] text-[#252B42] hidden lg:block">
                        ABOUT COMPANY
                    </h5>
                    <h1 className="font-['Montserrat'] font-bold text-[40px] lg:text-[58px] text-[#252B42] leading-tight mt-10 lg:mt-0">
                        ABOUT US
                    </h1>
                    <p className="font-['Montserrat'] font-normal text-[20px] text-[#737373] max-w-[376px]">
                        We know how large objects will act, but things on a small scale
                    </p>
                    <button className="bg-[#23A6F0] text-white font-['Montserrat'] font-bold text-[14px] px-[40px] py-[15px] rounded-[5px] hover:bg-blue-600 transition-colors">
                        Get Quote Now
                    </button>
                </div>
                <div className="relative w-full lg:w-1/2 h-[400px] lg:h-[600px] bg-no-repeat bg-center bg-contain" style={{ backgroundImage: `url(${yellowDress})`, backgroundSize: 'contain', backgroundPosition: 'center' }}>
                    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#FFE9EA] rounded-full -z-10 translate-x-[-100px] translate-y-[-100px] hidden lg:block"></div>
                    <div className="absolute top-[35px] left-[40px] w-[295px] h-[295px] bg-[#FFE9EA] rounded-full -z-10 lg:hidden"></div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[100px] lg:gap-10 justify-items-center">
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

            <div className="container mx-auto px-4 py-20 flex justify-center">
                <div className="relative w-[307px] h-[316px] lg:w-[989px] lg:h-[540px] rounded-[20px] overflow-hidden bg-gray-200 shadow-xl group">
                    <video
                        ref={videoRef}
                        controls={isPlaying}
                        className="w-full h-full object-cover"
                        poster={videoCover}
                        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                    >
                        Your browser does not support the video tag.
                    </video>

                    {!isPlaying && (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <button
                                onClick={handlePlayVideo}
                                className="w-[57px] h-[57px] lg:w-[92px] lg:h-[92px] bg-[#23A6F0] rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg cursor-pointer"
                            >
                                <Play className="text-white w-4 h-4 lg:w-8 lg:h-8 fill-current ml-0.5" />
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <div className="container mx-auto px-4 py-20">
                <div className="text-center mb-10 lg:mb-20">
                    <h2 className="font-['Montserrat'] font-bold text-[40px] text-[#252B42] mb-4">Meet Our Team</h2>
                    <p className="font-['Montserrat'] font-normal text-[14px] text-[#737373] max-w-[469px] mx-auto">
                        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-[30px] max-w-[1050px] mx-auto">
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

            <div className="bg-[#FAFAFA] py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-10">
                        <h2 className="font-['Montserrat'] font-bold text-[40px] text-[#252B42] mb-4 leading-[50px]">Big Companies Are Here</h2>
                        <p className="font-['Montserrat'] font-normal text-[14px] text-[#737373] max-w-[547px] mx-auto leading-[20px]">
                            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                        </p>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-center items-center gap-[60px] lg:gap-20 py-10 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
                        <img src={hooli} alt="Hooli" className="h-[50px] lg:h-12" />
                        <img src={lyft} alt="Lyft" className="h-[99px] lg:h-12" />
                        <img src={stripe} alt="Stripe" className="h-[60px] lg:h-12" />
                        <img src={aws} alt="AWS" className="h-[92px] lg:h-12" />
                        <img src={reddit} alt="Reddit" className="h-[142px] lg:h-12" />
                        <img src={robinhood} alt="Robinhood" className="h-[99px] lg:h-12" />
                    </div>
                </div>
            </div>

            <div className="flex w-full lg:h-[636px] bg-[#2A7CC7] text-white">
                <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center h-full sm:py-10">
                    <div className="flex flex-col gap-6 lg:w-1/2 py-20 lg:pl-0 z-10 text-center lg:text-left items-center lg:items-start">
                        <h5 className="font-['Montserrat'] font-bold text-[16px]">WORK WITH US</h5>
                        <h2 className="font-['Montserrat'] font-bold text-[40px] leading-tight">Now Let's grow Yours</h2>
                        <p className="font-['Montserrat'] font-normal text-[14px] leading-6 max-w-[440px]">
                            The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th
                        </p>
                        <button className="border border-white text-white font-['Montserrat'] font-bold text-[14px] px-[40px] py-[15px] rounded-[5px] w-fit hover:bg-white hover:text-[#2A7CC7] transition-colors">
                            Button
                        </button>
                    </div>
                    <div className="lg:w-1/2 h-full hidden lg:block relative">
                        <img
                            src={pinkyGirl}
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
