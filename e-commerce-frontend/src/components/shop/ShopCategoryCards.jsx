import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function ShopCategoryCards() {
    const categories = useSelector(state => state.product.categories);

    const topCategories = [...categories]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 5);

    return (
        <section className="bg-[#FAFAFA] pb-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {topCategories.map((cat) => {
                        const gender = cat.code.startsWith('k:') ? 'kadin' : 'erkek';
                        return (
                            <Link
                                to={`/shop/${gender}/${cat.title.toLowerCase()}/${cat.id}`}
                                key={cat.id}
                                className="relative group w-full aspect-square overflow-hidden bg-gray-200"
                            >
                                <img
                                    src={cat.img}
                                    alt={cat.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition-colors flex flex-col items-center justify-center text-white">
                                    <h3 className="font-bold text-[16px] leading-[24px] uppercase tracking-wide">{cat.title}</h3>
                                    <p className="font-normal text-[14px] leading-[20px]">{cat.rating} Rating</p>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
