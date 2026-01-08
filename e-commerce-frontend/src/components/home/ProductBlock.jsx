import ProductCard from '../ProductCard';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const ProductBlock = ({ sectionData, products, reverse = false }) => {
    // Tasarımda 6 ürün var
    const visibleProducts = products.slice(0, 6);
    const { title, menuItems, banner } = sectionData;

    return (
        <section className="bg-white">
            <div className="py-[48px] flex justify-center">
                <div className={`w-[85%] flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-6`}>
                    <div className="flex-none w-full lg:w-[389px] h-[500px] lg:h-[796px] overflow-hidden relative shadow-sm group">
                        <div className="relative w-full h-full">
                            <img
                                src={banner.image}
                                alt={banner.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-0 left-0 p-[24px]">
                                <h3 className="font-bold text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42] mb-[5px]">
                                    {banner.title}
                                </h3>
                                <h6 className="font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">
                                    {banner.subtitle}
                                </h6>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 w-full lg:w-[658px]">

                        <div className="flex flex-col md:flex-row justify-between items-center mb-8 border-b border-[#ECECEC] pb-4 h-auto md:h-[50px]">
                            <h3 className="font-bold text-[20px] md:text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42] mb-4 md:mb-0">
                                {title}
                            </h3>

                            <div className="flex items-center space-x-[20px]">
                                <ul className="flex space-x-[15px] font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">
                                    {menuItems.map((item, index) => (
                                        <li key={index} className="hover:text-[#23A6F0] cursor-pointer transition-colors">{item}</li>
                                    ))}
                                </ul>

                                <div className="flex space-x-[10px]">
                                    <button className="w-[44px] h-[44px] rounded-full border border-[#BDBDBD] flex items-center justify-center text-[#BDBDBD] hover:bg-[#23A6F0] hover:text-white hover:border-[#23A6F0] transition-colors">
                                        <ChevronLeft size={16} />
                                    </button>
                                    <button className="w-[44px] h-[44px] rounded-full border border-[#BDBDBD] flex items-center justify-center text-[#BDBDBD] hover:bg-[#23A6F0] hover:text-white hover:border-[#23A6F0] transition-colors">
                                        <ChevronRight size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap justify-between gap-y-10">
                            {visibleProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductBlock;
