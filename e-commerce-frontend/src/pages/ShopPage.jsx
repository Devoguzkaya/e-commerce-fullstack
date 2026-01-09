import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/slices/productSlice';
import { ChevronRight } from 'lucide-react';
import ShopCategoryCards from '../components/shop/ShopCategoryCards';
import ShopFilter from '../components/shop/ShopFilter';
import ShopProductCard from '../components/shop/ShopProductCard';
import Clients from '../components/home/Clients';
import { shopProducts } from '../data/shopData';

export default function ShopPage() {
    const { categoryId } = useParams();
    const dispatch = useDispatch();
    const { productList, total, fetchState } = useSelector(state => state.product);

    const [viewMode, setViewMode] = useState('grid');
    const [sort, setSort] = useState('');
    const [filter, setFilter] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const limit = 25;

    useEffect(() => {
        setCurrentPage(1);
    }, [categoryId, sort, filter]);

    useEffect(() => {
        const timer = setTimeout(() => {
            const offset = (currentPage - 1) * limit;
            const params = {
                limit: limit,
                offset: offset,
                category: categoryId,
                sort: sort,
                filter: filter
            };
            dispatch(fetchProducts(params));
        }, 500);

        return () => clearTimeout(timer);
    }, [dispatch, categoryId, sort, filter, currentPage]);

    const totalPages = Math.ceil(total / limit);

    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            window.scrollTo(0, 0);
        }
    };

    return (
        <div className="bg-white">
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

            <ShopCategoryCards />

            <div className="container mx-auto px-4 pb-12">

                <ShopFilter
                    viewMode={viewMode}
                    setViewMode={setViewMode}
                    sort={sort}
                    setSort={setSort}
                    filter={filter}
                    setFilter={setFilter}
                />

                {fetchState === 'FETCHING' ? (
                    <div className="flex justify-center items-center h-96">
                        <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin"></div>
                    </div>
                ) : (
                    <div className={`grid gap-8 mb-12 ${viewMode === 'list' ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'}`}>
                        {productList.map((product) => (
                            <div key={product.id} className={viewMode === 'list' ? 'flex justify-center' : ''}>
                                <ShopProductCard product={product} />
                            </div>
                        ))}
                    </div>
                )}

                {totalPages > 1 && (
                    <div className="flex justify-center items-center rounded-[5px] border border-[#BDBDBD] bg-white w-fit mx-auto shadow-sm overflow-hidden mt-8">
                        <button
                            onClick={() => handlePageChange(1)}
                            className={`h-[74px] px-[25px] border-r border-[#BDBDBD] font-bold text-[14px] transition-colors ${currentPage === 1 ? 'text-[#BDBDBD] bg-[#F3F3F3] cursor-not-allowed' : 'text-[#23A6F0] hover:bg-gray-50'}`}
                            disabled={currentPage === 1}
                        >
                            First
                        </button>
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            className={`h-[74px] px-[20px] border-r border-[#BDBDBD] font-bold text-[14px] transition-colors ${currentPage === 1 ? 'text-[#BDBDBD] bg-[#F3F3F3] cursor-not-allowed' : 'text-[#23A6F0] hover:bg-gray-50'}`}
                            disabled={currentPage === 1}
                        >
                            Prev
                        </button>

                        {pages.map(page => {
                            if (page === 1 || page === totalPages || (page >= currentPage - 1 && page <= currentPage + 1)) {
                                return (
                                    <button
                                        key={page}
                                        onClick={() => handlePageChange(page)}
                                        className={`h-[74px] w-[46px] border-r border-[#E9E9E9] font-bold text-[14px] flex items-center justify-center transition-colors ${currentPage === page ? 'bg-[#23A6F0] text-white' : 'bg-white text-[#23A6F0] hover:bg-gray-50'}`}
                                    >
                                        {page}
                                    </button>
                                );
                            } else if (page === currentPage - 2 || page === currentPage + 2) {
                                return <span key={page} className="px-2 text-gray-400">...</span>
                            }
                            return null;
                        })}

                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            className={`h-[74px] px-[20px] border-r border-[#BDBDBD] font-bold text-[14px] bg-white hover:bg-gray-50 transition-colors ${currentPage === totalPages ? 'text-[#BDBDBD] cursor-not-allowed' : 'text-[#23A6F0]'}`}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </button>
                    </div>
                )}
            </div>

            <div className="bg-white py-8">
                <Clients />
            </div>

        </div>
    );
}
