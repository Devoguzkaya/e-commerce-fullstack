import imgCard1 from '../assets/shoppage/card1.jpg';
import imgCard2 from '../assets/shoppage/card2.jpg';
import imgCard3 from '../assets/shoppage/card3.jpg';
import imgCard4 from '../assets/shoppage/card4.jpg';
import imgCard5 from '../assets/shoppage/card5.jpg';

import cover1 from '../assets/detailpage/productcover1.png';
import cover2 from '../assets/detailpage/productcover2.png';
import cover3 from '../assets/detailpage/productcover3.png';
import cover4 from '../assets/detailpage/productcover4.png';
import cover5 from '../assets/detailpage/productcover5.png';
import cover6 from '../assets/detailpage/productcover6.png';

import yellowArmchair from '../assets/detailpage/yellowarmchair.jpg';
import yellowArmchair2 from '../assets/detailpage/yellowarmchair2.jpg';
import grayArmchair from '../assets/detailpage/grayarmchair.jpg';

export const shopCategories = [
    { id: 1, image: imgCard1, title: 'CLOTHS', count: '5 Items' },
    { id: 2, image: imgCard2, title: 'CLOTHS', count: '5 Items' },
    { id: 3, image: imgCard3, title: 'CLOTHS', count: '5 Items' },
    { id: 4, image: imgCard4, title: 'CLOTHS', count: '5 Items' },
    { id: 5, image: imgCard5, title: 'CLOTHS', count: '5 Items' },
];

const productImages = [cover1, cover2, cover3, cover4, cover5, cover6, cover1, cover2];

export const shopProducts = productImages.map((img, index) => ({
    id: index + 100,
    image: img,
    title: 'Graphic Design',
    category: 'English Department',
    price: '$16.48',
    salePrice: '$6.48'
}));

export const singleProduct = {
    id: 1,
    title: "Floating Phone",
    rating: 4.5,
    reviews: 10,
    price: "$1,139.33",
    availability: "In Stock",
    description: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    images: [
        yellowArmchair,
        yellowArmchair2,
        grayArmchair
    ],
    colors: ["#23A6F0", "#2DC071", "#E77C40", "#252B42"]
};
