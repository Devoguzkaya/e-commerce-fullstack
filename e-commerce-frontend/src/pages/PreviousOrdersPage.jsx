import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';
import { ChevronDown, ChevronUp, Package, Clock, CheckCircle } from 'lucide-react';

const PreviousOrdersPage = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [expandedOrder, setExpandedOrder] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await api.get('/order');
                // API response might be wrapped or direct array. Assuming array or { data: [] }
                // Based on previous patterns, let's assume direct array or check structure.
                // If it follows standard pattern: response.data
                setOrders(Array.isArray(response.data) ? response.data : response.data.orders || []);
            } catch (error) {
                console.error("Failed to fetch orders", error);
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    const toggleOrder = (orderId) => {
        setExpandedOrder(expandedOrder === orderId ? null : orderId);
    };

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center">Yükleniyor...</div>;
    }

    return (
        <div className="bg-[#FAFAFA] min-h-screen py-8">
            <div className="container mx-auto px-4">
                <h1 className="text-2xl font-bold text-[#252B42] mb-6">Siparişlerim</h1>

                {orders.length === 0 ? (
                    <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                        <Package size={48} className="mx-auto text-gray-300 mb-4" />
                        <h3 className="text-lg font-bold text-gray-700">Henüz hiç siparişiniz yok.</h3>
                        <button onClick={() => navigate('/shop')} className="mt-4 text-[#F27A1A] font-bold hover:underline">Alışverişe Başla</button>
                    </div>
                ) : (
                    <div className="flex flex-col gap-4">
                        {orders.map((order) => (
                            <div key={order.id} className="bg-white border boundary-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                {/* Header Row */}
                                <div
                                    className="p-4 flex flex-col md:flex-row justify-between items-center cursor-pointer bg-gray-50 border-b border-gray-100"
                                    onClick={() => toggleOrder(order.id)}
                                >
                                    <div className="flex flex-col md:flex-row gap-4 md:gap-12 w-full md:w-auto">
                                        <div>
                                            <div className="text-xs text-gray-500 uppercase font-bold">Sipariş Tarihi</div>
                                            <div className="text-sm font-bold text-[#252B42] flex items-center gap-2">
                                                <Clock size={14} />
                                                {new Date(order.order_date).toLocaleDateString('tr-TR')}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-xs text-gray-500 uppercase font-bold">Toplam Tutar</div>
                                            <div className="text-sm font-bold text-[#F27A1A]">{order.price?.toLocaleString('tr-TR', { minimumFractionDigits: 2 })} TL</div>
                                        </div>
                                        <div>
                                            <div className="text-xs text-gray-500 uppercase font-bold">Ürün Sayısı</div>
                                            <div className="text-sm font-bold text-[#252B42]">{order.products?.reduce((a, b) => a + b.count, 0)} Adet</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 mt-4 md:mt-0 text-[#23A6F0] font-bold text-sm">
                                        Detaylar {expandedOrder === order.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                    </div>
                                </div>

                                {/* Expanded Details */}
                                {expandedOrder === order.id && (
                                    <div className="p-4 bg-white animate-fade-in-down">
                                        <div className="grid grid-cols-1 gap-4">
                                            {order.products?.map((item, idx) => (
                                                <div key={idx} className="flex gap-4 border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                                                    {/* We assume product details are embedded or enough info is present. API might return just ID? 
                                                        If API returns standard product objects populated:
                                                    */}
                                                    <div className="w-20 h-24 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                                                        {/* Placeholder or actual image if available in order item */}
                                                        <img src="https://via.placeholder.com/150" alt="Product" className="w-full h-full object-cover" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="flex justify-between">
                                                            <h4 className="font-bold text-[#252B42]">{item.detail || `Ürün ID: ${item.product_id}`}</h4>
                                                            <span className="font-bold text-[#F27A1A]">x{item.count}</span>
                                                        </div>
                                                        <p className="text-sm text-gray-500 mt-1">
                                                            {/* Price might not be on item level in order history payload usually, but good to have if possible */}
                                                        </p>
                                                        <div className="mt-2 text-green-600 text-xs font-bold flex items-center gap-1">
                                                            <CheckCircle size={12} /> Sipariş Alındı
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default PreviousOrdersPage;
