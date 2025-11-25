import Image from "next/image";
import Link from "next/link";
import { products } from "../../../lib/data"; 
import AddToCartButton from "./AddToCartButton"; // We will create a small client component for buttons below
import { ArrowLeft, Star } from "lucide-react";
import type { Metadata } from "next";

// 1. DYNAMIC SEO GENERATION
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((p) => p.id === Number(id));
  
  if (!product) return { title: "Product Not Found" };
  
  return {
    title: `${product.title} by ${product.artist}`,
    description: product.description,
    openGraph: {
      images: [product.image],
    },
  };
}

// 2. SERVER COMPONENT (Faster Loading)
export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <div className="p-20 text-center">Product not found</div>;

  // Find similar items
  const similarProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-white pb-20 pt-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Back Button */}
        <Link href="/marketplace" className="inline-flex items-center text-slate-500 hover:text-blue-600 mb-8 transition">
          <ArrowLeft size={20} className="mr-2" /> Back to Market
        </Link>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Image */}
          <div className="relative aspect-square bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
            <Image 
              src={product.image} 
              alt={product.title} 
              fill 
              className="object-contain p-4" 
              priority
            />
          </div>

          {/* Right: Details */}
          <div className="flex flex-col justify-center">
            <span className="text-blue-600 font-bold text-sm uppercase tracking-wide mb-2">{product.category}</span>
            <h1 className="text-4xl font-bold text-slate-900 mb-2">{product.title}</h1>
            <p className="text-lg text-slate-500 mb-6">by {product.artist}</p>
            
            <p className="text-slate-700 leading-relaxed mb-8 text-lg">{product.description}</p>

            <div className="flex items-center gap-6 mb-8">
              <span className="text-4xl font-bold text-slate-900">₹{product.price.toLocaleString()}</span>
              
              {/* Interactive Client Component for Buttons */}
              <AddToCartButton productId={product.id} />
            </div>
          </div>
        </div>

        {/* REVIEWS MOCKUP */}
        <div className="mt-20 border-t border-slate-100 pt-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Customer Reviews</h2>
          <div className="flex gap-4 mb-8">
             <div className="bg-slate-50 p-4 rounded-lg">
                <div className="flex text-yellow-400 mb-2"><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/></div>
                <p className="text-sm text-slate-600">"Absolutely stunning artwork. Arrived safely packed." - <span className="font-bold">Rohan K.</span></p>
             </div>
          </div>
        </div>

        {/* SIMILAR PRODUCTS */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {similarProducts.map((p) => (
              <Link key={p.id} href={`/marketplace/${p.id}`}>
                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition cursor-pointer group">
                  <div className="relative aspect-square bg-slate-50">
                    <Image src={p.image} alt={p.title} fill className="object-contain p-4" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-slate-900 truncate">{p.title}</h3>
                    <p className="text-sm text-slate-500">₹{p.price.toLocaleString()}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}