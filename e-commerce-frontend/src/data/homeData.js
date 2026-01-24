import heroProduct1 from '../assets/shoppage/featured_product.png';
import heroBg from '../assets/shoppage/card4.jpg';

import popularHero from '../assets/shoppage/most_popular.png';
import popularProduct from '../assets/shoppage/product12.png';

import post1 from '../assets/shoppage/card1.jpg';
import post2 from '../assets/shoppage/card2.jpg';
import post3 from '../assets/shoppage/card3.jpg';

import logoHooli from '../assets/hoolisvg.svg';
import logoLyft from '../assets/lyftsvg.svg';
import logoStripe from '../assets/stripesvg.svg';
import logoAws from '../assets/awssvg.svg';
import logoReddit from '../assets/redditsvg.svg';
import logoRobinhood from '../assets/robinhoodsvg.svg';

import product1 from '../assets/shoppage/product1.png';
import product2 from '../assets/shoppage/product2.png';
import product3 from '../assets/shoppage/product3.png';
import product4 from '../assets/shoppage/product4.png';
import product5 from '../assets/shoppage/product5.png';
import product6 from '../assets/shoppage/product6.png';
import product7 from '../assets/shoppage/product7.png';
import product8 from '../assets/shoppage/product8.png';

import fashionBanner1 from '../assets/shoppage/asian_fashion.png';
import fashionBanner2 from '../assets/shoppage/banner_sale.png';

export const featuredProductData = {
    sectionTitle: "SUMMER CLASSICS",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    mainImage: heroProduct1,
    product: {
        title: "Vita Classic Product",
        sales: "15 Sales",
        originalPrice: "$16.48",
        salePrice: "$6.48",
        colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
        image: heroBg
    }
};

export const mostPopularData = {
    heroImage: popularHero,
    header: "MOST POPULAR",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    product: {
        image: popularProduct,
        title: "Neural Universe",
        sales: "15 Sales",
        originalPrice: "$16.48",
        salePrice: "$6.48",
        colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    features: [
        "Easy to wear",
        "Trendy Design",
        "Comfortable fit",
        "Unlimited style"
    ]
};

export const bestsellerProducts = [
    { id: 1, image: product1, category: "Men's Fashion", title: "Casual Wool Coat", price: "$120.00", salePrice: "$85.00" },
    { id: 2, image: product2, category: "Women's Fashion", title: "Floral Summer Dress", price: "$90.00", salePrice: "$55.00" },
    { id: 3, image: product3, category: "Accessories", title: "Classic Leather Bag", price: "$150.00", salePrice: "$110.00" },
    { id: 4, image: product4, category: "Men's Fashion", title: "Denim Jacket", price: "$85.00", salePrice: "$60.00" },
    { id: 5, image: product5, category: "Women's Fashion", title: "Stylized Scarf", price: "$35.00", salePrice: "$20.00" },
    { id: 6, image: product6, category: "Footwear", title: "Canvas Sneakers", price: "$65.00", salePrice: "$45.00" },
    { id: 7, image: product7, category: "Men's Fashion", title: "Cotton T-Shirt", price: "$40.00", salePrice: "$25.00" },
    { id: 8, image: product8, category: "Women's Fashion", title: "Evening Gown", price: "$220.00", salePrice: "$180.00" },
];

export const bestsellerSectionData = {
    title: "BESTSELLER PRODUCTS",
    menuItems: ["Men", "Women", "Accessories"],
    banner: {
        image: fashionBanner1,
        title: "ASIAN FASHION",
        subtitle: "5 Items"
    }
};

export const furnitureSectionData = {
    title: "BESTSELLER PRODUCTS",
    menuItems: ["Men", "Women", "Accessories"],
    banner: {
        image: fashionBanner2,
        title: "SUMMER SALE",
        subtitle: "5 Items"
    }
};

export const blogPosts = [
    {
        id: 1,
        image: post1,
        title: "Trends in 2024",
        description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        date: "22 April 2021",
        comments: "10 comments",
        tags: ["Google", "Trending", "New"]
    },
    {
        id: 2,
        image: post2,
        title: "Best Fabrics",
        description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        date: "22 April 2021",
        comments: "10 comments",
        tags: ["Google", "Trending", "New"]
    },
    {
        id: 3,
        image: post3,
        title: "Sustainable Fashion",
        description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        date: "22 April 2021",
        comments: "10 comments",
        tags: ["Google", "Trending", "New"]
    },
];

export const clientsData = [
    { id: 1, name: 'Hooli', logo: logoHooli },
    { id: 2, name: 'Lyft', logo: logoLyft },
    { id: 3, name: 'Robinhood', logo: logoRobinhood },
    { id: 4, name: 'Stripe', logo: logoStripe },
    { id: 5, name: 'AWS', logo: logoAws },
    { id: 6, name: 'Reddit', logo: logoReddit },
];
