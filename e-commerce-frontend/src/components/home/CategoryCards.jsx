import React from 'react';
import { categoriesData } from '../../data/categories';

const CategoryCards = () => {
    const cards = categoriesData;

    return (
        <section className="bg-[#FAFAFA] py-8 flex justify-center">
            <div className="w-[85%]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {cards.map((card) => (
                        <div key={card.id} className="bg-white h-[230px] relative shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group">

                            <div className="absolute inset-0 z-10 flex flex-col justify-center items-start pl-8 pr-32">
                                <h6 className="font-normal text-sm text-[#737373] tracking-[0.2px] mb-2">
                                    {card.subtitle}
                                </h6>
                                <h2 className="font-bold text-2xl text-[#252B42] leading-8 tracking-[0.1px] mb-2 whitespace-pre-line">
                                    {card.title}
                                </h2>
                                <h6 className="font-normal text-xs text-[#737373] tracking-[0.2px] cursor-pointer hover:text-[#252B42] transition-colors pb-1 border-b border-transparent hover:border-[#252B42]">
                                    Explore Items
                                </h6>
                            </div>

                            <div
                                className="absolute right-0 w-full h-full bg-no-repeat bg-center transition-transform duration-500 group-hover:scale-105"
                                style={{
                                    backgroundImage: `url(${card.image})`,
                                    backgroundSize: 'contain'
                                }}
                            ></div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default CategoryCards;
