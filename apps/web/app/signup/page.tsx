"use client";
import Link from "next/link";
import { useState } from "react";
import { User, Paintbrush, ArrowRight } from "lucide-react";

export default function Signup() {
  const [role, setRole] = useState<"buyer" | "artist">("buyer");

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <h2 className="text-3xl font-extrabold text-slate-900">Join Arks Academy</h2>
        <p className="mt-2 text-sm text-slate-600">
          Create an account to {role === 'buyer' ? 'buy art and learn.' : 'sell your art and teach.'}
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          
          {/* Role Selector */}
          <div className="flex gap-4 mb-6">
            <button 
              onClick={() => setRole("buyer")}
              className={`flex-1 py-3 rounded-lg border-2 flex flex-col items-center gap-2 transition ${role === 'buyer' ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-slate-200 text-slate-500 hover:border-slate-300'}`}
            >
              <User size={24} />
              <span className="font-bold text-sm">I'm a Buyer</span>
            </button>
            <button 
              onClick={() => setRole("artist")}
              className={`flex-1 py-3 rounded-lg border-2 flex flex-col items-center gap-2 transition ${role === 'artist' ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-slate-200 text-slate-500 hover:border-slate-300'}`}
            >
              <Paintbrush size={24} />
              <span className="font-bold text-sm">I'm an Artist</span>
            </button>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email address</label>
              <input id="email" name="email" type="email" required className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700">Password</label>
              <input id="password" name="password" type="password" required className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>

            {role === 'artist' && (
               <div>
               <label htmlFor="portfolio" className="block text-sm font-medium text-slate-700">Portfolio Link (Instagram/Behance)</label>
               <input id="portfolio" name="portfolio" type="url" className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
             </div>
            )}

            <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-900 hover:bg-brand-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500">
              Create Account <ArrowRight size={16} className="ml-2" />
            </button>
          </form>

          <div className="mt-6 text-center text-sm">
            <span className="text-slate-500">Already have an account?</span>
            <Link href="/login" className="font-medium text-blue-600 hover:text-blue-500 ml-1">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}