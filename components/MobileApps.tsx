import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
   Wifi, Battery, Signal,
   Home, Search, User, ShoppingBag,
   ArrowLeft, Star, Plus, MapPin,
   CreditCard, Send, History, Bell, ChevronDown
} from 'lucide-react';
import { useLanguage } from '../i18n';

// ==========================================
// Reusable Phone Frame Component
// ==========================================
const PhoneFrame: React.FC<{ children: React.ReactNode; color?: 'dark' | 'light' }> = ({ children, color = 'light' }) => {
   return (
      <motion.div
         initial="rest"
         whileHover="hover"
         animate="rest"
         variants={{
            rest: { scale: 1, y: 0 },
            hover: {
               scale: 1.025,
               y: -12,
               transition: { type: "spring", stiffness: 300, damping: 20 }
            }
         }}
         className="relative mx-auto border-gray-900 bg-gray-900 border-[10px] md:border-[14px] rounded-[2.5rem] md:rounded-[3.5rem] h-[550px] md:h-[680px] w-[280px] md:w-[330px] shadow-2xl flex flex-col overflow-hidden ring-1 ring-white/10 group/phone cursor-default"
      >
         {/* Side Buttons (Volume/Power) - Decorative */}
         <div className="absolute top-24 -left-[18px] w-[4px] h-12 bg-gray-800 rounded-l-md" />
         <div className="absolute top-40 -left-[18px] w-[4px] h-12 bg-gray-800 rounded-l-md" />
         <div className="absolute top-32 -right-[18px] w-[4px] h-16 bg-gray-800 rounded-r-md" />

         {/* Dynamic Island / Notch */}
         <div className="absolute top-0 inset-x-0 h-8 z-50 flex justify-center pointer-events-none">
            <div className="w-28 h-8 bg-black rounded-b-2xl flex items-center justify-center gap-2 shadow-sm">
               <div className="w-2 h-2 rounded-full bg-gray-800/50" />
               <div className="w-16 h-2 rounded-full bg-gray-800/50" />
            </div>
         </div>

         {/* Status Bar Mockup */}
         <div className={`h-12 w-full flex items-center justify-between px-6 pt-4 z-40 absolute top-0 ${color === 'dark' ? 'text-white' : 'text-black'}`}>
            <div className="text-xs font-bold pl-2 font-mono">9:41</div>
            <div className="flex gap-1.5 items-center pr-2">
               <Signal size={12} strokeWidth={2.5} />
               <Wifi size={12} strokeWidth={2.5} />
               <Battery size={14} strokeWidth={2.5} />
            </div>
         </div>

         {/* Screen Content */}
         <div className={`w-full h-full ${color === 'dark' ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'} overflow-hidden relative rounded-[2.5rem]`}>
            {children}
         </div>

         {/* Reflection/Glare (Glass Effect) - Static */}
         <div className="absolute inset-0 rounded-[3.5rem] pointer-events-none shadow-[inset_0_0_20px_rgba(255,255,255,0.05)] z-50">
            <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-white/5 to-transparent skew-x-12 opacity-30" />
         </div>

         {/* Dynamic Hover Glare Animation */}
         <div className="absolute inset-0 z-50 pointer-events-none rounded-[3.5rem] overflow-hidden">
            <motion.div
               variants={{
                  rest: { x: '-150%', opacity: 0 },
                  hover: {
                     x: '150%',
                     opacity: 1,
                     transition: { duration: 1.2, ease: "easeInOut" }
                  }
               }}
               className="absolute top-0 -left-[20%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]"
            />
         </div>

         {/* Home Indicator */}
         <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-gray-500/50 rounded-full z-50 pointer-events-none" />
      </motion.div>
   );
};

