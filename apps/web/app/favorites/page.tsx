"use client";
import Link from "next/link";
import Image from "next/image";
import { useShop } from "../../context/ShopContext";
import { products } from "../../lib/data";
import { Heart, ShoppingCart, ArrowRight } from "lucide-react";

export default function Favorites() {
  const { favorites, toggleFavorite, addToCart, cart } = useShop();
  
  // Filter the master list to find favorite items
  const favItems = products.filter((p) => favorites.includes(p.id));

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Heart className="fill-red-500 text-red-500 w-8 h-8" /> 
          <h1 className="text-3xl font-bold text-slate-900">Your Wishlist</h1>
        </div>

        {favItems.length === 0 ? (
          <div className="text-center py-32 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-400">
              <Heart size={40} />
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Your wishlist is empty</h2>
            <p className="text-slate-500 mb-8">Save items you love to find them easily later.</p>
            <Link href="/marketplace" className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-slate-800 transition inline-flex items-center gap-2">
              Explore Art <ArrowRight size={18}/>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {favItems.map((item) => (
              <div key={item.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition group relative">
                <div className="relative aspect-square bg-slate-50 border-b border-slate-100">
                  <Image src={item.image} alt={item.title} fill className="object-contain p-4" />
                  <button 
                    onClick={() => toggleFavorite(item.id)}
                    className="absolute top-3 right-3 p-2 bg-white text-red-500 rounded-full shadow-sm hover:bg-slate-100"
                  >
                    <Heart size={18} fill="currentColor" />
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-slate-900 truncate">{item.title}</h3>
                  <p className="text-sm text-slate-500 mb-4">₹{item.price.toLocaleString()}</p>
                  <button 
                    onClick={() => addToCart(item.id)}
                    className={`w-full py-2.5 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition ${cart.includes(item.id) ? 'bg-green-100 text-green-700' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                  >
                    <ShoppingCart size={16} /> {cart.includes(item.id) ? "Added" : "Add to Cart"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}