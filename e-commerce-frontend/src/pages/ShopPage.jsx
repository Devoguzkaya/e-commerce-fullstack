import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import ShopCategoryCards from '../components/shop/ShopCategoryCards';
import ShopFilter from '../components/shop/ShopFilter';
import ShopProductCard from '../components/shop/ShopProductCard';
import Clients from '../components/home/Clients';
import { shopProducts } from '../data/shopData';

export default function ShopPage() {
    const [viewMode, setViewMode] = useState('grid');
    const [sort, setSort] = useState('popularity');
    const [currentPage, setCurrentPage] = useState(1);

    // Sorting Logic
    const sortedProducts = [...shopProducts].sort((a, b) => {
        if (sort === 'price-asc') {
            return parseFloat(a.salePrice.replace('$', '')) - parseFloat(b.salePrice.replace('$', ''));
        } else if (sort === 'price-desc') {
            return parseFloat(b.salePrice.replace('$', '')) - parseFloat(a.salePrice.replace('$', ''));
        }
        return 0; // Popularity (default order)
    });

    return (
        <div className="bg-white">
            {/* 1. Header/Breadcrumb Area */}
            <div className="bg-white pb-8 pt-4">
                <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-center">
                    <h2 className="font-bold text-[24px] leading-[32px] text-[#252B42]">Shop</h2>
                    <div className="flex items-center gap-2 py-4 md:py-0">
                        <Link to="/" className="font-bold text-[14px] leading-[24px] text-[#252B42]">Home</Link>
                        <ChevronRight size={16} className="text-[#BDBDBD]" />
                        <span className="font-bold text-[14px] leading-[24px] text-[#737373]">Shop</span>
                    </div>
                </div>
            </div>

            {/* 2. Category Cards (5 Items) */}
            <ShopCategoryCards />

            {/* 3. Filter Row & Product Grid */}
            <div className="container mx-auto px-4 pb-12">

                {/* Filter Component */}
                <ShopFilter
                    viewMode={viewMode}
                    setViewMode={setViewMode}
                    sort={sort}
                    setSort={setSort}
                />

                {/* Products Grid */}
                <div className={`grid gap-8 mb-12 ${viewMode === 'list' ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'}`}>
                    {sortedProducts.map((product) => (
                        <div key={product.id} className={viewMode === 'list' ? 'flex justify-center' : ''}>
                            <ShopProductCard product={product} /> {/* You might want a different card style for list view */}
                        </div>
                    ))}
                </div>

                {/* Pagination (State Connected) */}
                <div className="flex justify-center items-center rounded-[5px] border border-[#BDBDBD] bg-white w-fit mx-auto shadow-sm overflow-hidden mt-8">
                    <button onClick={() => setCurrentPage(1)} className={`h-[74px] px-[25px] border-r border-[#BDBDBD] font-bold text-[14px] transition-colors ${currentPage === 1 ? 'text-[#BDBDBD] bg-[#F3F3F3] cursor-not-allowed' : 'text-[#23A6F0] hover:bg-gray-50'}`} disabled={currentPage === 1}>First</button>

                    {[1, 2, 3].map(page => (
                        <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`h-[74px] w-[46px] border-r border-[#E9E9E9] font-bold text-[14px] flex items-center justify-center transition-colors ${currentPage === page ? 'bg-[#23A6F0] text-white' : 'bg-white text-[#23A6F0] hover:bg-gray-50'}`}
                        >
                            {page}
                        </button>
                    ))}

                    <button onClick={() => setCurrentPage(currentPage + 1)} className="h-[74px] px-[25px] text-[#23A6F0] font-bold text-[14px] bg-white hover:bg-gray-50 transition-colors">Next</button>
                </div>
            </div>

            {/* 4. Clients / Logos */}
            <div className="bg-white py-8">
                <Clients />
            </div>

        </div>
    );
}
