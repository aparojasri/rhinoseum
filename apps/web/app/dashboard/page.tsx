"use client";
import { Package, DollarSign, BarChart3, Upload, CheckCircle, AlertCircle } from "lucide-react";

export default function SellerDashboard() {
  return (
    <div className="min-h-screen bg-slate-50 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Artist Dashboard</h1>
            <p className="text-slate-500">Welcome back, Arks Sister</p>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg flex items-center gap-2 font-bold hover:bg-blue-700 transition shadow-md">
            <Upload size={18} /> Upload New Art
          </button>
        </div>

        {/* STATS ROW */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 text-green-600 rounded-full"><DollarSign /></div>
              <div>
                <p className="text-slate-500 text-sm">Total Earnings</p>
                <h3 className="text-2xl font-bold text-slate-900">₹45,200</h3>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-full"><Package /></div>
              <div>
                <p className="text-slate-500 text-sm">Orders to Ship</p>
                <h3 className="text-2xl font-bold text-slate-900">3 Pending</h3>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-100 text-purple-600 rounded-full"><BarChart3 /></div>
              <div>
                <p className="text-slate-500 text-sm">Total Views</p>
                <h3 className="text-2xl font-bold text-slate-900">1,240</h3>
              </div>
            </div>
          </div>
        </div>

        {/* PENDING ORDERS */}
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="px-6 py-4 border-b border-slate-100 font-bold text-lg flex items-center gap-2">
            <AlertCircle size={20} className="text-yellow-500" /> Action Required
          </div>
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-slate-500 text-sm uppercase">
              <tr>
                <th className="px-6 py-3">Order ID</th>
                <th className="px-6 py-3">Artwork</th>
                <th className="px-6 py-3">Customer</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              <tr className="hover:bg-slate-50">
                <td className="px-6 py-4 font-mono text-slate-600">#ORD-9921</td>
                <td className="px-6 py-4 font-medium">Grandfather's Wisdom</td>
                <td className="px-6 py-4">Rohan Sharma</td>
                <td className="px-6 py-4"><span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded">Pending</span></td>
                <td className="px-6 py-4"><button className="text-blue-600 font-bold hover:underline">Print Label</button></td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-6 py-4 font-mono text-slate-600">#ORD-9925</td>
                <td className="px-6 py-4 font-medium">Sparrow on Branch</td>
                <td className="px-6 py-4">Priya Patel</td>
                <td className="px-6 py-4"><span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded">Pending</span></td>
                <td className="px-6 py-4"><button className="text-blue-600 font-bold hover:underline">Print Label</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}