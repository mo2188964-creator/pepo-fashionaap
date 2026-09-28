import React, { useState } from 'react';
import { ShoppingBag, ShoppingCart, Heart, Phone, MapPin, Grid, Layers } from 'lucide-react';

export default function App() {
  const [cartCount, setCartCount] = useState(0);
  const [activeCategory, setActiveCategory] = useState('الكل');

  const categories = ['الكل', 'فساتين', 'عبايات', 'أزياء كاجوال', 'إكسسوارات'];

  const products = [
    { id: 1, name: 'فستان سهرة أنيق', price: '450 ج.م', category: 'فساتين', img: 'https://unsplash.com' },
    { id: 2, name: 'عباءة سوداء ملكية', price: '600 ج.م', category: 'عبايات', img: 'https://unsplash.com' },
    { id: 3, name: 'طقم كاجوال عصري', price: '380 ج.م', category: 'أزياء كاجوال', img: 'https://unsplash.com' },
    { id: 4, name: 'حقيبة يد فاخرة', price: '250 ج.م', category: 'إكسسوارات', img: 'https://unsplash.com' },
  ];

  const filteredProducts = activeCategory === 'الكل' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans" dir="rtl">
      {/* الهيدر العلوي */}
      <header className="bg-white shadow-sm sticky top-0 z-50 px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <ShoppingBag className="text-purple-600 w-6 h-6" />
          <h1 className="text-xl font-bold text-gray-800">بيبو فاشن | Pepo Fashion</h1>
        </div>
        <div className="relative bg-purple-50 p-2 rounded-full text-purple-600">
          <ShoppingCart className="w-6 h-6" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
              {cartCount}
            </span>
          )}
        </div>
      </header>

      {/* قسم الترحيب البصري */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center py-10 px-4">
        <h2 className="text-2xl font-extrabold mb-2">أحدث صيحات الموضة والأزياء</h2>
        <p className="text-purple-100 text-sm">اكتشفي تشكيلتنا المميزة بأسعار لا تقبل المنافسة</p>
      </section>

      {/* تصنيفات المتجر */}
      <div className="p-4 overflow-x-auto flex gap-2 whitespace-nowrap bg-white border-b border-gray-100">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === cat ? 'bg-purple-600 text-white shadow-md' : 'bg-gray-100 text-gray-600'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* قائمة المنتجات */}
      <main className="p-4 grid grid-cols-2 gap-4 flex-1">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
            <div className="relative">
              <img src={product.img} alt={product.name} className="w-full h-40 object-cover" />
              <button className="absolute top-2 left-2 bg-white/80 p-1.5 rounded-full text-gray-600 backdrop-blur-sm">
                <Heart className="w-4 h-4" />
              </</button>
            </div>
            <div className="p-3 flex flex-col flex-1 justify-between">
              <div>
                <span className="text-xs text-purple-600 font-semibold bg-purple-50 px-2 py-0.5 rounded">
                  {product.category}
                </span>
                <h3 className="text-sm font-bold text-gray-800 mt-1.5 line-clamp-1">{product.name}</h3>
                <p className="text-purple-600 font-extrabold text-sm mt-1">{product.price}</p>
              </div>
              <button 
                onClick={() => setCartCount(cartCount + 1)}
                className="w-full bg-purple-600 text-white text-xs font-bold py-2 rounded-lg mt-3 active:scale-95 transition-transform"
              >
                إضافة للسلة
              </button>
            </div>
          </div>
        ))}
      </main>

      {/* الفوتر وأزرار التواصل */}
      <footer className="bg-white border-t border-gray-100 p-4 text-center text-xs text-gray-500 flex flex-col gap-2 items-center">
        <div className="flex gap-4 text-gray-600 mb-1">
          <a href="tel:0123456789" className="flex items-center gap-1"><Phone className="w-4 h-4 text-purple-600" /> اتصلي بنا</a>
          <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-purple-600" /> القاهرة، مصر</span>
        </div>
        <p>© 2026 جميع الحقوق محفوظة لمتجر بيبو فاشن</p>
      </footer>
    </div>
  );
}
