import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import pinkRoom from '../../assets/detailpage/pingroom.png';
import pinkRoomShadow from '../../assets/detailpage/pinkroomshadow.png';

const ProductTabs = () => {
    const [activeTab, setActiveTab] = useState('Description');

    return (
        <div className="bg-white pb-[48px]">
            <div className="w-[73%] mx-auto">
                <div className="flex justify-center items-center gap-8 pt-[24px] pb-[24px]">
                    <button
                        onClick={() => setActiveTab('Description')}
                        className={`font-semibold text-[14px] leading-[24px] tracking-[0.2px] p-[24px] ${activeTab === 'Description' ? 'text-[#737373] hover:text-[#252B42] font-semibold' : 'text-[#737373] font-bold'}`}
                    >
                        Description
                    </button>
                    <button
                        onClick={() => setActiveTab('Additional Information')}
                        className={`font-bold text-[14px] leading-[24px] tracking-[0.2px] p-[24px] ${activeTab === 'Additional Information' ? 'text-[#737373] hover:text-[#252B42]' : 'text-[#737373]'}`}
                    >
                        Additional Information
                    </button>
                    <button
                        onClick={() => setActiveTab('Reviews')}
                        className={`font-bold text-[14px] leading-[24px] tracking-[0.2px] p-[24px] ${activeTab === 'Reviews' ? 'text-[#737373] hover:text-[#252B42]' : 'text-[#737373]'}`}
                    >
                        Reviews
                        <span className="text-[#23856D] ml-2">(0)</span>
                    </button>
                </div>
                <div className="w-full h-px bg-[#ECECEC] mb-[48px]" />

                <div className="animate-fade-in pb-[48px]">
                    {activeTab === 'Description' && (
                        <div className="flex flex-col lg:flex-row gap-[30px]">

                            <div className="flex-1 w-full relative aspect-[332/392]">
                                <img
                                    src={pinkRoomShadow}
                                    alt=""
                                    className="absolute left-[5px] top-0 w-full h-full object-cover rounded-[5px] opacity-100 z-0"
                                />
                                <div className="relative z-10 w-[95%] h-[97%] bg-[#f5f5f5] rounded-[5px] overflow-hidden ml-0">
                                    <img
                                        src={pinkRoom}
                                        alt="Interior"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            <div className="flex-1 w-full flex flex-col gap-[30px]">
                                <h3 className="font-bold text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42]">
                                    the quick fox jumps over
                                </h3>
                                <div className="flex flex-col gap-[20px]">
                                    <p className="font-normal text-[14px] leading-[20px] tracking-[0.2px] text-[#737373]">
                                        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                                    </p>
                                    <p className="font-normal text-[14px] leading-[20px] tracking-[0.2px] text-[#737373]">
                                        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                                    </p>
                                    <p className="font-normal text-[14px] leading-[20px] tracking-[0.2px] text-[#737373]">
                                        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                                    </p>
                                </div>
                            </div>

                            <div className="flex-1 w-full flex flex-col gap-[30px]">
                                <div>
                                    <h3 className="font-bold text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42] mb-[30px]">
                                        the quick fox jumps over
                                    </h3>
                                    <ul className="flex flex-col gap-[10px]">
                                        {[1, 2, 3, 4].map((item) => (
                                            <li key={item} className="flex items-center gap-[20px]">
                                                <ChevronRight size={16} className="text-[#737373] min-w-[9px]" strokeWidth={3} />
                                                <span className="font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">
                                                    the quick fox jumps over the lazy dog
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="font-bold text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42] mb-[30px]">
                                        the quick fox jumps over
                                    </h3>
                                    <ul className="flex flex-col gap-[10px]">
                                        {[1, 2, 3].map((item) => (
                                            <li key={item} className="flex items-center gap-[20px]">
                                                <ChevronRight size={16} className="text-[#737373] min-w-[9px]" strokeWidth={3} />
                                                <span className="font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">
                                                    the quick fox jumps over the lazy dog
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                        </div>
                    )}
                    {activeTab === 'Additional Information' && (
                        <div className="text-center py-10 text-gray-500">Additional Info Content</div>
                    )}
                    {activeTab === 'Reviews' && (
                        <div className="text-center py-10 text-gray-500">Reviews Content</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductTabs;
