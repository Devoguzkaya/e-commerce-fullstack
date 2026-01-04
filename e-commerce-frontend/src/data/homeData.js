import womanBurger from '../assets/womanburger.png';
import caramelBg from '../assets/caramel1.png';
import scooterImg from '../assets/bike.png';
import meatPlate from '../assets/meat.png';

// Blog Section Images
import roadImg from '../assets/road1.png';
import carImg from '../assets/car1.png'; // Verified exists
import umbrellaImg from '../assets/umbrellas1.png';

// Clients SVG Imports
import logoHooli from '../assets/hoolisvg.svg';
import logoLyft from '../assets/lyftsvg.svg';
import logoStripe from '../assets/stripesvg.svg';
import logoAws from '../assets/awssvg.svg';
import logoReddit from '../assets/redditsvg.svg';
import logoRobinhood from '../assets/robinhoodsvg.svg';

// Bestseller Product Images
import product1 from '../assets/bestseller1.png';
import product2 from '../assets/bestseller2.png';
import product3 from '../assets/bestseller3.png';
import product4 from '../assets/bestseller4.png';

// Banner Images (Restored)
import furnitureBanner from '../assets/section2left.jpg'; // Yellow
import donutBanner from '../assets/card-cover-5 (donut).jpg'; // Blue

// FeaturedProduct (Burger) Data
export const featuredProductData = {
    sectionTitle: "MOST POPULAR",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    mainImage: womanBurger,
    product: {
        title: "English Department",
        sales: "15 Sales",
        originalPrice: "$16.48",
        salePrice: "$6.48",
        colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
        image: caramelBg
    }
};

// MostPopular (Scooter) Data
export const mostPopularData = {
    heroImage: scooterImg,
    header: "MOST POPULAR",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    product: {
        image: meatPlate,
        title: "English Department",
        sales: "15 Sales",
        originalPrice: "$16.48",
        salePrice: "$6.48",
        colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    features: [
        "Easy to use",
        "Long life to use",
        "Student friendly",
        "Unlimited support"
    ]
};

// Bestseller Products List (Grid)
export const bestsellerProducts = [
    { id: 1, image: product1, category: "English Department", title: "Graphic Design", price: "$16.48", salePrice: "$6.48" },
    { id: 2, image: product2, category: "English Department", title: "Graphic Design", price: "$16.48", salePrice: "$6.48" },
    { id: 3, image: product3, category: "English Department", title: "Graphic Design", price: "$16.48", salePrice: "$6.48" },
    { id: 4, image: product4, category: "English Department", title: "Graphic Design", price: "$16.48", salePrice: "$6.48" },
    { id: 5, image: product1, category: "English Department", title: "Graphic Design", price: "$16.48", salePrice: "$6.48" },
    { id: 6, image: product2, category: "English Department", title: "Graphic Design", price: "$16.48", salePrice: "$6.48" },
    { id: 7, image: product3, category: "English Department", title: "Graphic Design", price: "$16.48", salePrice: "$6.48" },
    { id: 8, image: product4, category: "English Department", title: "Graphic Design", price: "$16.48", salePrice: "$6.48" },
];

// Yellow Banner Section Data (Restored)
export const bestsellerSectionData = {
    title: "BESTSELLER PRODUCTS",
    menuItems: ["Men", "Women", "Accessories"],
    banner: {
        image: furnitureBanner,
        title: "FURNITURE",
        subtitle: "5 Items"
    }
};

// Blue Banner Section Data (Restored)
export const furnitureSectionData = {
    title: "BESTSELLER PRODUCTS",
    menuItems: ["Men", "Women", "Accessories"],
    banner: {
        image: donutBanner,
        title: "FURNITURE",
        subtitle: "5 Items"
    }
};

// Blog/Featured Posts Data
export const blogPosts = [
    {
        id: 1,
        image: roadImg,
        title: "Loudest à la Madison #1 (L'integral)",
        description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        date: "22 April 2021",
        comments: "10 comments",
        tags: ["Google", "Trending", "New"]
    },
    {
        id: 2,
        image: carImg,
        title: "Loudest à la Madison #1 (L'integral)",
        description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        date: "22 April 2021",
        comments: "10 comments",
        tags: ["Google", "Trending", "New"]
    },
    {
        id: 3,
        image: umbrellaImg,
        title: "Loudest à la Madison #1 (L'integral)",
        description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        date: "22 April 2021",
        comments: "10 comments",
        tags: ["Google", "Trending", "New"]
    },
];

// Clients Data
export const clientsData = [
    { id: 1, name: 'Hooli', logo: logoHooli },
    { id: 2, name: 'Lyft', logo: logoLyft },
    { id: 3, name: 'Robinhood', logo: logoRobinhood },
    { id: 4, name: 'Stripe', logo: logoStripe },
    { id: 5, name: 'AWS', logo: logoAws },
    { id: 6, name: 'Reddit', logo: logoReddit },
];
