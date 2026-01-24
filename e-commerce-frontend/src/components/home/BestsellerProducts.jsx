import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/slices/productSlice';
import ShopProductCard from '../shop/ShopProductCard';

const BestsellerProducts = () => {
    const dispatch = useDispatch();
    const productList = useSelector(state => state.product.productList);
    const fetchState = useSelector(state => state.product.fetchState);

    // Bestseller için en yüksek puanlı 8 ürünü çekelim
    useEffect(() => {
        dispatch(fetchProducts({ limit: 8, sort: 'rating:desc' }));
    }, [dispatch]);

    // Sadece ilk 8 ürünü göster (API'dan zaten limitli istedik ama garanti olsun)
    const products = productList.slice(0, 8);

    return (
        <section className="bg-[#FAFAFA] py-12 flex justify-center">
            <div className="w-full max-w-[1124px] flex flex-col items-center gap-6 px-4 md:px-0">

                <div className="w-full max-w-[1042px] flex flex-col gap-2.5">
                    <h3 className="font-bold text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42] text-left">
                        BESTSELLER PRODUCTS
                    </h3>
                    <div className="w-full h-[2px] bg-[#ECECEC]"></div>
                </div>

                <div className="w-full max-w-[1049px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[30px]">
                    {fetchState === 'FETCHING' ? (
                        <div className="col-span-4 flex justify-center py-10">
                            <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin"></div>
                        </div>
                    ) : (
                        products.map((product) => (
                            <div key={product.id} className="flex justify-center">
                                <ShopProductCard product={product} />
                            </div>
                        ))
                    )}
                </div>

            </div>
        </section>
    );
};

export default BestsellerProducts;
