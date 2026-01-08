import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../store/slices/productSlice';
import { ChevronRight, ArrowLeft } from 'lucide-react';

import { shopProducts } from '../data/shopData';
import ProductHero from '../components/product/ProductHero';
import ProductTabs from '../components/product/ProductTabs';
import ProductCard from '../components/ProductCard';
import Clients from '../components/home/Clients';

export default function ProductDetailPage() {
    const { productId, id } = useParams();
    const targetId = productId || id;

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { activeProduct, fetchState } = useSelector(state => state.product);

    // Fetch Product Logic
    useEffect(() => {
        if (targetId) {
            dispatch(fetchProduct(targetId));
            window.scrollTo(0, 0);
        }
    }, [targetId, dispatch]);

    // Loading State
    if (fetchState === 'FETCHING' || !activeProduct) {
        return (
            <div className="min-h-screen flex justify-center items-center">
                <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="bg-white">
            {/* Breadcrumb */}
            <div className="bg-[#FAFAFA] py-6">
                <div className="container mx-auto px-4 flex items-center gap-[15px]">
                    <button onClick={() => navigate(-1)} className="text-[#BDBDBD] hover:text-[#252B42] transition-colors">
                        <ArrowLeft size={20} />
                    </button>
                    <Link to="/" className="font-bold text-[14px] leading-[24px] text-[#252B42]">Home</Link>
                    <ChevronRight size={14} className="text-[#BDBDBD]" />
                    <Link to="/shop" className="font-bold text-[14px] leading-[24px] text-[#BDBDBD]">Shop</Link>
                    <ChevronRight size={14} className="text-[#BDBDBD]" />
                    <span className="font-bold text-[14px] leading-[24px] text-[#252B42] truncate max-w-[200px]">{activeProduct.name}</span>
                </div>
            </div>

            {/* Product Hero (Descriptive top section) */}
            <ProductHero product={activeProduct} />

            {/* Tabs (Description, details, reviews) */}
            <ProductTabs />

            {/* Bestseller Products Section */}
            <div className="bg-[#FAFAFA] py-12">
                <div className="w-[73%] mx-auto">
                    <h3 className="font-bold text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42] mb-[24px] uppercase text-center font-['Montserrat']">
                        Bestseller Products
                    </h3>
                    <div className="w-full h-px bg-[#ECECEC] mb-[24px]" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px] justify-items-center">
                        {shopProducts.slice(0, 8).map((product) => (
                            <div key={product.id} className="bg-white flex flex-col items-center group shadow-sm hover:shadow-md cursor-pointer transition-all duration-300 w-[239px] h-full">
                                {/* Image Container: Fixed Height 280px per Figma */}
                                <Link to={`/product/${product.id}`} className="w-full h-[280px] overflow-hidden relative block">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-full object-cover transform transition-transform duration-300"
                                    />
                                </Link>

                                {/* Content: Padding 25px 25px 35px */}
                                <div className="flex flex-col items-center justify-between flex-grow pt-[25px] px-[25px] pb-[35px] gap-[10px] w-full">
                                    <h5 className="font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42] text-center font-['Montserrat']">
                                        {product.title}
                                    </h5>
                                    <p className="font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373] text-center font-['Montserrat']">
                                        {product.category || 'English Department'}
                                    </p>
                                    <div className="flex justify-center gap-[5px] px-[3px] py-[5px]">
                                        <span className="font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#BDBDBD] font-['Montserrat']">
                                            {product.price}
                                        </span>
                                        <span className="font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#23856D] font-['Montserrat']">
                                            {product.salePrice}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Clients Logos */}
            <div className="bg-[#FAFAFA] py-8">
                <Clients />
            </div>

        </div>
    );
}

