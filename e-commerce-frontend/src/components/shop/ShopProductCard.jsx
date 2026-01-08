import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Helper for SEO URLs
const slugify = (text) => {
    return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, '-')     // Replace spaces with -
        .replace(/[^\w-]+/g, '')  // Remove all non-word chars
        .replace(/--+/g, '-')     // Replace multiple - with single -
        .replace(/^-+/, '')       // Trim - from start
        .replace(/-+$/, '');      // Trim - from end
};

const ShopProductCard = ({ product }) => {
    const categories = useSelector(state => state.product.categories);

    // Derive Link Params
    let category = categories.find(c => c.id == product.category_id);
    let url = `/product/${product.id}`; // Fallback

    if (category) {
        const gender = category.code.startsWith('k:') ? 'kadin' : 'erkek';
        const categoryName = slugify(category.title);
        const productName = slugify(product.name || product.title);
        url = `/shop/${gender}/${categoryName}/${category.id}/${productName}/${product.id}`;
    }

    // API Data Helpers
    const image = product.images?.[0]?.url || 'https://via.placeholder.com/300';
    const title = product.name || product.title;
    const desc = product.description || product.category || 'English Department';
    // Price logic: API returns number. 
    const price = typeof product.price === 'number' ? `$${product.price.toFixed(2)}` : product.price;

    return (
        <div className="bg-transparent flex flex-col items-center group shadow-sm hover:shadow-md cursor-pointer transition-all duration-300 w-full h-full">
            {/* Image Container: Fixed Height 300px */}
            <Link to={url} className="w-full h-[300px] overflow-hidden relative block">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-contain transform transition-transform duration-300"
                />
            </Link>

            {/* Content: Padding 25px 25px 35px */}
            <div className="flex flex-col items-center justify-between flex-grow pt-[25px] px-[25px] pb-[35px] gap-[10px] w-full">
                <h5 className="font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42] text-center line-clamp-1">
                    {title}
                </h5>
                <p className="font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373] text-center line-clamp-1">
                    {desc}
                </p>
                <div className="flex justify-center gap-[5px] px-[3px] py-[5px]">
                    <span className="font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#BDBDBD]">
                        {/* Fake Original Price for visuals if needed, or just standard price */}
                        {price}
                    </span>
                    <span className="font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#23856D]">
                        {price}
                    </span>
                </div>

                {/* Product Colors (Mock) */}
                <div className="flex items-center gap-[6px] mt-1">
                    <div className="w-[16px] h-[16px] rounded-full bg-[#23A6F0]"></div>
                    <div className="w-[16px] h-[16px] rounded-full bg-[#23856D]"></div>
                    <div className="w-[16px] h-[16px] rounded-full bg-[#E77C40]"></div>
                    <div className="w-[16px] h-[16px] rounded-full bg-[#252B42]"></div>
                </div>
            </div>
        </div >
    );
};

export default ShopProductCard;
