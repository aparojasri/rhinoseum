"use client";
import { useShop } from "../../../context/ShopContext";
import { ShoppingCart, Heart, Check } from "lucide-react";

export default function AddToCartButton({ productId }: { productId: number }) {
  const { addToCart, toggleFavorite, cart, favorites } = useShop();
  const isAdded = cart.includes(productId);
  const isFav = favorites.includes(productId);

  return (
    <div className="flex gap-3">
      <button 
        onClick={() => addToCart(productId)}
        className={`px-8 py-3 rounded-full font-bold flex items-center gap-2 transition ${isAdded ? 'bg-green-100 text-green-700' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
      >
        {isAdded ? <><Check size={20} /> Added</> : <><ShoppingCart size={20} /> Add to Cart</>}
      </button>
      <button 
        onClick={() => toggleFavorite(productId)}
        className={`p-3 rounded-full border-2 transition ${isFav ? 'border-red-200 bg-red-50 text-red-500' : 'border-slate-200 text-slate-400 hover:border-red-200 hover:text-red-500'}`}
      >
        <Heart size={24} fill={isFav ? "currentColor" : "none"} />
      </button>
    </div>
  );
}