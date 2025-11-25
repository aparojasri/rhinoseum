"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useShop } from "../../context/ShopContext";
import { products } from "../../lib/data";
import { Trash2, ArrowRight, ShoppingBag, CreditCard, Truck, CheckCircle, MapPin, AlertCircle } from "lucide-react";

export default function Cart() {
  const { cart, removeFromCart } = useShop();
  const [step, setStep] = useState<"cart" | "checkout" | "success">("cart");
  const [paymentMethod, setPaymentMethod] = useState<"cod" | "online">("cod");
  const [loading, setLoading] = useState(false);

  const cartItems = products.filter((p) => cart.includes(p.id));
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const shipping = 150;
  const total = subtotal + shipping;

  const handleOrder = () => {
    // VALIDATION LOGIC
    const nameInput = (document.getElementById('shipping-name') as HTMLInputElement)?.value;
    const phoneInput = (document.getElementById('shipping-phone') as HTMLInputElement)?.value;
    const addrInput = (document.getElementById('shipping-addr') as HTMLInputElement)?.value;

    if (!nameInput || !phoneInput || !addrInput || phoneInput.length < 10) {
      alert("Please enter valid Shipping Details.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep("success");
    }, 2000);
  };

  if (step === "success") {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
        <div className="bg-white p-10 rounded-2xl shadow-lg text-center max-w-md w-full">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
            <CheckCircle size={40} />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Order Placed!</h2>
          <p className="text-slate-600 mb-8">
            Thank you for supporting art. Order #{Math.floor(Math.random() * 10000)} received.
          </p>
          <Link href="/marketplace">
            <button className="w-full bg-slate-900 text-white py-3 rounded-lg font-bold hover:bg-slate-800 transition">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* PROGRESS HEADER */}
        <div className="flex items-center gap-4 mb-10 text-sm font-medium text-slate-500">
          <span className={step === "cart" ? "text-blue-600 font-bold" : ""}>1. Cart</span>
          <span className="h-px w-10 bg-slate-300"></span>
          <span className={step === "checkout" ? "text-blue-600 font-bold" : ""}>2. Checkout</span>
          <span className="h-px w-10 bg-slate-300"></span>
          <span>3. Done</span>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-xl border border-slate-200">
            <ShoppingBag size={48} className="mx-auto text-slate-300 mb-4" />
            <p className="text-slate-500 text-lg mb-6">Your cart is empty.</p>
            <Link href="/marketplace" className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition">
              Browse Art
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-10">
            
            {/* LEFT COLUMN */}
            <div className="flex-1 space-y-6">
              
              {step === "cart" ? (
                <>
                  <h1 className="text-3xl font-bold text-slate-900">Shopping Cart ({cartItems.length})</h1>
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="bg-white p-4 rounded-xl border border-slate-200 flex gap-4 items-center shadow-sm">
                        <div className="relative w-24 h-24 flex-shrink-0 bg-slate-100 rounded-md overflow-hidden">
                          <Image src={item.image} alt={item.title} fill className="object-contain p-2" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-slate-900 text-lg">{item.title}</h3>
                          <p className="text-sm text-slate-500">{item.category} • By {item.artist}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-slate-900 text-lg mb-2">₹{item.price.toLocaleString()}</p>
                          <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700 transition p-2 hover:bg-red-50 rounded-full">
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <h1 className="text-3xl font-bold text-slate-900 mb-6">Checkout Details</h1>
                  
                  {/* SHIPPING FORM */}
                  <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mb-6">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><MapPin size={20} className="text-blue-600"/> Shipping Address</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input id="shipping-name" type="text" placeholder="Full Name" className="p-3 border border-slate-200 rounded-lg w-full focus:ring-2 focus:ring-blue-500 outline-none" />
                      <input id="shipping-phone" type="text" placeholder="Phone Number" className="p-3 border border-slate-200 rounded-lg w-full focus:ring-2 focus:ring-blue-500 outline-none" />
                      <input id="shipping-addr" type="text" placeholder="Address Line 1" className="p-3 border border-slate-200 rounded-lg w-full md:col-span-2 focus:ring-2 focus:ring-blue-500 outline-none" />
                      <input type="text" placeholder="City" className="p-3 border border-slate-200 rounded-lg w-full focus:ring-2 focus:ring-blue-500 outline-none" />
                      <input type="text" placeholder="Pincode" className="p-3 border border-slate-200 rounded-lg w-full focus:ring-2 focus:ring-blue-500 outline-none" />
                    </div>
                  </div>

                  {/* PAYMENT METHOD */}
                  <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><CreditCard size={20} className="text-blue-600"/> Payment Method</h3>
                    <div className="space-y-3">
                      <label className={`flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition ${paymentMethod === 'cod' ? 'border-blue-600 bg-blue-50' : 'border-slate-200 hover:border-blue-300'}`}>
                        <input type="radio" name="payment" checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} className="w-5 h-5 text-blue-600" />
                        <div className="flex-1">
                          <span className="font-bold block text-slate-900">Cash on Delivery (COD)</span>
                          <span className="text-xs text-slate-500">Pay cash when art is delivered to your doorstep.</span>
                        </div>
                        <Truck size={24} className="text-slate-400" />
                      </label>

                      <label className={`flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition ${paymentMethod === 'online' ? 'border-blue-600 bg-blue-50' : 'border-slate-200 hover:border-blue-300'}`}>
                        <input type="radio" name="payment" checked={paymentMethod === 'online'} onChange={() => setPaymentMethod('online')} className="w-5 h-5 text-blue-600" />
                        <div className="flex-1">
                          <span className="font-bold block text-slate-900">Online Payment</span>
                          <span className="text-xs text-slate-500">Credit Card / UPI / Net Banking (Secure)</span>
                        </div>
                        <CreditCard size={24} className="text-slate-400" />
                      </label>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* SUMMARY */}
            <div className="w-full lg:w-96 h-fit bg-white p-6 rounded-xl border border-slate-200 shadow-lg sticky top-24">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Order Summary</h3>
              <div className="space-y-3 mb-6 border-b border-slate-100 pb-6">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Shipping</span>
                  <span>₹{shipping}</span>
                </div>
              </div>
              <div className="flex justify-between mb-8">
                <span className="font-bold text-2xl text-slate-900">Total</span>
                <span className="font-bold text-2xl text-blue-600">₹{total.toLocaleString()}</span>
              </div>

              {step === "cart" ? (
                <button 
                  onClick={() => setStep("checkout")}
                  className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Proceed to Checkout <ArrowRight size={20} />
                </button>
              ) : (
                <button 
                  onClick={handleOrder}
                  disabled={loading}
                  className="w-full bg-green-600 text-white py-4 rounded-xl font-bold hover:bg-green-700 transition flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50"
                >
                  {loading ? "Processing..." : (paymentMethod === 'cod' ? "Place COD Order" : "Pay Now")}
                </button>
              )}
              
              {step === "checkout" && (
                <button onClick={() => setStep("cart")} className="w-full mt-3 text-slate-500 text-sm font-semibold hover:underline">
                  Back to Cart
                </button>
              )}
            </div>

          </div>
        )}
      </div>
    </div>
  );
}