// ==========================================
// App 1: Fintech Wallet (Dark Mode)
// ==========================================
const FintechApp = () => {
   const { t } = useLanguage();
   const [balance, setBalance] = useState(1250400);
   const [activeTab, setActiveTab] = useState('home');
   const [showSendModal, setShowSendModal] = useState(false);
   const [transactions, setTransactions] = useState([
      { id: 1, name: 'Netflix Sub', amount: -14500, date: t.demos.fintech.today },
      { id: 2, name: 'John Kim', amount: +50000, date: t.demos.fintech.yesterday },
      { id: 3, name: 'Starbucks', amount: -4500, date: t.demos.fintech.yesterday },
   ]);

   const handleSend = () => {
      setShowSendModal(true);
      setTimeout(() => {
         setBalance(prev => prev - 10000);
         setTransactions(prev => [{ id: Date.now(), name: t.demos.fintech.sendComplete, amount: -10000, date: t.demos.fintech.justNow }, ...prev]);
         setShowSendModal(false);
      }, 1500);
   };

   return (
      <div className="flex flex-col h-full bg-slate-900 font-crypto">
         {/* Header */}
         <div className="pt-14 px-6 pb-6 flex justify-between items-center">
            <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-400 to-cyan-500 p-0.5">
                  <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center text-xs font-bold">NL</div>
               </div>
               <div>
                  <div className="text-xs text-slate-400">{t.demos.fintech.hello}</div>
                  <div className="font-bold text-sm">{t.demos.fintech.user}</div>
               </div>
            </div>
            <Bell size={20} className="text-slate-400" />
         </div>

         {/* Card */}
         <div className="px-6 relative z-10">
            <div className="w-full aspect-[1.6] rounded-3xl bg-gradient-to-br from-indigo-600 to-purple-700 p-6 flex flex-col justify-between shadow-2xl shadow-indigo-900/50 relative overflow-hidden group cursor-pointer active:scale-95 transition-transform">
               <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-colors" />
               <div className="flex justify-between items-start">
                  <span className="font-mono text-white/70 text-sm">Total Balance</span>
                  <CreditCard className="text-white/70" size={20} />
               </div>
               <div>
                  <div className="text-3xl font-bold mb-1">₩ {balance.toLocaleString()}</div>
                  <div className="flex gap-2 text-xs text-white/60">
                     <span className="bg-white/10 px-2 py-0.5 rounded">+2.4%</span>
                     <span>{t.demos.fintech.vsLastMonth}</span>
                  </div>
               </div>
               <div className="flex justify-between items-center">
                  <span className="font-mono text-sm tracking-wider text-white/80">**** 8842</span>
                  <span className="text-xs font-bold text-white/80">VISA</span>
               </div>
            </div>
         </div>

         {/* Actions */}
         <div className="px-6 py-6 flex gap-4">
            <button onClick={handleSend} className="flex-1 bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-slate-900 py-3 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-colors">
               <Send size={16} /> {t.demos.fintech.send}
            </button>
            <button className="flex-1 bg-slate-800 hover:bg-slate-700 active:bg-slate-600 text-white py-3 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-colors">
               <Plus size={16} /> {t.demos.fintech.charge}
            </button>
         </div>

         {/* Transactions */}
         <div className="flex-1 bg-slate-800 rounded-t-[2rem] p-6 overflow-hidden flex flex-col">
            <div className="flex justify-between items-center mb-4">
               <h3 className="font-bold text-lg">{t.demos.fintech.recentTransactions}</h3>
               <span className="text-xs text-emerald-400 font-bold cursor-pointer">{t.demos.fintech.viewAll}</span>
            </div>
            <div className="flex-1 overflow-y-auto space-y-4 no-scrollbar pb-10">
               <AnimatePresence>
                  {transactions.map((tx) => (
                     <motion.div
                        key={tx.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-between items-center"
                     >
                        <div className="flex items-center gap-3">
                           <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${tx.amount > 0 ? 'bg-emerald-500/10 text-emerald-500' : 'bg-white/5 text-white'}`}>
                              {tx.amount > 0 ? <ArrowLeft size={18} className="rotate-45" /> : <ShoppingBag size={18} />}
                           </div>
                           <div>
                              <div className="font-bold text-sm">{tx.name}</div>
                              <div className="text-xs text-slate-400">{tx.date}</div>
                           </div>
                        </div>
                        <div className={`font-bold text-sm ${tx.amount > 0 ? 'text-emerald-400' : 'text-white'}`}>
                           {tx.amount > 0 ? '+' : ''}{tx.amount.toLocaleString()}
                        </div>
                     </motion.div>
                  ))}
               </AnimatePresence>
            </div>
         </div>

         {/* Bottom Nav */}
         <div className="h-16 bg-slate-900 border-t border-slate-800 flex justify-around items-center px-2">
            {['home', 'stats', 'cards', 'profile'].map((tab) => (
               <button key={tab} onClick={() => setActiveTab(tab)} className="p-2 relative">
                  {tab === 'home' && <Home size={22} className={activeTab === tab ? 'text-emerald-400' : 'text-slate-500'} />}
                  {tab === 'stats' && <History size={22} className={activeTab === tab ? 'text-emerald-400' : 'text-slate-500'} />}
                  {tab === 'cards' && <CreditCard size={22} className={activeTab === tab ? 'text-emerald-400' : 'text-slate-500'} />}
                  {tab === 'profile' && <User size={22} className={activeTab === tab ? 'text-emerald-400' : 'text-slate-500'} />}
                  {activeTab === tab && <motion.div layoutId="tab-indicator" className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-emerald-400 rounded-full" />}
               </button>
            ))}
         </div>

         {/* Send Modal Overlay */}
         <AnimatePresence>
            {showSendModal && (
               <motion.div
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center"
               >
                  <motion.div
                     initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }}
                     className="bg-slate-800 p-6 rounded-3xl w-64 text-center"
                  >
                     <div className="w-12 h-12 rounded-full bg-emerald-500 mx-auto flex items-center justify-center mb-4">
                        <Send className="text-slate-900 ml-1" />
                     </div>
                     <h3 className="font-bold mb-1">{t.demos.fintech.sendingInProgress}</h3>
                     <p className="text-xs text-slate-400">{t.demos.fintech.pleaseWait}</p>
                  </motion.div>
               </motion.div>
            )}
         </AnimatePresence>
      </div>
   );
};

// ==========================================
// App 2: Food Delivery (Light Mode)
// ==========================================
const DeliveryApp = () => {
   const { t } = useLanguage();
   const [cart, setCart] = useState<number[]>([]);
   const [activeCategory, setActiveCategory] = useState(0);
   const categories = t.demos.delivery.categories;

   const foods = [
      { id: 1, name: t.demos.delivery.foods[0].name, price: 8900, img: '🍔', time: t.demos.delivery.foods[0].time, rating: 4.8 },
      { id: 2, name: t.demos.delivery.foods[1].name, price: 16000, img: '🍕', time: t.demos.delivery.foods[1].time, rating: 4.7 },
      { id: 3, name: t.demos.delivery.foods[2].name, price: 11500, img: '🥗', time: t.demos.delivery.foods[2].time, rating: 4.9 },
      { id: 4, name: t.demos.delivery.foods[3].name, price: 3500, img: '🍩', time: t.demos.delivery.foods[3].time, rating: 4.6 },
   ];

   const addToCart = (id: number) => {
      setCart(prev => [...prev, id]);
   };

   return (
      <div className="h-full bg-gray-50 font-dashboard text-slate-900 overflow-y-auto no-scrollbar relative">
         {/* Search Header & Categories */}
         <div className="bg-white sticky top-0 z-20 shadow-sm pt-14 pb-2">
            <div className="px-6 mb-4">
               <div className="flex items-center gap-2 mb-4">
                  <MapPin size={16} className="text-orange-500" />
                  <span className="font-bold text-sm truncate">{t.demos.delivery.address}</span>
                  <ChevronDown size={14} className="text-slate-400" />
               </div>
               <div className="bg-gray-100 rounded-xl flex items-center px-4 py-2.5 gap-2">
                  <Search size={18} className="text-slate-400" />
                  <input type="text" placeholder={t.demos.delivery.searchPlaceholder} className="bg-transparent text-sm w-full outline-none placeholder:text-slate-400" />
               </div>
            </div>

            {/* Categories (Tabs) */}
            <div className="pl-6 overflow-x-auto no-scrollbar flex gap-3 pb-2">
               {categories.map((cat, i) => (
                  <button
                     key={i}
                     onClick={() => setActiveCategory(i)}
                     className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-colors flex-shrink-0 ${activeCategory === i ? 'bg-orange-500 text-white shadow-md shadow-orange-200' : 'bg-white text-slate-500 border border-slate-100'}`}
                  >
                     {cat}
                  </button>
               ))}
            </div>
         </div>

         {/* Banner */}
         <div className="px-6 my-6">
            <div className="w-full aspect-[2.2] bg-slate-900 rounded-2xl overflow-hidden relative flex items-center px-6">
               <div className="relative z-10 text-white">
                  <div className="text-xs font-bold text-orange-400 mb-1">{t.demos.delivery.firstOrderDiscount}</div>
                  <div className="text-xl font-black leading-tight mb-2" style={{ whiteSpace: 'pre-line' }}>{t.demos.delivery.allMenuDiscount}</div>
                  <button className="bg-white text-slate-900 text-[10px] font-bold px-3 py-1.5 rounded-full">{t.demos.delivery.getCoupon}</button>
               </div>
               <div className="absolute right-2 bottom-[-5px] text-[70px]">🍟</div>
            </div>
         </div>

         {/* Food List */}
         <div className="px-6 pb-24 space-y-4">
            <div className="font-bold text-lg">{t.demos.delivery.recommended}</div>
            {foods.map((food) => (
               <div key={food.id} className="bg-white p-3 rounded-2xl border border-slate-100 shadow-sm flex gap-4 hover:shadow-md transition-shadow cursor-pointer active:scale-[0.98]">
                  <div className="w-20 h-20 bg-gray-50 rounded-xl flex items-center justify-center text-4xl shadow-inner">
                     {food.img}
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                     <div className="font-bold text-sm mb-1">{food.name}</div>
                     <div className="flex items-center gap-2 text-[10px] text-slate-500 mb-2">
                        <span className="flex items-center gap-0.5"><Star size={10} className="text-yellow-400 fill-yellow-400" /> {food.rating}</span>
                        <span>•</span>
                        <span>{food.time}</span>
                     </div>
                     <div className="flex justify-between items-center">
                        <div className="font-bold text-sm">₩{food.price.toLocaleString()}</div>
                        <button
                           onClick={(e) => { e.stopPropagation(); addToCart(food.id); }}
                           className="w-7 h-7 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors"
                        >
                           <Plus size={16} />
                        </button>
                     </div>
                  </div>
               </div>
            ))}
         </div>

         {/* Floating Cart Button */}
         <AnimatePresence>
            {cart.length > 0 && (
               <motion.div
                  initial={{ y: 100 }} animate={{ y: 0 }} exit={{ y: 100 }}
                  className="absolute bottom-6 left-6 right-6 z-30"
               >
                  <button className="w-full bg-slate-900 text-white p-4 rounded-2xl shadow-xl shadow-slate-900/20 flex justify-between items-center">
                     <div className="flex items-center gap-3">
                        <div className="bg-orange-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                           {cart.length}
                        </div>
                        <span className="font-bold text-sm">{t.demos.delivery.viewCart}</span>
                     </div>
                     <span className="font-bold text-sm">₩{(cart.reduce((acc, id) => acc + (foods.find(f => f.id === id)?.price || 0), 0)).toLocaleString()}</span>
                  </button>
               </motion.div>
            )}
         </AnimatePresence>
      </div>
   );
};

