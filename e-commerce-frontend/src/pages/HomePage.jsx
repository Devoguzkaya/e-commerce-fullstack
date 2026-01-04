import React from 'react';
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
    return (
        <div>
            <HeroSlider />
            <CategoryCards />
            <ProductBlock
                sectionData={bestsellerSectionData}
                products={bestsellerProducts}
                reverse={false}
            />
            <MostPopular />
            <FeaturedProduct />
            <ProductBlock
                sectionData={furnitureSectionData}
                products={bestsellerProducts}
                reverse={true}
            />
            <BestsellerProducts />
            <Clients />
            <FeaturedPosts />
        </div>
    );
};

export default HomePage;
