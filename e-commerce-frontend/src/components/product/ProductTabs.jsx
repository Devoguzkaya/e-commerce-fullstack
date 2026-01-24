import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const ProductTabs = ({ product }) => {
    const [activeTab, setActiveTab] = useState('Description');
    const image = product?.images?.[0]?.url || 'https://via.placeholder.com/400';

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
                        <span className="text-[#23856D] ml-2">({product?.sell_count || 0})</span>
                    </button>
                </div>
                <div className="w-full h-px bg-[#ECECEC] mb-[48px]" />

                <div className="animate-fade-in pb-[48px]">
                    {activeTab === 'Description' && (
                        <div className="flex flex-col lg:flex-row gap-[30px]">

                            <div className="flex-1 w-full relative aspect-[332/392] rounded-[5px] overflow-hidden shadow-md">
                                <img
                                    src={image}
                                    alt="Product Detail"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="flex-1 w-full flex flex-col gap-[30px]">
                                <h3 className="font-bold text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42]">
                                    Product Description
                                </h3>
                                <div className="flex flex-col gap-[20px]">
                                    <p className="font-normal text-[14px] leading-[20px] tracking-[0.2px] text-[#737373]">
                                        Discover the perfect blend of style and comfort with our latest collection. Designed for the modern individual, this product features high-quality materials that ensure durability and long-lasting wear.
                                    </p>
                                    <p className="font-normal text-[14px] leading-[20px] tracking-[0.2px] text-[#737373]">
                                        Whether you're dressing up for a special occasion or keeping it casual, this versatile piece adapts to your unique style. The attention to detail is evident in every stitch, providing you with a premium look and feel.
                                    </p>
                                    <p className="font-normal text-[14px] leading-[20px] tracking-[0.2px] text-[#737373]">
                                        Experience the difference with our sustainably sourced fabrics that are gentle on your skin and the environment. Elevate your wardrobe today with this timeless essential.
                                    </p>
                                </div>
                            </div>

                            <div className="flex-1 w-full flex flex-col gap-[30px]">
                                <div>
                                    <h3 className="font-bold text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42] mb-[30px]">
                                        Key Features
                                    </h3>
                                    <ul className="flex flex-col gap-[10px]">
                                        {[
                                            "Premium quality material",
                                            "Modern and stylish design",
                                            "Comfortable fit for all-day wear",
                                            "Durable and long-lasting"
                                        ].map((item, index) => (
                                            <li key={index} className="flex items-center gap-[20px]">
                                                <ChevronRight size={16} className="text-[#737373] min-w-[9px]" strokeWidth={3} />
                                                <span className="font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">
                                                    {item}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="font-bold text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42] mb-[30px]">
                                        Care Instructions
                                    </h3>
                                    <ul className="flex flex-col gap-[10px]">
                                        {[
                                            "Machine wash cold",
                                            "Do not bleach",
                                            "Tumble dry low"
                                        ].map((item, index) => (
                                            <li key={index} className="flex items-center gap-[20px]">
                                                <ChevronRight size={16} className="text-[#737373] min-w-[9px]" strokeWidth={3} />
                                                <span className="font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">
                                                    {item}
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
