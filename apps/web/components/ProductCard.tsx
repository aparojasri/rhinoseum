"use client";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart, Check } from "lucide-react";
import { useShop } from "../context/ShopContext";

interface ProductProps {
  id: number;
  title: string;
  artist: string;
  price: number;
  category: string;
  image: string;
}

export default function ProductCard({ product }: { product: ProductProps }) {
  const { addToCart, toggleFavorite, cart, favorites } = useShop();
  const isAdded = cart.includes(product.id);
  const isFav = favorites.includes(product.id);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition group relative">
      {/* Image Area */}
      <Link href={`/marketplace/${product.id}`}>
        <div className="relative aspect-square bg-slate-50 border-b border-slate-100 cursor-pointer">
          <Image 
            src={product.image} 
            alt={product.title} 
            fill 
            loading="lazy" // Performance optimization [cite: 83]
            className="object-contain p-4 group-hover:scale-105 transition-transform duration-500" 
          />
        </div>
      </Link>

      {/* Floating Action Buttons */}
      <button 
        onClick={(e) => { e.stopPropagation(); toggleFavorite(product.id); }}
        className={`absolute top-3 right-3 p-2 backdrop-blur-md rounded-full transition shadow-sm z-10 ${isFav ? 'bg-red-50 text-red-500' : 'bg-white/90 text-slate-600 hover:text-red-500'}`}
        aria-label="Add to favorites" // Accessibility [cite: 121]
      >
        <Heart size={18} fill={isFav ? "currentColor" : "none"} />
      </button>

      {/* Info Area */}
      <div className="p-4">
        <Link href={`/marketplace/${product.id}`}>
          <h3 className="font-bold text-slate-900 text-lg truncate hover:text-blue-600 transition">
            {product.title}
          </h3>
        </Link>
        <p className="text-sm text-slate-500 mb-3">by {product.artist}</p>
        
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-slate-900">
            ₹{product.price.toLocaleString()}
          </span>
          
          <button 
            onClick={() => addToCart(product.id)}
            className={`px-4 py-2 rounded-lg text-sm font-bold transition flex items-center gap-2 ${isAdded ? 'bg-green-100 text-green-700' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
            aria-label={`Add ${product.title} to cart`} // Accessibility [cite: 121]
          >
            {isAdded ? <><Check size={16} /> Added</> : <><ShoppingCart size={16} /> Add</>}
          </button>
        </div>
      </div>
    </div>
  );
}