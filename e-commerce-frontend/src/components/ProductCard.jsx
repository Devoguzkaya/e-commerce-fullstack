import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <div className="bg-white flex flex-col items-center group shadow-sm hover:shadow-md cursor-pointer transition-all duration-300 w-full md:w-[48%] lg:w-[30%] h-auto lg:h-[324px]">
            <Link to={`/shop/${product.id}`} className="w-full h-[162px] overflow-hidden relative block">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain transform transition-transform duration-300"
                />
            </Link>

            <div className="text-center pt-[25px] pb-[35px] px-[25px] flex flex-col items-center gap-[10px] w-full">
                <h5 className="font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42] line-clamp-1 w-full">
                    {product.title}
                </h5>
                <p className="font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373] line-clamp-1 w-full">
                    {product.category}
                </p>
                <div className="flex justify-center gap-[5px]">
                    <span className="font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#BDBDBD]">
                        {product.price}
                    </span>
                    <span className="font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#23856D]">
                        {product.salePrice}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
