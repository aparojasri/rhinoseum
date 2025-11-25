"use client";
import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingBag, Heart } from "lucide-react";
import { useShop } from "../context/ShopContext"; // <--- Connects to Global Brain

export default function Navbar() {
  const { cart, favorites } = useShop(); // Get real counts

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* CIRCULAR LOGO */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 overflow-hidden rounded-full border border-slate-200">
            <Image 
              src="/assets/categories/logo.png" 
              alt="Arks Academy Logo" 
              fill
              className="object-cover group-hover:scale-105 transition-transform" 
            />
          </div>
          <span className="text-2xl font-bold tracking-tighter text-brand-900">
            ARKS<span className="text-blue-600">Academy</span>
          </span>
        </Link>
        
        {/* CENTER LINKS */}
        <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600 items-center">
          <Link href="/marketplace" className="hover:text-blue-600 transition">Marketplace</Link>
          <Link href="/courses" className="hover:text-blue-600 transition">Courses</Link>
          <Link href="/therapy" className="hover:text-blue-600 transition">Therapy</Link>
          <Link href="/exhibitions" className="hover:text-blue-600 transition">Exhibitions</Link>
        </div>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center space-x-2">
          
          {/* Favorites Icon */}
          <Link href="/favorites" className="p-2 text-slate-600 hover:bg-slate-100 rounded-full relative group">
            <Heart size={22} className="group-hover:text-red-500 transition"/>
            {favorites.length > 0 && (
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full ring-2 ring-white animate-pulse"></span>
            )}
          </Link>

          {/* Cart Icon */}
          <Link href="/cart" className="p-2 text-slate-600 hover:bg-slate-100 rounded-full relative group">
            <ShoppingBag size={22} className="group-hover:text-blue-600 transition"/>
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-sm ring-2 ring-white">
                {cart.length}
              </span>
            )}
          </Link>
          
          {/* Auth Buttons */}
          <div className="hidden md:flex gap-3 ml-2">
            <Link href="/login">
              <button className="px-4 py-2 text-sm font-bold text-slate-700 hover:text-blue-600">
                Log In
              </button>
            </Link>
            <Link href="/signup">
              <button className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-slate-800 transition shadow-md hover:shadow-lg">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}