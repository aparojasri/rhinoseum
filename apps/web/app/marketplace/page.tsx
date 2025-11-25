"use client";
import { useState } from "react";
import { Filter, Search } from "lucide-react";
import { products } from "../../lib/data"; // Source of truth (54 items)
import ProductCard from "../../components/ProductCard"; // The Atomic Component

export default function Marketplace() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Categories list
  const categories = ["All", "Sketches", "Paintings", "Digital", "Crafts", "Fashion", "Books"];

  // Filter Logic
  const filteredProducts = products.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      
      {/* --- 1. HEADER & SEARCH --- */}
      <div className="bg-white border-b border-slate-200 py-8 px-6 sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Art Marketplace</h1>
            <p className="text-slate-500 mt-1">{filteredProducts.length} Original Artworks</p>
          </div>
          
          <div className="relative w-full md:w-96">
            <input 
              type="text" 
              placeholder="Search art, books, crafts..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row gap-8">
        
        {/* --- 2. SIDEBAR FILTERS --- */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 sticky top-40">
            <div className="flex items-center gap-2 font-bold text-lg mb-6">
              <Filter size={20} /> Categories
            </div>
            <div className="space-y-2">
              {categories.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-sm transition ${selectedCategory === cat ? 'bg-blue-50 text-blue-700 font-bold' : 'text-slate-600 hover:bg-slate-50'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* --- 3. PRODUCT GRID (Using Atomic Component) --- */}
        <div className="flex-1">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-slate-500 text-lg">No artworks found matching your search.</p>
              <button 
                onClick={() => {setSearch(""); setSelectedCategory("All")}}
                className="text-blue-600 hover:underline mt-2"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}