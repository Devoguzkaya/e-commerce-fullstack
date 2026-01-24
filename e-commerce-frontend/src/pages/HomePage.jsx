import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/slices/productSlice';
import HeroSlider from '../components/home/HeroSlider';
import CategoryCards from '../components/home/CategoryCards';
import BestsellerProducts from '../components/home/BestsellerProducts';
import MostPopular from '../components/home/MostPopular';
import Clients from '../components/home/Clients';
import FeaturedProduct from '../components/home/FeaturedProduct';
import FeaturedPosts from '../components/home/FeaturedPosts';
import ProductBlock from '../components/home/ProductBlock';
import { bestsellerProducts, furnitureSectionData, bestsellerSectionData } from '../data/homeData';

const HomePage = () => {
    const dispatch = useDispatch();
    const productList = useSelector(state => state.product.productList);
    const fetchState = useSelector(state => state.product.fetchState);

    // Anasayfa genel ürünleri için (ProductBlock'lar kullanacak)
    // Redux store'daki productList'i kullanacağız.
    // Ancak BestsellerProducts da aynı listeyi kullanıyor olabilir, bu yüzden çakışmayı önlemek için
    // burada genel bir fetch yapalım. store'daki productList güncellenecektir.
    // BestsellerProducts bileşeni mount olduğunda tekrar fetch yapıp listeyi değiştirebilir.
    // Bu basit yapıda state yönetimi karmaşıklaşabilir ama kullanıcının isteğini karşılamak için
    // en hızlı çözüm: HomePage mount olduğunda genel ürünleri çekmek.

    useEffect(() => {
        dispatch(fetchProducts({ limit: 18, sort: 'rating:desc' }));
    }, [dispatch]);

    // Ürünler gelene kadar static data veya boş array yerine,
    // eğer fetchState FETCHED ise real data, değilse statik data kullanabiliriz.
    // Ama statik data yapısı (ProductCard) ile real data yapısı (ShopProductCard) farklılaşmaya başladı.
    // ProductBlock artık ShopProductCard kullanıyor, bu yüzden API datası ŞART.

    const productsForBlock1 = fetchState === 'FETCHED' ? productList.slice(0, 6) : [];
    const productsForBlock2 = fetchState === 'FETCHED' ? productList.slice(6, 12) : [];

    return (
        <div>
            <HeroSlider />
            <CategoryCards />

            <ProductBlock
                sectionData={bestsellerSectionData}
                products={productsForBlock1.length > 0 ? productsForBlock1 : []}
                reverse={false}
            />

            <MostPopular />
            <FeaturedProduct />

            <ProductBlock
                sectionData={furnitureSectionData}
                products={productsForBlock2.length > 0 ? productsForBlock2 : []}
                reverse={true}
            />

            <BestsellerProducts />
            <Clients />
            <FeaturedPosts />
        </div>
    );
};

export default HomePage;
