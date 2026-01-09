import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ChevronRight, Check } from 'lucide-react';
import { removeFromCart, updateItemCount, toggleChecked } from '../store/slices/shoppingCartSlice';

const ShoppingCartPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { cart } = useSelector(state => state.shoppingCart);

    const activeItems = cart.filter(item => item.checked);

    const subtotal = activeItems.reduce((sum, item) => sum + (item.product.price * item.count), 0);
    const shippingCost = subtotal > 150 || subtotal === 0 ? 0 : 29.99;
    const grandTotal = subtotal + shippingCost;

    const handleCountChange = (productId, newCount) => {
        if (newCount > 0) {
            dispatch(updateItemCount({ productId, count: newCount }));
        }
    };

    const [showCouponInput, setShowCouponInput] = React.useState(false);

    if (cart.length === 0) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 bg-[#FAFAFA]">
                <h2 className="text-2xl font-bold text-[#252B42]">Your Shopping Cart is Empty</h2>
                <p className="text-[#737373]">Looks like you haven't added anything to your cart yet.</p>
                <Link to="/shop" className="px-6 py-3 bg-[#23A6F0] text-white font-bold rounded hover:bg-blue-600 transition-colors">
                    Start Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-[#FAFAFA] min-h-screen pb-12">
            <div className="container mx-auto px-4 py-8">

                <div className="flex flex-col lg:flex-row gap-8">

                    <div className="flex-1 flex flex-col gap-4">

                        <h2 className="text-xl font-semibold text-[#252B42]">Sepetim ({cart.length} Ürün)</h2>

                        <div className="bg-[#F8F9FA] border border-[#E8E8E8] p-3 rounded-lg flex items-center gap-3 shadow-sm">
                            <div className="bg-[#0BC15C] rounded-full p-[2px] w-5 h-5 flex items-center justify-center shadow-sm">
                                <Check className="text-white w-3 h-3" strokeWidth={4} />
                            </div>
                            <span className="text-sm font-medium text-[#252B42]">Sepetindeki Ürünleri Bireysel Veya Kurumsal Fatura Seçerek Alabilirsin.</span>
                        </div>

                        {cart.map((item) => {
                            const product = item.product;
                            const image = (product.images && product.images[0] && product.images[0].url) || (Array.isArray(product.images) ? product.images[0] : product.images) || "https://via.placeholder.com/100";

                            return (
                                <div key={product.id} className="bg-white rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-[#E6E6E6] overflow-hidden relative group">

                                    <div className="px-5 py-3 border-b border-[#F0F0F0] bg-white flex flex-col md:flex-row md:items-center justify-between gap-2">
                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={() => dispatch(toggleChecked(product.id))}
                                                className={`w-5 h-5 rounded border flex items-center justify-center transition-colors shadow-sm ${item.checked ? 'bg-[#F27A1A] border-[#F27A1A]' : 'bg-white border-gray-300'}`}
                                            >
                                                {item.checked && <Check size={14} className="text-white" strokeWidth={3} />}
                                            </button>
                                            <span className="text-sm text-[#999999]">Satıcı:</span>
                                            <span className="text-sm font-bold text-[#252B42]">Workintech Satıcısı</span>
                                            <span className="bg-[#0BC15C] text-white text-[10px] font-bold px-1 rounded ml-0.5">9.7</span>
                                            <ChevronRight size={14} className="text-[#999999]" />
                                            <span className="border border-blue-100 bg-blue-50 text-[#1E90FF] text-[10px] px-2 py-0.5 rounded flex items-center gap-1 cursor-pointer">
                                                Kurumsal <span className="w-3 h-3 rounded-full border border-current flex items-center justify-center text-[8px]">i</span>
                                            </span>
                                        </div>
                                        <div className="hidden md:flex items-center bg-[#FFF1E6] text-[#F27A1A] text-xs px-3 py-1 rounded-full">
                                            <span className="font-bold mr-1">🏷️ 3 Adet ve Üzeri 40 TL İndirim</span>
                                            <span className="font-normal text-[#F27A1A] cursor-pointer hover:underline text-[10px] ml-2">Tüm Ürünler {'>'}</span>
                                        </div>
                                    </div>

                                    <div className="bg-[#E6F7E6] text-[#0BC15C] text-xs font-bold text-center py-1.5 border-b border-[#E6F7E6] flex items-center justify-center gap-2">
                                        <div className="w-4 h-4 rounded border border-current flex items-center justify-center">📦</div> Kargo Bedava!
                                    </div>

                                    <div className="p-5 flex flex-col md:flex-row items-center gap-6">

                                        <div className="hidden md:block self-center">
                                            <button
                                                onClick={() => dispatch(toggleChecked(product.id))}
                                                className={`w-5 h-5 rounded border flex items-center justify-center transition-colors shadow-sm ${item.checked ? 'bg-[#F27A1A] border-[#F27A1A]' : 'bg-white border-gray-300'}`}
                                            >
                                                {item.checked && <Check size={14} className="text-white" strokeWidth={3} />}
                                            </button>
                                        </div>

                                        <div className="w-[100px] h-[120px] border border-gray-100 rounded-lg overflow-hidden flex-shrink-0 bg-white p-2">
                                            <img src={image} alt={product.name} className="w-full h-full object-contain mix-blend-multiply" />
                                        </div>

                                        <div className="flex-1 flex flex-col gap-1.5 self-start md:self-center">
                                            <h3 className="font-medium text-[#333333] text-[15px] leading-snug">
                                                <span className="font-bold text-[#252B42]">Marka</span> {product.name} - Detaylı Açıklama
                                            </h3>
                                            <div className="text-[13px] text-[#999999]">Beden: <span className="text-[#333333]">Standart</span></div>
                                            <div className="text-[12px] bg-[#E6F7E6] text-[#0BC15C] inline-flex items-center gap-1 mt-1 px-2 py-1 rounded w-fit">
                                                <span>🚚</span>
                                                <span className="font-bold">39 dakika</span>
                                                <span className="text-[#252B42]">içinde sipariş verirsen</span>
                                                <span className="font-bold">en geç yarın</span>
                                                <span className="text-[#252B42]">kargoda!</span>
                                            </div>
                                        </div>

                                        <div className="flex flex-row md:flex-col lg:flex-row items-center gap-8 ml-auto self-center">

                                            <div className="flex items-center border border-[#E6E6E6] rounded bg-white h-[40px] shadow-sm">
                                                <button
                                                    onClick={() => handleCountChange(product.id, item.count - 1)}
                                                    disabled={item.count <= 1}
                                                    className="w-[32px] h-full flex items-center justify-center hover:bg-gray-50 text-[#999999] disabled:opacity-50 text-xl font-light"
                                                >
                                                    -
                                                </button>
                                                <span className="w-[40px] text-center font-medium text-[#333333] text-sm">{item.count}</span>
                                                <button
                                                    onClick={() => handleCountChange(product.id, item.count + 1)}
                                                    className="w-[32px] h-full flex items-center justify-center hover:bg-gray-50 text-[#F27A1A] text-xl font-light"
                                                >
                                                    +
                                                </button>
                                            </div>

                                            <div className="flex flex-col items-end min-w-[100px]">
                                                <span className="font-bold text-[#F27A1A] text-lg tracking-tight">
                                                    {(product.price * item.count).toLocaleString('tr-TR', { minimumFractionDigits: 2 })} TL
                                                </span>
                                            </div>

                                            <button
                                                onClick={() => dispatch(removeFromCart(product.id))}
                                                className="text-[#999999] hover:text-[#333333] transition-colors"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                        <div className="mt-8">
                            <div className="flex items-center gap-8 border-b border-gray-200">
                                <button className="pb-3 border-b-2 border-[#F27A1A] text-[#F27A1A] font-medium text-sm">Önceden Eklediklerim</button>
                                <button className="pb-3 border-b-2 border-transparent text-[#666666] font-medium text-sm hover:text-[#F27A1A]">Önerilen Ürünler</button>
                                <button className="pb-3 border-b-2 border-transparent text-[#666666] font-medium text-sm hover:text-[#F27A1A] flex items-center gap-1">
                                    Favorilerim <span className="bg-[#E74040] text-white text-[10px] px-1.5 rounded-full">Yeni</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-[300px] flex flex-col gap-4">

                        <div className="bg-white p-5 rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-[#E6E6E6] sticky top-4">
                            <h2 className="text-lg font-bold text-[#252B42] mb-4">Sipariş Özeti</h2>

                            <div className="flex flex-col gap-3 mb-4">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-[#555555]">Ürünün Toplamı</span>
                                    <span className="font-bold text-[#252B42]">{subtotal.toLocaleString('tr-TR', { minimumFractionDigits: 2 })} TL</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-[#555555]">Kargo Toplam</span>
                                    <span className="font-bold text-[#252B42]">29,99 TL</span>
                                </div>
                                {subtotal >= 150 && (
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-[#555555] w-[60%]">150 TL ve Üzeri Kargo Bedava (Satıcı Karşılar)</span>
                                        <span className="font-bold text-[#E74040]">-29,99 TL</span>
                                    </div>
                                )}
                            </div>

                            <div className="border-t border-gray-200 pt-4 mb-4">
                                <div className="flex justify-between items-center">
                                    <span className="font-normal text-[#252B42]">Toplam</span>
                                    <span className="font-bold text-[#F27A1A] text-xl">{grandTotal.toLocaleString('tr-TR', { minimumFractionDigits: 2 })} TL</span>
                                </div>
                            </div>

                            {showCouponInput ? (
                                <div className="flex flex-col gap-2 mb-4 animate-in fade-in zoom-in duration-200">
                                    <div className="flex gap-2">
                                        <input
                                            type="text"
                                            placeholder="Kodu Giriniz"
                                            className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-[#F27A1A]"
                                        />
                                        <button className="bg-[#555555] text-white px-3 py-2 rounded-md text-sm font-bold hover:bg-[#333333]">Ekle</button>
                                    </div>
                                </div>
                            ) : (
                                <button
                                    onClick={() => setShowCouponInput(true)}
                                    className="w-full py-3 bg-white border border-[#E6E6E6] text-[#F27A1A] font-bold rounded-md hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 mb-4 text-sm shadow-sm"
                                >
                                    <Plus size={16} /> İNDİRİM KODU GİR
                                </button>
                            )}

                            <button
                                onClick={() => navigate("/order")}
                                className="w-full py-3 bg-[#F27A1A] text-white font-bold text-base rounded-md hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
                            >
                                Sepeti Onayla <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ShoppingCartPage;
