import React from 'react';
import { bestsellerProducts } from '../../data/homeData';

const BestsellerProducts = () => {
    // Figma görselinde 1 satır (4 ürün) var. Kullanıcı isteği üzerine 4'e düşürüldü.
    const products = bestsellerProducts.slice(0, 4);

    return (
        <section className="bg-[#FAFAFA] py-12 flex justify-center">
            {/* Container width 1124px from Figma */}
            <div className="w-full max-w-[1124px] flex flex-col items-center gap-6 px-4 md:px-0">

                {/* Header Section */}
                <div className="w-full max-w-[1042px] flex flex-col gap-2.5">
                    <h3 className="font-['Montserrat'] font-bold text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42] text-left">
                        BESTSELLER PRODUCTS
                    </h3>
                    {/* Line Separator */}
                    <div className="w-full h-[2px] bg-[#ECECEC]"></div>
                </div>

                {/* Product Grid */}
                <div className="w-full max-w-[1049px] flex flex-wrap justify-center md:justify-start gap-[30px]">
                    {products.map((product) => (
                        <div key={product.id} className="w-[238px] flex flex-col bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                            {/* Image Area - Fixed Height 280px */}
                            <div className="w-full h-[280px] relative overflow-hidden">
                                <img
                                    src={product.image}
                                    className="absolute inset-0 w-full h-full object-cover"
                                    alt={product.title}
                                />
                            </div>

                            {/* Content Area */}
                            <div className="p-[25px] flex flex-col gap-2.5 items-start">
                                <h5 className="font-['Montserrat'] font-bold text-[16px] leading-[24px] text-[#252B42]">
                                    {product.title}
                                </h5>
                                <span className="font-['Montserrat'] font-bold text-[14px] leading-[24px] text-[#737373]">
                                    {product.category}
                                </span>
                                <div className="flex gap-[5px]">
                                    <span className="font-['Montserrat'] font-bold text-[16px] leading-[24px] text-[#BDBDBD]">
                                        {product.price}
                                    </span>
                                    <span className="font-['Montserrat'] font-bold text-[16px] leading-[24px] text-[#23856D]">
                                        {product.salePrice}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default BestsellerProducts;