// ==========================================
// Main Section Component
// ==========================================
const MobileApps: React.FC = () => {
   const { t } = useLanguage();

   return (
      <section id="mobile-apps" className="py-32 bg-surfaceHighlight relative overflow-hidden">
         <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

               {/* Text Content */}
               <div className="lg:col-span-4 lg:sticky lg:top-32">
                  <span className="text-sm font-bold text-textSub/50 uppercase tracking-widest mb-2 block">Mobile Development</span>
                  <h2 className="font-display text-4xl md:text-5xl font-bold text-textMain mb-6 tracking-tight">
                     {t.apps.title} <span className="text-primary">{t.apps.titleHighlight}</span>
                  </h2>
                  <p className="text-textSub font-sans text-lg break-keep leading-relaxed mb-8">
                     {t.apps.subtitle}
                  </p>

                  <ul className="space-y-4">
                     <li className="flex items-start gap-3">
                        <div className="mt-1 w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                           <span className="font-bold text-xs">1</span>
                        </div>
                        <div>
                           <strong className="block text-textMain">Cross-Platform</strong>
                           <span className="text-sm text-textSub">Native performance from a single codebase</span>
                        </div>
                     </li>
                     <li className="flex items-start gap-3">
                        <div className="mt-1 w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                           <span className="font-bold text-xs">2</span>
                        </div>
                        <div>
                           <strong className="block text-textMain">Native Modules</strong>
                           <span className="text-sm text-textSub">Precise control of device features (camera, GPS, etc.)</span>
                        </div>
                     </li>
                  </ul>
               </div>

               {/* Staggered Phones */}
               <div className="lg:col-span-8 relative">
                  <div className="flex flex-col md:flex-row gap-10 md:gap-6 justify-center items-center">
                     {/* Project 1: Fintech */}
                     <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center mt-0 md:mt-20"
                     >
                        <PhoneFrame color="dark">
                           <FintechApp />
                        </PhoneFrame>
                        <div className="mt-6 text-center">
                           <h3 className="text-xl font-bold">CoinVerse App</h3>
                           <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">React Native</span>
                        </div>
                     </motion.div>

                     {/* Project 2: Food Delivery */}
                     <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, delay: 0.2 }}
                        className="flex flex-col items-center"
                     >
                        <PhoneFrame color="light">
                           <DeliveryApp />
                        </PhoneFrame>
                        <div className="mt-6 text-center">
                           <h3 className="text-xl font-bold">Yummy Express</h3>
                           <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Flutter</span>
                        </div>
                     </motion.div>
                  </div>
               </div>

            </div>
         </div>
      </section>
   );
};

export default MobileApps;