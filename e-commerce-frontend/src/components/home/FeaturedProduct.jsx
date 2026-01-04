import React from 'react';
import { featuredProductData } from '../../data/homeData';

const FeaturedProduct = () => {
    const { sectionTitle, description, mainImage, product } = featuredProductData;

    return (
        <section className="bg-white flex justify-center py-12">
            <div className="w-[85%] max-w-[1075px]">
                <div className="flex flex-col lg:flex-row gap-0 lg:h-[784px]">

                    {/* Left Side: Content */}
                    <div className="w-full lg:w-[37%] flex flex-col justify-center items-center text-center p-10 lg:py-20 bg-[#FAFAFA]">
                        <h3 className="font-['Montserrat'] font-bold text-[24px] lg:text-[40px] leading-[32px] lg:leading-[50px] tracking-[0.1px] text-[#252B42] mb-4">
                            {sectionTitle}
                        </h3>
                        <p className="font-['Montserrat'] font-normal text-[14px] leading-[20px] tracking-[0.2px] text-[#737373] mb-8 max-w-[350px]">
                            {description}
                        </p>

                        {/* Product Image */}
                        <div className="w-[180px] lg:w-[220px] mb-6 relative">
                            <img src={product.image} alt={product.title} className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300" />
                        </div>

                        {/* Details */}
                        <h5 className="font-['Montserrat'] font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42] mb-2">
                            {product.title}
                        </h5>

                        <div className="text-[#737373] text-[14px] font-bold mb-3 flex items-center gap-2">
                            <span className="text-[#BDBDBD] font-bold">{product.sales}</span>
                        </div>

                        <div className="flex gap-2 mb-4">
                            <span className="text-[#BDBDBD] font-bold text-[16px]">{product.originalPrice}</span>
                            <span className="text-[#23856D] font-bold text-[16px]">{product.salePrice}</span>
                        </div>

                        <div className="flex gap-2">
                            {product.colors.map((color, index) => (
                                <span key={index} className={`w-4 h-4 rounded-full cursor-pointer hover:scale-110 transition-transform`} style={{ backgroundColor: color }}></span>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Image */}
                    <div className="w-full lg:w-[63%] relative h-[500px] lg:h-auto overflow-hidden">
                        <img
                            src={mainImage}
                            alt="Featured"
                            className="absolute inset-0 w-full h-full object-contain object-left"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FeaturedProduct;
