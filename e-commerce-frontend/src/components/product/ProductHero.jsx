import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/slices/shoppingCartSlice';
import { Star, Heart, ShoppingCart, Eye, ChevronLeft, ChevronRight } from 'lucide-react';

const ProductHero = ({ product }) => {
    const dispatch = useDispatch();
    const images = product.images?.map(img => img.url) || ['https://via.placeholder.com/600'];
    const title = product.name || product.title;
    const desc = product.description;
    const price = typeof product.price === 'number' ? `$${product.price.toFixed(2)}` : product.price;
    const stock = product.stock > 0 ? 'In Stock' : 'Out of Stock';
    const rating = product.rating || 0;
    const reviews = product.sell_count || 0;
    const colors = product.colors || ['#23A6F0', '#23856D', '#E77C40', '#252B42'];

    const [activeImage, setActiveImage] = useState(images[0]);

    React.useEffect(() => {
        setActiveImage(images[0]);
    }, [product]);

    const handleNext = () => {
        const currentIndex = images.indexOf(activeImage);
        const nextIndex = (currentIndex + 1) % images.length;
        setActiveImage(images[nextIndex]);
    };

    const handlePrev = () => {
        const currentIndex = images.indexOf(activeImage);
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        setActiveImage(images[prevIndex]);
    };

    return (
        <div className="bg-[#FAFAFA] pb-[48px]">
            <div className="w-[73%] mx-auto">
                <div className="flex flex-col lg:flex-row gap-[30px] items-start">

                    <div className="flex-1 w-full flex flex-col gap-4">
                        <div className="w-full h-[300px] lg:h-[450px] rounded-[5px] overflow-hidden relative shadow-sm">
                            <img
                                src={activeImage}
                                alt={title}
                                className="w-full h-full object-contain bg-white animate-fade-in transition-opacity duration-300"
                            />
                            {images.length > 1 && (
                                <>
                                    <button
                                        onClick={handlePrev}
                                        className="absolute left-[20px] top-1/2 -translate-y-1/2 text-black/50 hover:text-black bg-transparent outline-none hover:scale-110 transition-transform"
                                    >
                                        <ChevronLeft size={44} strokeWidth={1} />
                                    </button>
                                    <button
                                        onClick={handleNext}
                                        className="absolute right-[20px] top-1/2 -translate-y-1/2 text-black/50 hover:text-black bg-transparent outline-none hover:scale-110 transition-transform"
                                    >
                                        <ChevronRight size={44} strokeWidth={1} />
                                    </button>
                                </>
                            )}
                        </div>

                        <div className="flex items-center gap-[19px] overflow-x-auto pb-2">
                            {images.map((img, idx) => (
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

                    <div className="flex-1 w-full pt-[11px] lg:px-[24px]">
                        <h4 className="font-normal text-[20px] leading-[30px] tracking-[0.2px] text-[#252B42] mb-[12px]">
                            {title}
                        </h4>

                        <div className="flex items-center gap-[10px] mb-[20px]">
                            <div className="flex items-center gap-[5px] text-[#F3CD03]">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={22} fill={i < Math.round(rating) ? "#F3CD03" : "none"} stroke="#F3CD03" strokeWidth={i < Math.round(rating) ? 0 : 2} />
                                ))}
                            </div>
                            <span className="font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">
                                {reviews} Reviews
                            </span>
                        </div>

                        <h5 className="font-bold text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42] mb-[5px]">
                            {price}
                        </h5>
                        <div className="flex items-center gap-[5px] mb-[32px]">
                            <span className="font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">Availability :</span>
                            <span className="font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#23A6F0]">{stock}</span>
                        </div>

                        <p className="font-normal text-[14px] leading-[20px] tracking-[0.2px] text-[#858585] mb-[32px]">
                            {desc}
                        </p>

                        <hr className="border-[#BDBDBD] mb-[29px]" />

                        <div className="flex items-center gap-[10px] mb-[67px]">
                            {colors.map((color, idx) => (
                                <div key={idx} className="w-[30px] h-[30px] rounded-full cursor-pointer hover:scale-110 transition-transform shadow-sm" style={{ backgroundColor: color }}></div>
                            ))}
                        </div>

                        <div className="flex items-center gap-[10px]">
                            <button
                                onClick={() => dispatch(addToCart(product))}
                                className="h-[44px] px-[20px] py-[10px] bg-[#23A6F0] text-white font-bold text-[14px] leading-[24px] tracking-[0.2px] rounded-[5px] hover:bg-blue-600 transition-colors"
                            >
                                Add to Cart
                            </button>
                            <button className="w-[40px] h-[40px] rounded-full border border-[#E8E8E8] bg-white flex items-center justify-center text-[#252B42] hover:bg-gray-50 transition-colors">
                                <Heart size={20} />
                            </button>
                            <button
                                onClick={() => dispatch(addToCart(product))}
                                className="w-[40px] h-[40px] rounded-full border border-[#E8E8E8] bg-white flex items-center justify-center text-[#252B42] hover:bg-gray-50 transition-colors"
                            >
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
