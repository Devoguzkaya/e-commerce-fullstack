import React from 'react';
import { Link } from 'react-router-dom';
import { shopCategories } from '../../data/shopData';

export default function ShopCategoryCards() {
    const categories = shopCategories;

    return (
        <section className="bg-[#FAFAFA] pb-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {categories.map((cat) => (
                        <Link to="/shop" key={cat.id} className="relative group w-full aspect-square overflow-hidden bg-gray-200">
                            {/* Background Image */}
                            <img
                                src={cat.image}
                                alt={cat.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition-colors flex flex-col items-center justify-center text-white">
                                <h3 className="font-bold text-[16px] leading-[24px] uppercase tracking-wide">{cat.title}</h3>
                                <p className="font-normal text-[14px] leading-[20px]">{cat.count}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
