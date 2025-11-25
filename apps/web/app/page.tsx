import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// --- TYPES ---
interface Category {
  id: string;
  name: string;
  slug: string;
  image: string | null;
}

// --- API FETCH ---
async function getCategories() {
  try {
    const res = await fetch('http://127.0.0.1:4000/categories', { 
      cache: 'no-store' 
    });
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
}

export default async function Home() {
  const categories: Category[] = await getCategories();

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      
      {/* NOTE: Navbar is now handled globally in layout.tsx */}

      {/* HERO SECTION */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image 
            src="/assets/categories/bg.jpeg" 
            alt="Art Background" 
            fill 
            className="object-cover brightness-50" // Darkens image so text pops
            priority
          />
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            A Center for <br/> <span className="text-blue-400">Peace & Creativity</span>
          </h1>
          <p className="text-xl text-slate-200 mb-10 max-w-2xl mx-auto">
            Buy original art, join live workshops, or find healing in our therapy sessions. 
            A colloquium of works by Arks Academy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/marketplace" className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition text-lg">
              Browse Art
            </Link>
            <Link href="/teach" className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition text-lg">
              Join as Artist
            </Link>
          </div>
        </div>
      </section>

      {/* CATEGORIES GRID */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900">Explore Categories</h2>
          <Link href="/marketplace" className="text-blue-600 font-bold flex items-center gap-1 hover:gap-2 transition-all">
            View All Categories <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.slice(0, 8).map((cat) => (
            <Link key={cat.id} href={`/marketplace?category=${cat.slug}`}>
              <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md cursor-pointer">
                {cat.image ? (
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-400">No Image</div>
                )}
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                  <h3 className="text-white font-bold text-lg">{cat.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}