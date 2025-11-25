import Link from "next/link";
import { CheckCircle, Palette, Users, DollarSign } from "lucide-react";

export default function Teach() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      
      {/* HEADER */}
      <div className="bg-brand-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Teach, Sell, & Inspire</h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
          Join Arks Academy as an instructor or artist. Share your creativity and earn from your passion.
        </p>
      </div>

      {/* BENEFITS GRID */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-12">
          
          {/* Feature 1 */}
          <div className="text-center p-6 border rounded-2xl hover:shadow-lg transition">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
              <DollarSign size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Sell Your Art</h3>
            <p className="text-slate-600">List your paintings, sketches, and digital art in our premium marketplace.</p>
          </div>

          {/* Feature 2 */}
          <div className="text-center p-6 border rounded-2xl hover:shadow-lg transition">
            <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-600">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Host Workshops</h3>
            <p className="text-slate-600">Conduct live healing art sessions or record courses for students.</p>
          </div>

          {/* Feature 3 */}
          <div className="text-center p-6 border rounded-2xl hover:shadow-lg transition">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-purple-600">
              <Palette size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Exhibit Your Work</h3>
            <p className="text-slate-600">Get featured in our digital exhibitions and the Arks Colloquium.</p>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <button className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition shadow-xl">
            Register as an Artist
          </button>
          <p className="mt-4 text-sm text-slate-500">No upfront fees. You keep 85% of your sales.</p>
        </div>
      </div>
    </div>
  );
}