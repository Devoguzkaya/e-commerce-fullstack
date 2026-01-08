import React, { useState } from 'react';
import { Star, Heart, ShoppingCart, Eye, ChevronLeft, ChevronRight } from 'lucide-react';

const ProductHero = ({ product }) => {
    const [activeImage, setActiveImage] = useState(product.images[0]);

    const handleNext = () => {
        const currentIndex = product.images.indexOf(activeImage);
        const nextIndex = (currentIndex + 1) % product.images.length;
        setActiveImage(product.images[nextIndex]);
    };

    const handlePrev = () => {
        const currentIndex = product.images.indexOf(activeImage);
        const prevIndex = (currentIndex - 1 + product.images.length) % product.images.length;
        setActiveImage(product.images[prevIndex]);
    };

    return (
        <div className="bg-[#FAFAFA] pb-[48px]">
            <div className="w-[73%] mx-auto">
                <div className="flex flex-col lg:flex-row gap-[30px] items-start">

                    {/* LEFT: Image Carousel (Fluid Width) */}
                    <div className="flex-1 w-full flex flex-col gap-4">
                        {/* Main Image */}
                        <div className="w-full h-[300px] lg:h-[450px] rounded-[5px] overflow-hidden relative shadow-sm">
                            <img
                                src={activeImage}
                                alt={product.title}
                                className="w-full h-full object-cover animate-fade-in transition-opacity duration-300"
                            />
                            {/* Arrows */}
                            <button
                                onClick={handlePrev}
                                className="absolute left-[20px] top-1/2 -translate-y-1/2 text-white bg-transparent outline-none hover:scale-110 transition-transform"
                            >
                                <ChevronLeft size={44} strokeWidth={1} />
                            </button>
                            <button
                                onClick={handleNext}
                                className="absolute right-[20px] top-1/2 -translate-y-1/2 text-white bg-transparent outline-none hover:scale-110 transition-transform"
                            >
                                <ChevronRight size={44} strokeWidth={1} />
                            </button>
                        </div>

                        {/* Thumbnails (100x75px) */}
                        <div className="flex items-center gap-[19px] overflow-x-auto pb-2">
                            {product.images.map((img, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => setActiveImage(img)}
                                    className={`flex-none w-[100px] h-[75px] rounded-[5px] overflow-hidden cursor-pointer transition-all ${activeImage === img ? 'opacity-100 ring-2 ring-[#23A6F0]' : 'opacity-60 hover:opacity-100'}`}
                                >
                                    <img src={img} alt="" className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: Product Info (Fluid Width) */}
                    <div className="flex-1 w-full pt-[11px] lg:px-[24px]">
                        <h4 className="font-normal text-[20px] leading-[30px] tracking-[0.2px] text-[#252B42] mb-[12px]">
                            {product.title}
                        </h4>

                        {/* Rating */}
                        <div className="flex items-center gap-[10px] mb-[20px]">
                            <div className="flex items-center gap-[5px] text-[#F3CD03]">
                                {[...Array(4)].map((_, i) => (
                                    <Star key={i} size={22} fill="#F3CD03" strokeWidth={0} />
                                ))}
                                <Star size={22} fill="none" stroke="#F3CD03" strokeWidth={2} />
                            </div>
                            <span className="font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">
                                {product.reviews} Reviews
                            </span>
                        </div>

                        {/* Price */}
                        <h5 className="font-bold text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42] mb-[5px]">
                            {product.price}
                        </h5>
                        <div className="flex items-center gap-[5px] mb-[32px]">
                            <span className="font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">Availability :</span>
                            <span className="font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#23A6F0]">{product.availability}</span>
                        </div>

                        {/* Description */}
                        <p className="font-normal text-[14px] leading-[20px] tracking-[0.2px] text-[#858585] mb-[32px]">
                            {product.description}
                        </p>

                        <hr className="border-[#BDBDBD] mb-[29px]" />

                        {/* Colors */}
                        <div className="flex items-center gap-[10px] mb-[67px]">
                            {product.colors.map((color, idx) => (
                                <div key={idx} className="w-[30px] h-[30px] rounded-full cursor-pointer hover:scale-110 transition-transform shadow-sm" style={{ backgroundColor: color }}></div>
                            ))}
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-[10px]">
                            <button className="h-[44px] px-[20px] py-[10px] bg-[#23A6F0] text-white font-bold text-[14px] leading-[24px] tracking-[0.2px] rounded-[5px] hover:bg-blue-600 transition-colors">
                                Select Options
                            </button>
                            <button className="w-[40px] h-[40px] rounded-full border border-[#E8E8E8] bg-white flex items-center justify-center text-[#252B42] hover:bg-gray-50 transition-colors">
                                <Heart size={20} />
                            </button>
                            <button className="w-[40px] h-[40px] rounded-full border border-[#E8E8E8] bg-white flex items-center justify-center text-[#252B42] hover:bg-gray-50 transition-colors">
                                <ShoppingCart size={20} />
                            </button>
                            <button className="w-[40px] h-[40px] rounded-full border border-[#E8E8E8] bg-white flex items-center justify-center text-[#252B42] hover:bg-gray-50 transition-colors">
                                <Eye size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductHero;
