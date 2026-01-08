import { Link } from 'react-router-dom';

const ShopProductCard = ({ product }) => {
    return (
        <div className="bg-transparent flex flex-col items-center group shadow-sm hover:shadow-md cursor-pointer transition-all duration-300 w-full h-full">
            {/* Image Container: Fixed Height 300px */}
            <Link to={`/shop/${product.id}`} className="w-full h-[300px] overflow-hidden relative block">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain transform transition-transform duration-300"
                />
            </Link>

            {/* Content: Padding 25px 25px 35px */}
            <div className="flex flex-col items-center justify-between flex-grow pt-[25px] px-[25px] pb-[35px] gap-[10px] w-full">
                <h5 className="font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42] text-center">
                    {product.title}
                </h5>
                <p className="font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373] text-center">
                    {product.category || 'English Department'}
                </p>
                <div className="flex justify-center gap-[5px] px-[3px] py-[5px]">
                    <span className="font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#BDBDBD]">
                        {product.price}
                    </span>
                    <span className="font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#23856D]">
                        {product.salePrice}
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
