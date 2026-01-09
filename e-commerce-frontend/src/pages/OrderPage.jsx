
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Store, Phone, User, Plus, X, ChevronRight } from 'lucide-react';
import { fetchAddressList, addAddress, updateAddress, deleteAddress, fetchCardList, addCard, updateCard, deleteCard } from '../store/slices/clientSlice';
import { useForm } from 'react-hook-form';
import api from '../api/axios';
import { clearCart } from '../store/slices/shoppingCartSlice';
import { toast } from 'react-toastify';

const AddressFormModal = ({ isOpen, onClose, onSubmit, initialData }) => {
    const { register, handleSubmit, reset, setValue } = useForm();

    useEffect(() => {
        if (isOpen && initialData) {
            Object.keys(initialData).forEach(key => setValue(key, initialData[key]));
        } else {
            reset();
        }
    }, [isOpen, initialData, setValue, reset]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto relative">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-black">
                    <X size={24} />
                </button>
                <h2 className="text-2xl font-bold mb-6 text-[#252B42]">{initialData ? 'Adresi Düzenle' : 'Yeni Adres Ekle'}</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-bold text-[#252B42]">Adres Başlığı</label>
                            <input {...register("title", { required: true })} className="border border-gray-300 rounded p-3" placeholder="Örn: Ev Adresim" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-bold text-[#252B42]">Telefon</label>
                            <input {...register("phone", { required: true })} className="border border-gray-300 rounded p-3" placeholder="053..." />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-bold text-[#252B42]">Ad</label>
                            <input {...register("name", { required: true })} className="border border-gray-300 rounded p-3" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-bold text-[#252B42]">Soyad</label>
                            <input {...register("surname", { required: true })} className="border border-gray-300 rounded p-3" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-bold text-[#252B42]">İl</label>
                            <select {...register("city", { required: true })} className="border border-gray-300 rounded p-3 bg-white">
                                <option value="">Şehir Seçiniz</option>
                                <option value="istanbul">İstanbul</option>
                                <option value="ankara">Ankara</option>
                                <option value="izmir">İzmir</option>
                                <option value="bursa">Bursa</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-bold text-[#252B42]">İlçe</label>
                            <input {...register("district", { required: true })} className="border border-gray-300 rounded p-3" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-bold text-[#252B42]">Mahalle</label>
                        <input {...register("neighborhood", { required: true })} className="border border-gray-300 rounded p-3" />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-bold text-[#252B42]">Adres Detayı</label>
                        <textarea {...register("address", { required: true })} className="border border-gray-300 rounded p-3 min-h-[100px]" placeholder="Sokak, bina no, kapı no..." />
                    </div>

                    <button type="submit" className="w-full bg-[#F27A1A] text-white font-bold py-3 rounded hover:bg-orange-600 transition-colors">
                        Kaydet
                    </button>
                </form>
            </div>
        </div>
    );
};

const CardForm = ({ onCancel, onSubmit }) => {
    const { register, handleSubmit } = useForm();
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="border border-gray-200 rounded-lg p-4 bg-gray-50 mb-4">
            <div className="grid grid-cols-1 gap-4">
                <div className="flex flex-col gap-1">
                    <label className="text-sm font-bold text-[#252B42]">Kart Numarası</label>
                    <input {...register("card_no", { required: true, maxLength: 16, minLength: 16 })} className="border border-gray-300 rounded p-3" placeholder="0000 0000 0000 0000" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-bold text-[#252B42]">Son Kullanma Tarihi</label>
                        <div className="flex gap-2">
                            <select {...register("expire_month", { required: true })} className="border border-gray-300 rounded p-3 bg-white w-full">
                                {Array.from({ length: 12 }, (_, i) => i + 1).map(m => (
                                    <option key={m} value={m}>{m < 10 ? `0${m} ` : m}</option>
                                ))}
                            </select>
                            <select {...register("expire_year", { required: true })} className="border border-gray-300 rounded p-3 bg-white w-full">
                                {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i).map(y => (
                                    <option key={y} value={y}>{y}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-bold text-[#252B42]">CVV</label>
                        <input className="border border-gray-300 rounded p-3 w-24" placeholder="***" maxLength={3} />
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-sm font-bold text-[#252B42]">Kart Üzerindeki İsim</label>
                    <input {...register("name_on_card", { required: true })} className="border border-gray-300 rounded p-3" placeholder="Ad Soyad" />
                </div>
                <div className="flex gap-2 mt-2">
                    <button type="submit" className="bg-[#F27A1A] text-white font-bold px-6 py-2 rounded">Kaydet</button>
                    <button type="button" onClick={onCancel} className="text-[#737373] font-bold px-6 py-2">Vazgeç</button>
                </div>
            </div>
        </form>
    );
};


const OrderPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const { user, addressList, creditCards } = useSelector(state => state.client);
    const { cart } = useSelector(state => state.shoppingCart);

    const [modalOpen, setModalOpen] = useState(false);
    const [editingAddress, setEditingAddress] = useState(null);
    const [selectedAddressId, setSelectedAddressId] = useState(null);

    const [activeStep, setActiveStep] = useState(1);
    const [selectedCardId, setSelectedCardId] = useState(null);
    const [showCardForm, setShowCardForm] = useState(false);

    const subtotal = cart.reduce((sum, item) => item.checked ? sum + (item.product.price * item.count) : sum, 0);
    const shippingCost = subtotal > 150 || subtotal === 0 ? 0 : 29.99;
    const grandTotal = subtotal + shippingCost;

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login", { state: { from: location } });
        }
    }, [navigate, location]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            if (activeStep === 1 && addressList.length === 0) {
                dispatch(fetchAddressList());
            }
            if (activeStep === 2) {
                dispatch(fetchCardList());
            }
        }
    }, [dispatch, activeStep, addressList.length]);

    const handleAddSubmit = (data) => {
        const action = editingAddress
            ? updateAddress({ ...editingAddress, ...data })
            : addAddress(data);

        dispatch(action).then(() => {
            dispatch(fetchAddressList());
            setModalOpen(false);
            setEditingAddress(null);
        });
    };

    const handleEditClick = (address) => {
        setEditingAddress(address);
        setModalOpen(true);
    };

    const handleDeleteClick = (id) => {
        if (confirm("Bu adresi silmek istediğinize emin misiniz?")) {
            dispatch(deleteAddress(id)).then(() => dispatch(fetchAddressList()));
        }
    };

    const handleCardSubmit = (data) => {
        const payload = { ...data, expire_month: Number(data.expire_month), expire_year: Number(data.expire_year) };
        dispatch(addCard(payload)).then(() => {
            dispatch(fetchCardList());
            setShowCardForm(false);
        });
    };

    const handlePayment = async () => {
        if (!selectedAddressId) {
            toast.error("Lütfen bir teslimat adresi seçiniz.");
            return;
        }

        let cardData = {};
        if (showCardForm) {
            toast.error("Lütfen kartı önce kaydedin veya listeden bir kart seçin.");
            return;
        } else {
            if (!selectedCardId) {
                toast.error("Lütfen bir kart seçiniz.");
                return;
            }
            const card = creditCards.find(c => c.id === selectedCardId);
            if (!card) return;
            cardData = {
                card_no: card.card_no,
                card_name: card.name_on_card || card.card_name,
                card_expire_month: card.expire_month,
                card_expire_year: card.expire_year,
                card_ccv: 123
            };
        }

        const payload = {
            address_id: selectedAddressId,
            order_date: new Date().toISOString(),
            ...cardData,
            price: grandTotal,
            products: cart.filter(i => i.checked).map(item => ({
                product_id: item.product.id,
                count: item.count,
                detail: item.product.detail || "Standart"
            }))
        };

        try {
            await api.post('/order', payload);
            toast.success("Siparişiniz başarıyla alındı! Teşekkür ederiz.");
            dispatch(clearCart());
            navigate("/");
        } catch (error) {
            console.error(error);
            toast.error("Sipariş oluşturulurken bir hata oluştu.");
        }
    };

    return (
        <div className="bg-[#FAFAFA] min-h-screen pb-12">
            <div className="container mx-auto px-4 py-8">

                <div className="flex gap-12 mb-8">
                    <div className={`flex-1 border-b-4 pb-4 cursor-pointer ${activeStep === 1 ? 'border-[#F27A1A]' : 'border-gray-200'} `} onClick={() => setActiveStep(1)}>
                        <h2 className={`${activeStep === 1 ? 'text-[#F27A1A]' : 'text-[#252B42]'} text-xl font-bold`}>1 Adres Bilgileri</h2>
                        <div className="text-sm text-[#252B42] mt-1">{addressList?.find(a => a.id === selectedAddressId)?.title || addressList?.[0]?.title || 'Teslimat Adresi'}</div>
                        <div className="text-xs text-[#737373] line-clamp-1">{addressList?.find(a => a.id === selectedAddressId)?.address || addressList?.[0]?.address || '...'}</div>
                    </div>
                    <div className={`flex-1 border-b-4 pb-4 cursor-pointer ${activeStep === 2 ? 'border-[#F27A1A]' : 'border-gray-200 opacity-50'} `} onClick={() => selectedAddressId && setActiveStep(2)}>
                        <h2 className={`${activeStep === 2 ? 'text-[#F27A1A]' : 'text-[#252B42]'} text-xl font-bold`}>2 Ödeme Seçenekleri</h2>
                        <div className="text-sm text-[#252B42] mt-1">Banka/Kredi Kartı veya Alışveriş Kredisi ile ödemenizi güvenle yapabilirsiniz.</div>
                    </div>
                </div>

                {activeStep === 1 && (
                    <div className="bg-[#FFF4E6] border border-[#F27A1A] p-4 rounded-md flex items-center gap-3 mb-8 text-sm text-[#252B42]">
                        <span className="text-[#F27A1A] font-bold text-xl">i</span>
                        Kurumsal faturalı alışveriş yapmak için "Faturamı Aynı Adrese Gönder" tikini kaldırın ve Fatura adresi olarak kayıtlı Kurumsal Fatura adresinizi seçin.
                    </div>
                )}

                <div className="flex flex-col lg:flex-row gap-8">

                    <div className="flex-1">

                        {activeStep === 1 && (
                            <>
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-lg font-bold text-[#252B42]">Teslimat Adresi</h3>
                                    <label className="flex items-center gap-2 text-sm text-[#737373] cursor-pointer">
                                        <input type="checkbox" defaultChecked className="accent-[#F27A1A]" />
                                        Faturamı Aynı Adrese Gönder
                                    </label>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <button
                                        onClick={() => { setEditingAddress(null); setModalOpen(true); }}
                                        className="min-h-[160px] border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center gap-2 hover:bg-gray-50 transition-colors text-[#252B42] font-bold"
                                    >
                                        <Plus size={32} />
                                        Yeni Adres Ekle
                                    </button>

                                    {addressList.map(address => (
                                        <div
                                            key={address.id}
                                            className={`relative p-4 rounded-lg border cursor-pointer transition-all ${selectedAddressId === address.id ? 'border-[#F27A1A] shadow-md bg-[#FFF]' : 'border-gray-200 bg-white hover:border-gray-300'} `}
                                            onClick={() => setSelectedAddressId(address.id)}
                                        >
                                            <div className="flex justify-between items-center mb-2">
                                                <div className="flex items-center gap-2">
                                                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${selectedAddressId === address.id ? 'border-[#F27A1A]' : 'border-gray-400'} `}>
                                                        {selectedAddressId === address.id && <div className="w-2 h-2 rounded-full bg-[#F27A1A]" />}
                                                    </div>
                                                    <span className="font-bold text-[#252B42]">{address.title}</span>
                                                </div>
                                                <button onClick={(e) => { e.stopPropagation(); handleEditClick(address); }} className="text-xs font-bold underline text-[#737373] hover:text-[#F27A1A]">Düzenle</button>
                                            </div>

                                            <div className="text-sm p-2 bg-[#FAFAFA] rounded mb-2">
                                                <div className="flex justify-between text-[#252B42] font-bold mb-1">
                                                    <span className="flex items-center gap-1"><User size={12} /> {address.name} {address.surname}</span>
                                                    <span className="flex items-center gap-1"><Phone size={12} /> {address.phone}</span>
                                                </div>
                                                <div className="text-[#737373] line-clamp-2">
                                                    {address.address} {address.city}/{address.district}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}

                        {activeStep === 2 && (
                            <div className="bg-white border border-gray-200 rounded-lg p-6">
                                <div className="flex items-center gap-2 mb-6 border-b pb-4">
                                    <h3 className="text-lg font-bold text-[#252B42]">Kart ile Öde</h3>
                                    <span className="text-sm text-[#737373]">Kart ile ödemeyi seçtiniz. Banka veya Kredi Kartı kullanarak ödemenizi güvenle yapabilirsiniz.</span>
                                </div>

                                <div className="flex flex-col md:flex-row gap-8">
                                    <div className="flex-1">
                                        <div className="flex justify-between items-center mb-4">
                                            <h4 className="font-bold text-[#252B42]">Kart Bilgileri</h4>
                                            <button onClick={() => setShowCardForm(!showCardForm)} className="text-sm underline text-[#737373] hover:text-[#F27A1A]">
                                                {showCardForm ? 'Kayıtlı Kartlarıma Dön' : 'Başka bir Kart ile Ödeme Yap'}
                                            </button>
                                        </div>

                                        {showCardForm ? (
                                            <CardForm onCancel={() => setShowCardForm(false)} onSubmit={handleCardSubmit} />
                                        ) : (
                                            <div className="flex flex-col gap-3">
                                                {creditCards?.map(card => (
                                                    <label key={card.id} className={`flex items-center gap-3 border p-4 rounded-lg cursor-pointer ${selectedCardId === card.id ? 'border-[#F27A1A] bg-orange-50' : 'border-gray-200'} `}>
                                                        <input
                                                            type="radio"
                                                            name="selectedCard"
                                                            checked={selectedCardId === card.id}
                                                            onChange={() => setSelectedCardId(card.id)}
                                                            className="accent-[#F27A1A] w-4 h-4"
                                                        />
                                                        <div className="flex-1">
                                                            <div className="font-bold text-[#252B42]">{card.name_on_card}</div>
                                                            <div className="text-sm text-[#737373]">{card.card_no}</div>
                                                        </div>
                                                        <div className="text-xs text-[#737373]">{card.expire_month}/{card.expire_year}</div>
                                                    </label>
                                                ))}
                                                {(!creditCards || creditCards.length === 0) && (
                                                    <div className="text-center py-4 text-gray-500 text-sm">Hiç kayıtlı kartınız yok. Yeni ekleyin.</div>
                                                )}
                                            </div>
                                        )}

                                        {!showCardForm && (
                                            <div className="mt-4 flex items-center gap-2">
                                                <input type="checkbox" id="3dsecure" className="accent-[#F27A1A]" />
                                                <label htmlFor="3dsecure" className="text-sm font-bold text-[#252B42]">3D Secure ile ödemek istiyorum.</label>
                                            </div>
                                        )}
                                    </div>

                                    <div className="w-full md:w-[300px] bg-gray-50 p-4 rounded border border-gray-200 h-fit">
                                        <h4 className="font-bold text-[#252B42] mb-2">Taksit Seçenekleri</h4>
                                        <p className="text-xs text-[#737373] mb-4">Kartınıza uygun taksit seçeneğini seçiniz</p>

                                        <table className="w-full text-sm">
                                            <thead>
                                                <tr className="border-b">
                                                    <th className="text-left py-2">Taksit Sayısı</th>
                                                    <th className="text-right py-2">Aylık Ödeme</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="py-3 flex items-center gap-2">
                                                        <input type="radio" checked readOnly className="accent-[#F27A1A]" /> Tek Çekim
                                                    </td>
                                                    <td className="text-right font-bold text-[#F27A1A]">{grandTotal.toLocaleString('tr-TR', { minimumFractionDigits: 2 })} TL</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        )}
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

                            <button
                                onClick={activeStep === 1 ? () => setActiveStep(2) : handlePayment}
                                className="w-full py-3 bg-[#F27A1A] text-white font-bold text-base rounded-md hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
                            >
                                {activeStep === 1 ? 'Kaydet ve Devam Et' : 'Ödeme Yap'} <ChevronRight size={18} />
                            </button>

                            {activeStep === 2 && (
                                <div className="mt-4 p-3 bg-gray-50 rounded border border-gray-200 text-xs text-[#737373]">
                                    <label className="flex gap-2 cursor-pointer">
                                        <input type="checkbox" className="mt-1 accent-[#F27A1A]" defaultChecked />
                                        <span>
                                            <span className="font-bold underline">Ön Bilgilendirme Koşulları</span>'nı ve <span className="font-bold underline">Mesafeli Satış Sözleşmesi</span>'ni okudum, onaylıyorum.
                                        </span>
                                    </label>
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </div>

            <AddressFormModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                onSubmit={handleAddSubmit}
                initialData={editingAddress}
            />
        </div>
    );
};

export default OrderPage;
