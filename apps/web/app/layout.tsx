import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import ChatWidget from "../components/ChatWidget"; // <--- NEW IMPORT
import { ShopProvider } from "../context/ShopContext";
import { Mail, Instagram, Facebook, Phone, MapPin } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

// PROFESSIONAL SEO
export const metadata: Metadata = {
  title: {
    template: '%s | Arks Academy',
    default: 'Arks Academy - Art, Healing & Learning',
  },
  description: 'Buy unique works, learn from masters, and experience art therapy.',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://arks.art',
    siteName: 'Arks Academy',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ShopProvider>
          <Navbar />
          
          {children}
          
          {/* --- AI SUPPORT AGENT --- */}
          <ChatWidget /> 
          
          {/* --- GLOBAL FOOTER --- */}
          <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
              
              {/* Brand */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Arks Academy</h3>
                <p className="text-sm leading-relaxed text-slate-400 max-w-sm mx-auto md:mx-0">
                  A sanctuary for artists and learners. We combine commerce, education, and healing through the power of art.
                </p>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col items-center md:items-start">
                <h4 className="text-white font-semibold mb-4">Contact Us</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2 justify-center md:justify-start">
                    <Mail size={16} className="text-blue-500" /> 
                    <a href="mailto:arksacademy@gmail.com" className="hover:text-white transition">arksacademy@gmail.com</a>
                  </li>
                  <li className="flex items-center gap-2 justify-center md:justify-start">
                    <Instagram size={16} className="text-pink-500" /> 
                    <a href="https://instagram.com/arks.art" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">@arks.art</a>
                  </li>
                  <li className="flex items-center gap-2 justify-center md:justify-start">
                    <Phone size={16} className="text-green-500" /> 
                    <span>+91 98765 43210</span>
                  </li>
                  <li className="flex items-center gap-2 justify-center md:justify-start">
                    <MapPin size={16} className="text-red-500" /> 
                    <span>Hyderabad, India</span>
                  </li>
                </ul>
              </div>

              {/* Socials */}
              <div className="flex flex-col items-center md:items-start">
                <h4 className="text-white font-semibold mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <a href="https://instagram.com/arks.art" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-full hover:bg-gradient-to-tr from-yellow-500 to-purple-600 transition text-white">
                    <Instagram size={20} />
                  </a>
                  <button className="p-3 bg-slate-800 rounded-full hover:bg-blue-600 transition text-white">
                    <Facebook size={20} />
                  </button>
                </div>
              </div>
            </div>
            <div className="text-center text-xs text-slate-600 mt-16 border-t border-slate-800 pt-8">
              © 2025 Arks Academy. All rights reserved.
            </div>
          </footer>
        </ShopProvider>
      </body>
    </html>
  );
}