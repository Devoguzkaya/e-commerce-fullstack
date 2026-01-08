import React from 'react';
import { LayoutGrid, List, ChevronDown } from 'lucide-react';

const ShopFilter = ({ viewMode, setViewMode, sort, setSort }) => {
    return (
        <div className="bg-white py-6 mb-8">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">

                {/* Sol: Sonuç Bilgisi */}
                <div className="font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">
                    Showing all 12 results
                </div>

                {/* Orta: Görünüm Seçenekleri */}
                <div className="flex items-center gap-[15px]">
                    <span className="font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">
                        Views:
                    </span>
                    <button
                        onClick={() => setViewMode('grid')}
                        className={`p-3 border rounded-[5px] transition-colors ${viewMode === 'grid' ? 'text-[#252B42] border-[#252B42] bg-gray-50' : 'text-[#737373] border-[#ECECEC] hover:bg-gray-100'}`}
                    >
                        <LayoutGrid size={16} />
                    </button>
                    <button
                        onClick={() => setViewMode('list')}
                        className={`p-3 border rounded-[5px] transition-colors ${viewMode === 'list' ? 'text-[#252B42] border-[#252B42] bg-gray-50' : 'text-[#737373] border-[#ECECEC] hover:bg-gray-100'}`}
                    >
                        <List size={16} />
                    </button>
                </div>

                {/* Sağ: Filtreleme ve Sıralama */}
                <div className="flex items-center gap-[15px]">
                    <div className="relative">
                        <select
                            value={sort}
                            onChange={(e) => setSort(e.target.value)}
                            className="appearance-none border border-[#DDDDDD] bg-[#F9F9F9] rounded-[5px] px-[18px] py-[10px] pr-[35px] font-normal text-[14px] leading-[28px] tracking-[0.2px] text-[#737373] focus:outline-none focus:border-[#23A6F0] cursor-pointer"
                        >
                            <option value="popularity">Popularity</option>
                            <option value="price-asc">Price: Low to High</option>
                            <option value="price-desc">Price: High to Low</option>
                        </select>
                        <ChevronDown size={14} className="absolute right-[14px] top-1/2 -translate-y-1/2 text-[#737373] pointer-events-none" />
                    </div>

                    <button className="px-[20px] py-[10px] bg-[#23A6F0] text-white font-bold text-[14px] leading-[24px] tracking-[0.2px] rounded-[5px] hover:bg-blue-600 transition-colors">
                        Filter
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ShopFilter;
