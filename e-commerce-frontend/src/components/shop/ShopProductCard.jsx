import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const slugify = (text) => {
    return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
};

const ShopProductCard = ({ product }) => {
    const categories = useSelector(state => state.product.categories);

    let category = categories.find(c => c.id == product.category_id);
    let url = `/product/${product.id}`;

    if (category) {
        const gender = category.code.startsWith('k:') ? 'kadin' : 'erkek';
        const categoryName = slugify(category.title);
        const productName = slugify(product.name || product.title || 'product');
        url = `/shop/${gender}/${categoryName}/${category.id}/${productName}/${product.id}`;
    }

    const image = product.images?.[0]?.url || 'https://via.placeholder.com/300';
    const title = product.name || product.title;
    const desc = product.description || product.category || 'English Department';
    const price = typeof product.price === 'number' ? `$${product.price.toFixed(2)}` : product.price;

    return (
        <div className="bg-transparent flex flex-col items-center group shadow-sm hover:shadow-md cursor-pointer transition-all duration-300 w-full h-full">
            <Link to={url} className="w-full h-[300px] overflow-hidden relative block">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-contain transform transition-transform duration-300"
                />
            </Link>

            <div className="flex flex-col items-center justify-between flex-grow pt-[25px] px-[25px] pb-[35px] gap-[10px] w-full">
                <h5 className="font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42] text-center line-clamp-1">
                    {title}
                </h5>
                <p className="font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373] text-center line-clamp-1">
                    {desc}
                </p>
                <div className="flex justify-center gap-[5px] px-[3px] py-[5px]">
                    <span className="font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#BDBDBD]">
                        {price}
                    </span>
                    <span className="font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#23856D]">
                        {price}
                    </span>
                </div>

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
