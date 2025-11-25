import Image from "next/image";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

const exhibitions = [
  {
    id: 1,
    title: "Family & Roots",
    description: "A heartwarming collection celebrating family bonds, featuring sketches of parents, grandparents, and childhood memories.",
    curator: "Arks Academy",
    dates: "Nov 20 - Dec 15, 2025",
    location: "Virtual Hall A",
    image: "/assets/categories/PARENTS.jpeg", 
    status: "Live Now"
  },
  {
    id: 2,
    title: "Nature's Whisper",
    description: "Exploring the silence of the woods and the beauty of wildlife through charcoal and pencil.",
    curator: "Arks Collective",
    dates: "Jan 10 - Jan 25, 2026",
    location: "Virtual Hall B",
    image: "/assets/categories/IN_WOODS.jpeg",
    status: "Upcoming"
  },
  {
    id: 3,
    title: "Digital Horizons",
    description: "A showcase of modern digital art, logos, and character designs from our advanced students.",
    curator: "Arks Digital",
    dates: "Feb 01 - Feb 28, 2026",
    location: "Virtual Hall C",
    image: "/assets/categories/digital_art.png",
    status: "Upcoming"
  }
];

export default function Exhibitions() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          {/* Ensure bg.jpeg exists in public/assets/categories/ */}
          <Image src="/assets/categories/bg.jpeg" alt="Gallery Background" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <span className="text-blue-400 font-bold tracking-widest text-sm uppercase mb-4 block">Arks Colloquium</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Virtual Exhibitions</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 space-y-24">
        {exhibitions.map((exhibit, index) => (
          <div key={exhibit.id} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
            {/* Image Container */}
            <div className="flex-1 relative w-full h-[450px] rounded-lg border border-gray-800 group cursor-pointer shadow-2xl bg-gray-900">
              <Image 
                src={exhibit.image} 
                alt={exhibit.title} 
                fill 
                className="object-contain p-2" // <--- FIXED: Shows full image
              />
              <div className={`absolute top-6 left-6 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide z-10 ${exhibit.status === 'Live Now' ? 'bg-red-600 text-white animate-pulse' : 'bg-blue-600 text-white'}`}>
                {exhibit.status}
              </div>
            </div>
            
            <div className="flex-1 space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">{exhibit.title}</h2>
              <p className="text-lg text-gray-400 leading-relaxed">{exhibit.description}</p>
              <div className="pt-6">
                <button className="bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-gray-200 transition flex items-center gap-2">Enter Gallery <ArrowRight size={20} /></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}