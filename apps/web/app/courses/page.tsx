"use client"; // <--- Add this at the very top
import Image from "next/image";
import { Star, Clock, BookOpen, Filter, ShoppingCart, Check } from "lucide-react";
import { useShop } from "../../context/ShopContext"; // Import Context

// Use the IDs we just added to data.ts
const courses = [
  { id: 101, title: "Portrait Masterclass", instructor: "Arks Academy", level: "Intermediate", duration: "8 Weeks", rating: 4.9, reviews: 128, price: 4999, image: "/assets/categories/GRANDPA.jpeg", tag: "Best Seller" },
  { id: 102, title: "Fashion Illustration", instructor: "Arks Fashion", level: "Beginner", duration: "4 Weeks", rating: 4.8, reviews: 340, price: 2499, image: "/assets/categories/DRESS.jpeg", tag: "Trending" },
  { id: 103, title: "Digital Character Design", instructor: "Arks Digital", level: "Advanced", duration: "12 Weeks", rating: 5.0, reviews: 85, price: 15000, image: "/assets/categories/STIMCHOO.jpeg", tag: "Certification" },
  { id: 104, title: "Wildlife Sketching", instructor: "Arks Academy", level: "Beginner", duration: "5 Weeks", rating: 4.7, reviews: 210, price: 2999, image: "/assets/categories/rabbit.jpeg", tag: null },
  { id: 105, title: "Clay Sculpting", instructor: "Crafts Guild", level: "All Levels", duration: "3 Weeks", rating: 4.9, reviews: 95, price: 1800, image: "/assets/categories/sculpted.jpeg", tag: null },
  { id: 106, title: "Storybook Art", instructor: "Arks Publications", level: "Intermediate", duration: "6 Weeks", rating: 4.6, reviews: 150, price: 3500, image: "/assets/categories/AaAa1.png", tag: "Career" }
];

export default function Courses() {
  const { addToCart, cart } = useShop(); // Hook for cart

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Header Code... (Keep as is) */}
      <div className="bg-brand-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Academy Courses</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">Master the techniques behind the art you love.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition group">
              <div className="relative h-52 bg-slate-50 border-b border-slate-100">
                <Image src={course.image} alt={course.title} fill className="object-contain p-2" />
                {course.tag && <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">{course.tag}</span>}
              </div>
              <div className="p-6">
                {/* Course Info... (Keep as is) */}
                <h3 className="text-xl font-bold text-slate-900 mb-2">{course.title}</h3>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="text-2xl font-bold text-slate-900">₹{course.price.toLocaleString()}</span>
                  
                  {/* UPDATED BUTTON */}
                  <button 
                    onClick={() => addToCart(course.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-bold transition flex items-center gap-2 ${cart.includes(course.id) ? 'bg-green-100 text-green-700' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                  >
                    {cart.includes(course.id) ? <><Check size={16}/> Enrolled</> : "Enroll Now"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}