import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

import hero1 from '../assets/teampage/1.png';
import hero2 from '../assets/teampage/2.png';
import hero3 from '../assets/teampage/3.png';
import hero4 from '../assets/teampage/4.png';
import hero5 from '../assets/teampage/5.png';

import user1 from '../assets/teampage/team-1-user-1.jpg';
import user2 from '../assets/teampage/team-1-user-2.jpg';
import user3 from '../assets/teampage/team-1-user-3.jpg';
import user4 from '../assets/teampage/team-1-user-4.jpg';
import user5 from '../assets/teampage/team-1-user-5.jpg';
import user6 from '../assets/teampage/team-1-user-6.jpg';
import user7 from '../assets/teampage/team-1-user-7.jpg';
import user8 from '../assets/teampage/team-1-user-8.jpg';
import user9 from '../assets/teampage/team-1-user-9.jpg';
import oguzhanImg from '../assets/teampage/oguzhan.png';

const teamMembers = [
    { id: 1, name: 'Gökhan Özdemir', role: 'Project Manager', image: user4 },
    { id: 2, name: 'Oguzhan', role: 'Full Stack Developer', image: oguzhanImg },
    { id: 3, name: 'Member Name', role: 'Profession', image: user3 },
    { id: 4, name: 'Member Name', role: 'Profession', image: user1 },
    { id: 5, name: 'Member Name', role: 'Profession', image: user5 },
    { id: 6, name: 'Member Name', role: 'Profession', image: user6 },
    { id: 7, name: 'Member Name', role: 'Profession', image: user7 },
    { id: 8, name: 'Member Name', role: 'Profession', image: user8 },
    { id: 9, name: 'Member Name', role: 'Profession', image: user9 },
];

const TeamPage = () => {
    return (
        <div className="bg-white">
            <div className="container mx-auto px-4 py-12 text-center">
                <h5 className="font-['Montserrat'] font-bold text-[16px] leading-[24px] text-[#737373] mb-4">
                    WHAT WE DO
                </h5>
                <h1 className="font-['Montserrat'] font-bold text-[40px] md:text-[58px] leading-[50px] md:leading-[80px] text-[#252B42] mb-4">
                    Innovation tailored for you
                </h1>
                <div className="flex items-center justify-center gap-[15px] font-['Montserrat'] font-bold text-[14px] leading-[24px]">
                    <Link to="/" className="text-[#252B42]">Home</Link>
                    <span className="text-[#BDBDBD]">{'>'}</span>
                    <span className="text-[#737373]">Team</span>
                </div>
            </div>

            <div className="container mx-auto px-0 md:px-0 max-w-[1440px]">
                <div className="grid grid-cols-1 lg:grid-cols-[700px_1fr] gap-[10px] mb-20 h-auto lg:h-[530px]">
                    <div className="h-[530px] lg:h-full w-full">
                        <img
                            src={hero1}
                            alt="Main Hero"
                            className="w-full h-full object-cover lg:object-fill"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-[10px] h-full">
                        <img src={hero2} className="w-full h-[260px] object-cover lg:object-fill" alt="Gallery 1" />
                        <img src={hero3} className="w-full h-[260px] object-cover lg:object-fill md:rounded-tr-lg" alt="Gallery 2" />
                        <img src={hero4} className="w-full h-[260px] object-cover lg:object-fill" alt="Gallery 3" />
                        <img src={hero5} className="w-full h-[260px] object-cover lg:object-fill md:rounded-br-lg" alt="Gallery 4" />
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-[112px]">
                <h2 className="font-['Montserrat'] font-bold text-[40px] leading-[50px] text-center text-[#252B42] mb-[112px]">
                    Meet Our Team
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] justify-items-center max-w-[1050px] mx-auto">
                    {teamMembers.map((member) => (
                        <div key={member.id} className="flex flex-col items-center w-[316px] h-[383px] bg-white">
                            <div className="w-full h-[231px]">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                            <div className="flex flex-col items-center p-[30px] gap-[10px] w-full">
                                <h5 className="font-['Montserrat'] font-bold text-[16px] leading-[24px] text-center text-[#252B42]">
                                    {member.name}
                                </h5>
                                <h6 className="font-['Montserrat'] font-bold text-[14px] leading-[24px] text-center text-[#737373]">
                                    {member.role}
                                </h6>
                                <div className="flex items-center gap-[20px] mt-[5px]">
                                    <Facebook className="w-[24px] h-[24px] cursor-pointer text-[#23A6F0] fill-current" />
                                    <Instagram className="w-[24px] h-[24px] cursor-pointer text-[#23A6F0]" />
                                    <Twitter className="w-[24px] h-[24px] cursor-pointer text-[#23A6F0] fill-current" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-4 py-[80px] text-center max-w-[1050px] flex flex-col items-center gap-[30px]">
                <h2 className="font-['Montserrat'] font-bold text-[40px] leading-[50px] text-[#252B42] max-w-[550px]">
                    Start your 14 days free trial
                </h2>
                <p className="font-['Montserrat'] font-normal text-[14px] leading-[20px] text-[#737373] max-w-[411px] mx-auto">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.
                </p>
                <button className="bg-[#23A6F0] text-white font-['Montserrat'] font-bold text-[14px] px-[40px] py-[15px] rounded-[5px] hover:bg-blue-600 transition-colors">
                    Try it free now
                </button>
                <div className="flex items-center justify-center gap-[34px] mt-[10px]">
                    <Twitter className="w-[30px] h-[24px] text-[#55ACEE] fill-current cursor-pointer" />
                    <Facebook className="w-[30px] h-[30px] text-[#395185] fill-current cursor-pointer" />
                    <Instagram className="w-[30px] h-[30px] text-[#000000] cursor-pointer" />
                    <Linkedin className="w-[30px] h-[30px] text-[#0A66C2] fill-current cursor-pointer" />
                </div>
            </div>
        </div>
    );
};

export default TeamPage;
