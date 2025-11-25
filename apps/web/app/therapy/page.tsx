import Image from "next/image";
import { CheckCircle, Calendar, Heart, Shield } from "lucide-react";

export default function Therapy() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* HEADER */}
      <div className="bg-emerald-50 py-24 px-6 text-center border-b border-emerald-100">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold mb-6">Mental Health & Wellness</span>
          <h1 className="text-5xl md:text-6xl font-bold text-emerald-950 mb-6 tracking-tight">Heal Through Art</h1>
          <div className="flex justify-center gap-4">
            <button className="bg-emerald-700 text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-800 transition shadow-lg">Book Consultation</button>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
           {/* FIXED: Changed .jpg to .jpeg */}
           <Image 
             src="/assets/categories/divine_art3.jpeg" 
             alt="Therapy Art" 
             fill 
             className="object-cover" 
           />
        </div>
        <div className="space-y-8">
           <h2 className="text-3xl font-bold text-slate-900">Therapeutic Sessions</h2>
           
           <div className="bg-white border border-slate-200 p-6 rounded-xl hover:shadow-md transition cursor-pointer group">
             <h3 className="text-xl font-bold text-emerald-800 mb-2 group-hover:text-emerald-600">Mandala Mindfulness</h3>
             <p className="text-slate-600">Focus your mind and reduce anxiety through geometric patterns.</p>
           </div>

           <div className="bg-white border border-slate-200 p-6 rounded-xl hover:shadow-md transition cursor-pointer group">
             <h3 className="text-xl font-bold text-emerald-800 mb-2 group-hover:text-emerald-600">Expressive Scribbling</h3>
             <p className="text-slate-600">Release suppressed emotions through free-form techniques.</p>
           </div>

           <div className="bg-white border border-slate-200 p-6 rounded-xl hover:shadow-md transition cursor-pointer group">
             <h3 className="text-xl font-bold text-emerald-800 mb-2 group-hover:text-emerald-600">Clay Grounding</h3>
             <p className="text-slate-600">Connect with the earth and ground yourself through tactile clay work.</p>
           </div>
        </div>
      </div>
    </div>
  );
}