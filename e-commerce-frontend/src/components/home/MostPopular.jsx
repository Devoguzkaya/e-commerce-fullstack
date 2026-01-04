import React from 'react';
import { mostPopularData } from '../../data/homeData';
import { ChevronRight } from 'lucide-react';

const MostPopular = () => {
    const { header, description, heroImage, product, features } = mostPopularData;

    return (
        <section className="bg-white flex justify-center mt-12 mb-12">
            <div className="w-[85%]">
                <div className="flex flex-col lg:flex-row mb-12">

                    {/* Sol Taraf: Hero Görsel (Motosikletli Kız) */}
                    <div className="w-full lg:w-1/2 relative h-[500px] lg:h-auto overflow-hidden order-2 lg:order-1">
                        <img
                            src={heroImage}
                            alt="Hero"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>

                    {/* Sağ Taraf: İçerik */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center bg-[#FAFAFA] p-10 lg:p-20 order-1 lg:order-2">
                        <h3 className="font-['Montserrat'] font-bold text-[24px] lg:text-[40px] leading-[32px] lg:leading-[50px] tracking-[0.1px] text-[#252B42] mb-[30px]">
                            {header}
                        </h3>
                        <p className="font-['Montserrat'] font-normal text-[14px] leading-[20px] tracking-[0.2px] text-[#737373] mb-[30px] max-w-[350px]">
                            {description}
                        </p>

                        {/* İç Ürün Kartı */}
                        <div className="flex flex-col sm:flex-row items-center gap-[30px] w-full">
                            <div className="w-[100px] sm:w-[150px] h-[150px] sm:h-[200px] overflow-hidden rounded-md flex-shrink-0">
                                <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h5 className="font-['Montserrat'] font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]">
                                    {product.title}
                                </h5>
                                <div className="text-[#737373] font-['Montserrat'] text-[14px] font-bold">
                                    {product.sales}
                                </div>
                                <div className="flex gap-[5px] font-['Montserrat'] font-bold text-[16px] leading-[24px] tracking-[0.1px]">
                                    <span className="text-[#BDBDBD]">{product.originalPrice}</span>
                                    <span className="text-[#23856D]">{product.salePrice}</span>
                                </div>
                                <div className="flex gap-[6px] mt-2">
                                    {product.colors.map((color, idx) => (
                                        <span key={idx} className="w-4 h-4 rounded-full" style={{ backgroundColor: color }}></span>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Alt Kısım: Sayısal Özellik Listesi (1, 2, 3, 4) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col gap-4">
                            <h3 className="font-['Montserrat'] font-bold text-[40px] leading-[57px] tracking-[0.2px] text-[#E74040]">
                                {index + 1}.
                            </h3>
                            <h5 className="font-['Montserrat'] font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]">
                                {feature}
                            </h5>
                            <p className="font-['Montserrat'] font-normal text-[14px] leading-[20px] tracking-[0.2px] text-[#737373]">
                                Things on a very small scale ...
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MostPopular;
