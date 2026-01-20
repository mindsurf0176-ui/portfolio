import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import {
   Check, Activity, Layout, ShoppingBag,
   Users, Bell, Search, Settings,
   ChevronDown, DollarSign, Wallet, Star, Plus, Minus, RefreshCw,
   ChevronLeft, ChevronRight, Target, Zap,
   CreditCard
} from 'lucide-react';
import { useLanguage } from '../i18n';

// ==========================================
// 1. Dashboard Demo (Functional)
// ==========================================
const DashboardDemo = () => {
   const { t, language } = useLanguage();
   const [timeRange, setTimeRange] = useState<'daily' | 'weekly'>('weekly');
   const [hoveredValue, setHoveredValue] = useState<number | null>(null);
   const [showNotif, setShowNotif] = useState(false);

   // Simulated Data
   const data = useMemo(() => ({
      daily: {
         revenue: '₩8,420,000',
         users: '452',
         bounce: '38.2%',
         chart: [20, 35, 25, 45, 30, 55, 40, 60, 50, 75, 65, 80, 70, 90, 85, 95, 60, 70, 50, 60, 45, 55, 40, 30]
      },
      weekly: {
         revenue: '₩48,200,000',
         users: '2,405',
         bounce: '42.3%',
         chart: [40, 60, 45, 70, 60, 80, 75, 50, 65, 85, 90, 70, 80, 95]
      }
   }), []);

   const currentData = data[timeRange];

   return (
      <div className="w-full h-full bg-[#f8fafc] flex overflow-hidden font-dashboard select-none relative group/dashboard">

         {/* Sidebar */}
         <div className="hidden md:flex w-20 border-r border-slate-200 bg-white flex-col items-center py-6 gap-6 z-10 shadow-[4px_0_24px_rgba(0,0,0,0.02)] transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-200 cursor-pointer hover:scale-105 transition-transform">
               <Layout size={20} />
            </div>
            <div className="w-8 h-px bg-slate-100" />
            {[1, 2, 3, 4].map(i => (
               <div key={i} className={`w-10 h-10 rounded-lg ${i === 1 ? 'bg-indigo-50 text-indigo-600' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'} flex items-center justify-center transition-all cursor-pointer hover:scale-110 active:scale-95`}>
                  <div className={`w-5 h-5 rounded ${i === 1 ? 'bg-indigo-600' : 'bg-current'} opacity-${i === 1 ? '100' : '40'}`} style={{ borderRadius: 4 }} />
               </div>
            ))}
            <div className="mt-auto w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-400 transition-colors cursor-pointer">
               <Settings size={18} />
            </div>
         </div>

         {/* Main Content */}
         <div className="flex-1 flex flex-col h-full overflow-hidden bg-slate-50/50">
            {/* Topbar */}
            <div className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shadow-sm z-10">
               <div className="flex items-center gap-4">
                  <h3 className="font-bold text-slate-800 text-lg tracking-tight">{t.demos.dashboard.title}</h3>
                  <div className="h-4 w-px bg-slate-200" />
                  <div className="text-sm text-slate-500 flex items-center gap-1 cursor-pointer hover:text-slate-800 bg-slate-100 px-2 py-1 rounded-md transition-colors">
                     {timeRange === 'weekly' ? t.demos.dashboard.last30Days : t.demos.dashboard.today} <ChevronDown size={14} />
                  </div>
               </div>
               <div className="flex items-center gap-4">
                  <div className="relative">
                     <Bell
                        size={20}
                        className={`transition-colors cursor-pointer ${showNotif ? 'text-indigo-600 fill-indigo-100' : 'text-slate-400 hover:text-slate-600'}`}
                        onClick={() => setShowNotif(!showNotif)}
                     />
                     <AnimatePresence>
                        {!showNotif && (
                           <motion.div
                              initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
                              className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"
                           />
                        )}
                     </AnimatePresence>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 ring-2 ring-white shadow-md cursor-pointer hover:ring-indigo-200 transition-all" />
               </div>
            </div>

            {/* Content Scroll */}
            <div className="flex-1 p-6 overflow-hidden flex flex-col gap-6">

               {/* Stats Row */}
               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  {[
                     { label: t.demos.dashboard.revenue, value: currentData.revenue, change: timeRange === 'weekly' ? '+12.4%' : '+2.1%', icon: DollarSign, color: 'text-emerald-600', bg: 'bg-emerald-50' },
                     { label: t.demos.dashboard.users, value: currentData.users, change: timeRange === 'weekly' ? '+5.2%' : '+0.8%', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
                     { label: t.demos.dashboard.bounce, value: currentData.bounce, change: '-2.1%', icon: Activity, color: 'text-indigo-600', bg: 'bg-indigo-50' },
                  ].map((stat, i) => (
                     <motion.div
                        key={i}
                        layout
                        className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-3 hover:shadow-md transition-shadow cursor-default"
                     >
                        <div className="flex justify-between items-start">
                           <div className={`w-10 h-10 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center shadow-inner`}><stat.icon size={18} /></div>
                           <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${stat.color} bg-white border border-slate-100 shadow-sm`}>{stat.change}</span>
                        </div>
                        <div>
                           <motion.div
                              key={stat.value}
                              initial={{ opacity: 0, y: 5 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-xl lg:text-2xl font-bold text-slate-800 tracking-tight"
                           >
                              {stat.value}
                           </motion.div>
                           <div className="text-xs text-slate-500 font-medium mt-1">{stat.label}</div>
                        </div>
                     </motion.div>
                  ))}
               </div>

               {/* Main Chart Section */}
               <div className="flex-1 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col relative overflow-hidden">
                  <div className="flex justify-between items-center mb-6 relative z-10">
                     <div>
                        <h4 className="font-bold text-slate-800 text-lg">{t.demos.dashboard.chartTitle}</h4>
                        <p className="text-xs text-slate-400 mt-1 font-medium">
                           {hoveredValue ? `${t.demos.dashboard.chartSelected}: ₩${(hoveredValue * 12000).toLocaleString()}` : t.demos.dashboard.chartHover}
                        </p>
                     </div>
                     <div className="flex p-1 bg-slate-100 rounded-xl gap-1">
                        {['daily', 'weekly'].map((range) => (
                           <button
                              key={range}
                              onClick={() => setTimeRange(range as 'daily' | 'weekly')}
                              className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all ${timeRange === range ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                           >
                              {range === 'daily' ? t.demos.dashboard.daily : t.demos.dashboard.weekly}
                           </button>
                        ))}
                     </div>
                  </div>

                  <div className="flex-1 flex items-end gap-2 lg:gap-4 px-2 relative z-10 min-h-[160px]">
                     {currentData.chart.map((h, i) => (
                        <motion.div
                           key={`${timeRange}-${i}`}
                           initial={{ height: '0%' }}
                           animate={{ height: `${h}%` }}
                           transition={{ delay: i * 0.02, duration: 0.6, type: "spring", stiffness: 100 }}
                           className="flex-1 bg-indigo-50 rounded-t-lg relative group cursor-pointer"
                           onMouseEnter={() => setHoveredValue(h)}
                           onMouseLeave={() => setHoveredValue(null)}
                        >
                           <motion.div
                              className="absolute bottom-0 w-full bg-indigo-500 rounded-t-lg opacity-80 group-hover:opacity-100 transition-opacity"
                              initial={{ height: 0 }}
                              animate={{ height: '100%' }}
                              transition={{ duration: 0.8, delay: 0.2 }}
                           />
                           {/* Tooltip */}
                           <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] font-bold px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 pointer-events-none shadow-xl whitespace-nowrap z-20">
                              {h}% {t.demos.dashboard.achievement}
                           </div>
                        </motion.div>
                     ))}
                  </div>

                  {/* Grid Lines */}
                  <div className="absolute inset-x-6 bottom-6 top-20 flex flex-col justify-between pointer-events-none opacity-30">
                     <div className="border-t border-dashed border-slate-300 w-full" />
                     <div className="border-t border-dashed border-slate-300 w-full" />
                     <div className="border-t border-dashed border-slate-300 w-full" />
                  </div>

                  {/* X-Axis */}
                  <div className="flex justify-between mt-4 text-[10px] text-slate-400 font-bold uppercase px-2">
                     {timeRange === 'weekly'
                        ? (language === 'ko'
                           ? ['월', '화', '수', '목', '금', '토', '일', '월', '화', '수', '목', '금', '토', '일']
                           : ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S']
                        ).map((d, i) => <span key={i}>{d}</span>)
                        : Array.from({ length: 12 }, (_, i) => <span key={i}>{i * 2}{language === 'ko' ? '시' : 'h'}</span>)
                     }
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

// ==========================================
// 2. Fintech Demo (Live Trading Logic)
// ==========================================

const FintechDemo = () => {
   const { t } = useLanguage();

   const COINS = {
      BTC: { name: t.demos.fintech.coins.BTC, basePrice: 42350000, volatility: 20000 },
      ETH: { name: t.demos.fintech.coins.ETH, basePrice: 2230000, volatility: 2000 },
      SOL: { name: t.demos.fintech.coins.SOL, basePrice: 98400, volatility: 500 },
      XRP: { name: t.demos.fintech.coins.XRP, basePrice: 720, volatility: 5 },
   };

   const [activeCoin, setActiveCoin] = useState<keyof typeof COINS>('BTC');
   const [balance, setBalance] = useState(50000000); // 5000만원
   const [holdings, setHoldings] = useState<{ [key: string]: number }>({ BTC: 0.5, ETH: 10, SOL: 0, XRP: 0 });
   const [price, setPrice] = useState(42350000);
   const [prevPrice, setPrevPrice] = useState(42350000);
   const [candles, setCandles] = useState<{ h: number, y: number, isGreen: boolean }[]>([]);

   // Initialize Price when coin changes
   useEffect(() => {
      const base = COINS[activeCoin].basePrice;
      setPrice(base);
      setPrevPrice(base);
      // Generate random candles
      const newCandles = Array.from({ length: 14 }, () => ({
         h: Math.random() * 40 + 10,
         y: Math.random() * 40 + 20,
         isGreen: Math.random() > 0.45
      }));
      setCandles(newCandles);
   }, [activeCoin]);

   // Live Ticker Simulation
   useEffect(() => {
      const interval = setInterval(() => {
         setPrevPrice(price);
         setPrice(prev => {
            const volatility = COINS[activeCoin].volatility;
            const change = (Math.random() - 0.5) * volatility;
            return Math.floor(prev + change);
         });

         // Update last candle occasionally to simulate live formation
         if (Math.random() > 0.7) {
            setCandles(prev => {
               const last = prev[prev.length - 1];
               const newLast = { ...last, isGreen: Math.random() > 0.4 };
               return [...prev.slice(0, -1), newLast];
            });
         }
      }, 1000);
      return () => clearInterval(interval);
   }, [activeCoin, price]);

   const handleTrade = (type: 'buy' | 'sell') => {
      if (type === 'buy') {
         if (balance < price * 0.1) return alert(t.demos.fintech.insufficientBalance);
         setBalance(prev => prev - price * 0.1);
         setHoldings(prev => ({ ...prev, [activeCoin]: (prev[activeCoin] || 0) + 0.1 }));
      } else {
         if ((holdings[activeCoin] || 0) < 0.1) return alert(t.demos.fintech.insufficientHoldings);
         setBalance(prev => prev + price * 0.1);
         setHoldings(prev => ({ ...prev, [activeCoin]: (prev[activeCoin] || 0) - 0.1 }));
      }
   };

   const isUp = price >= prevPrice;
   const colorClass = isUp ? 'text-emerald-600' : 'text-red-500';
   const bgClass = isUp ? 'bg-emerald-500' : 'bg-red-500';

   return (
      <div className="w-full h-full bg-white flex font-crypto select-none overflow-hidden relative text-xs">
         {/* Sidebar */}
         <div className="hidden md:flex w-56 border-r border-slate-200 flex-col bg-slate-50/50">
            <div className="p-4 border-b border-slate-200 font-bold text-slate-800 flex items-center gap-2 bg-white">
               <Wallet size={16} className="text-indigo-600" />
               <div>
                  <div className="text-[10px] text-slate-400 font-normal">{t.demos.fintech.holdings}</div>
                  <div>₩{balance.toLocaleString()}</div>
               </div>
            </div>
            <div className="flex-1 overflow-y-auto custom-scrollbar">
               {Object.entries(COINS).map(([code, info]) => (
                  <div
                     key={code}
                     onClick={() => setActiveCoin(code as keyof typeof COINS)}
                     className={`p-3 border-b border-slate-100 flex justify-between items-center hover:bg-white cursor-pointer transition-all ${activeCoin === code ? 'bg-white border-l-4 border-l-indigo-600 pl-2 shadow-sm' : 'border-l-4 border-l-transparent'}`}
                  >
                     <div>
                        <div className="font-bold text-slate-700">{info.name}</div>
                        <div className="text-[10px] text-slate-400 flex items-center gap-1">
                           {code}/KRW
                           {holdings[code] > 0 && <span className="bg-indigo-100 text-indigo-700 px-1 rounded-[2px]">{holdings[code].toFixed(2)}</span>}
                        </div>
                     </div>
                     <div className="text-right">
                        <div className={`font-medium transition-colors duration-500 ${activeCoin === code ? colorClass : 'text-slate-800'}`}>
                           {activeCoin === code ? price.toLocaleString() : info.basePrice.toLocaleString()}
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>

         {/* Main Chart Area */}
         <div className="flex-1 flex flex-col bg-white">
            {/* Chart Header */}
            <div className="h-14 border-b border-slate-200 flex items-center justify-between px-6 bg-white shadow-sm z-20">
               <div className="flex items-center gap-3">
                  <h3 className="font-bold text-slate-800 text-lg md:text-xl">{activeCoin}/KRW</h3>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold animate-pulse ${isUp ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>
                     LIVE
                  </span>
                  <div className={`font-mono text-lg font-bold transition-colors duration-300 ${colorClass}`}>
                     {price.toLocaleString()}
                  </div>
               </div>
               <div className="flex items-center gap-4">
                  <div className="flex gap-2">
                     <button
                        onClick={() => handleTrade('buy')}
                        className="bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white font-bold px-5 py-2 rounded-lg transition-all shadow-sm shadow-emerald-200 text-xs"
                     >
                        {t.demos.fintech.buy} (0.1)
                     </button>
                     <button
                        onClick={() => handleTrade('sell')}
                        className="bg-red-500 hover:bg-red-600 active:scale-95 text-white font-bold px-5 py-2 rounded-lg transition-all shadow-sm shadow-red-200 text-xs"
                     >
                        {t.demos.fintech.sell} (0.1)
                     </button>
                  </div>
               </div>
            </div>

            {/* Candles */}
            <div className="flex-1 relative p-6 flex items-center justify-around gap-2 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed">
               {/* Grid Lines */}
               <div className="absolute inset-0 z-0 pointer-events-none opacity-50" style={{ backgroundImage: 'linear-gradient(#f1f5f9 1px, transparent 1px), linear-gradient(90deg, #f1f5f9 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

               {candles.map((candle, i) => (
                  <motion.div
                     key={i}
                     layout
                     initial={{ scaleY: 0, opacity: 0 }}
                     animate={{ scaleY: 1, opacity: 1 }}
                     transition={{ delay: i * 0.05 }}
                     className="w-full max-w-[30px] h-full relative group cursor-crosshair z-10 flex flex-col justify-center"
                  >
                     {/* Wick */}
                     <div className={`absolute left-1/2 -translate-x-1/2 w-[1px] ${candle.isGreen ? 'bg-emerald-500' : 'bg-red-500'}`} style={{ top: `${candle.y - 10}%`, height: `${candle.h + 20}%` }} />
                     {/* Body */}
                     <div
                        className={`absolute left-1 right-1 border shadow-sm ${candle.isGreen ? 'bg-emerald-50 border-emerald-500' : 'bg-red-50 border-red-500'}`}
                        style={{ top: `${candle.y}%`, height: `${candle.h}%` }}
                     />

                     {/* Hover Guide */}
                     <div className="absolute top-0 bottom-0 left-1/2 w-px bg-slate-400 border-l border-dashed border-slate-400 opacity-0 group-hover:opacity-100 h-full -translate-x-1/2 pointer-events-none" />
                  </motion.div>
               ))
               }

               {/* Current Price Line */}
               <motion.div
                  className={`absolute left-0 right-0 border-t border-dashed z-20 flex items-center justify-end ${isUp ? 'border-emerald-500' : 'border-red-500'}`}
                  animate={{ top: isUp ? '42%' : '48%' }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
               >
                  <div className={`text-white px-2 py-1 text-[10px] font-bold rounded-l shadow-md ${bgClass}`}>
                     {price.toLocaleString()}
                  </div>
               </motion.div>
            </div>
         </div>
      </div>
   );
};

// ==========================================
// 3. Product Card Demo (Interactive E-commerce)
// ==========================================
const ProductCardDemo = () => {
   const { t } = useLanguage();
   const [activeImage, setActiveImage] = useState(0);
   const [cartCount, setCartCount] = useState(0);
   const [isLiked, setIsLiked] = useState(false);
   const [quantity, setQuantity] = useState(1);
   const [showCartNotif, setShowCartNotif] = useState(false);

   const handleAddToCart = () => {
      setCartCount(p => p + quantity);
      setShowCartNotif(true);
      setTimeout(() => setShowCartNotif(false), 2000);
   };

   // CSS Filter based on active image index to simulate color change without assets
   const imageFilters = [
      'hue-rotate(0deg)', // Black
      'hue-rotate(45deg) brightness(1.2)', // Stone/Goldish
      'hue-rotate(220deg) brightness(1.1)', // Indigo/Blue
   ];

   return (
      <div className="w-full h-full flex flex-col bg-[#f8fafc] relative font-luxury overflow-hidden">
         {/* Fake Header */}
         <div className="h-14 bg-white border-b border-slate-100 flex items-center justify-between px-6 shadow-sm z-10">
            <div className="font-display font-bold text-xl tracking-tighter">LUMINA.</div>
            <div className="flex gap-4 items-center">
               <Search size={20} className="text-slate-400 hover:text-slate-800 cursor-pointer" />
               <div className="relative cursor-pointer group">
                  <ShoppingBag size={20} className="text-slate-800" />
                  {cartCount > 0 && (
                     <motion.div
                        key={cartCount}
                        initial={{ scale: 0 }} animate={{ scale: 1 }}
                        className="absolute -top-1.5 -right-1.5 bg-slate-900 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center"
                     >
                        {cartCount}
                     </motion.div>
                  )}
                  {/* Cart Dropdown Preview */}
                  <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-100 p-3 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all transform origin-top-right scale-95 group-hover:scale-100">
                     <div className="text-xs font-bold text-slate-800 mb-2 font-sans">{t.demos.product.cart} ({cartCount})</div>
                     <div className="text-xs text-slate-500 font-sans">{t.demos.product.total}: ₩{(cartCount * 249000).toLocaleString()}</div>
                     <button className="w-full mt-2 bg-slate-900 text-white text-[10px] py-1.5 rounded font-bold font-sans">{t.demos.product.checkout}</button>
                  </div>
               </div>
            </div>
         </div>

         <div className="flex-1 flex items-center justify-center p-6">
            <div className="w-full max-w-[800px] h-auto md:h-[400px] bg-white rounded-3xl shadow-xl shadow-slate-200/60 overflow-hidden border border-slate-100 flex flex-col md:flex-row">

               {/* Left: Image Area */}
               <div className="w-full md:w-1/2 h-[200px] md:h-auto bg-slate-50 relative flex items-center justify-center overflow-hidden group">
                  <motion.div
                     key={activeImage}
                     initial={{ opacity: 0, x: 50 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ type: "spring", stiffness: 200, damping: 20 }}
                     className="relative z-10"
                     style={{ filter: imageFilters[activeImage] }}
                  >
                     <ShoppingBag size={120} className="text-slate-800 drop-shadow-2xl md:w-[180px] md:h-[180px]" strokeWidth={0.8} />
                  </motion.div>

                  {/* Background decoration */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/50 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur text-slate-900 text-[10px] font-bold px-3 py-1.5 rounded-full border border-slate-200 shadow-sm z-20 font-sans">
                     BEST SELLER
                  </div>

                  <button
                     onClick={() => setIsLiked(!isLiked)}
                     className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-slate-400 hover:text-red-500 transition-colors z-20 hover:scale-110 active:scale-90"
                  >
                     <Star size={18} fill={isLiked ? "#ef4444" : "transparent"} className={isLiked ? "text-red-500" : ""} />
                  </button>
               </div>

               {/* Right: Content Info */}
               <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center gap-6">
                  <div>
                     <div className="flex justify-between items-start mb-2">
                        <h3 className="font-display font-bold text-3xl text-slate-900 leading-none">Urban Lite<br />Backpack</h3>
                     </div>
                     <div className="flex items-center gap-2 mb-4">
                        <span className="font-bold text-2xl text-slate-900 font-sans">₩249,000</span>
                        <span className="text-sm text-slate-400 line-through font-sans">₩299,000</span>
                        <span className="text-xs font-bold text-red-500 bg-red-50 px-1.5 py-0.5 rounded font-sans">-17%</span>
                     </div>
                     <p className="text-sm text-slate-500 font-medium leading-relaxed font-sans">
                        {t.demos.product.description}
                     </p>
                  </div>

                  {/* Color Selection */}
                  <div>
                     <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block font-sans">Color</span>
                     <div className="flex gap-3">
                        {['bg-slate-900', 'bg-stone-400', 'bg-indigo-500'].map((bg, i) => (
                           <button
                              key={i}
                              onClick={() => setActiveImage(i)}
                              className={`w-10 h-10 rounded-full ${bg} ring-2 ring-offset-2 ${activeImage === i ? 'ring-slate-400 scale-110' : 'ring-transparent hover:scale-110'} transition-all shadow-sm`}
                           />
                        ))}
                     </div>
                  </div>

                  {/* Quantity & Add */}
                  <div className="flex gap-4 mt-2">
                     <div className="flex items-center border border-slate-200 rounded-xl px-3 gap-3">
                        <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-slate-400 hover:text-slate-800"><Minus size={16} /></button>
                        <span className="font-bold text-slate-800 w-4 text-center font-sans">{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)} className="text-slate-400 hover:text-slate-800"><Plus size={16} /></button>
                     </div>
                     <button
                        onClick={handleAddToCart}
                        className="flex-1 bg-slate-900 text-white py-3.5 rounded-xl font-bold text-sm hover:bg-slate-800 transition-all active:scale-95 shadow-lg shadow-slate-200 flex items-center justify-center gap-2 relative overflow-hidden font-sans"
                     >
                        {showCartNotif ? (
                           <motion.div initial={{ y: 20 }} animate={{ y: 0 }} className="flex items-center gap-2">
                              <Check size={18} /> {t.demos.product.added}
                           </motion.div>
                        ) : (
                           <>{t.demos.product.addToCart}</>
                        )}
                     </button>
                  </div>
               </div>
            </div>
         </div>

         {/* Toast Notification */}
         <AnimatePresence>
            {showCartNotif && (
               <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-6 py-3 rounded-full shadow-2xl z-50 flex items-center gap-3"
               >
                  <div className="bg-emerald-500 rounded-full p-1"><Check size={12} strokeWidth={3} /></div>
                  <span className="text-sm font-bold font-sans">{t.demos.product.addedNotification}</span>
               </motion.div>
            )}
         </AnimatePresence>
      </div>
   )
}

// Browser Frame Component (Wider for PC)
const BrowserWindow: React.FC<{ children: React.ReactNode }> = ({ children }) => {
   return (
      <div className="relative rounded-xl overflow-hidden bg-white border border-slate-200 shadow-2xl shadow-slate-200/50 transition-all duration-500 h-[600px] md:h-[500px] lg:h-[600px] w-full transform group-hover:scale-[1.01]">
         {/* Browser Header - Light Mode */}
         <div className="bg-slate-50 px-2 md:px-4 py-3 flex items-center gap-2 md:gap-3 border-b border-slate-200">
            <div className="flex gap-1.5 flex-shrink-0">
               <div className="w-3 h-3 rounded-full bg-[#ff5f57] border border-[#e0443e]" />
               <div className="w-3 h-3 rounded-full bg-[#febc2e] border border-[#d89e24]" />
               <div className="w-3 h-3 rounded-full bg-[#28c840] border border-[#1aab29]" />
            </div>
            <div className="flex-1 flex justify-center min-w-0">
               <div className="bg-white rounded-md h-7 w-full max-w-[200px] md:max-w-xs lg:max-w-md border border-slate-200 flex items-center px-2 md:px-3 gap-2 shadow-sm transition-all hover:border-slate-300">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
                  <div className="text-xs text-slate-500 font-medium font-mono truncate hidden sm:block">secure | https://demo-app.io</div>
                  <div className="text-xs text-slate-500 font-medium font-mono truncate sm:hidden">demo-app.io</div>
               </div>
            </div>
            <div className="flex gap-2 flex-shrink-0">
               <RefreshCw size={14} className="text-slate-400" />
            </div>
         </div>
         {/* Content */}
         <div className="h-[calc(100%-52px)] bg-slate-50 relative overflow-hidden">
            {children}
         </div>
      </div>
   );
};

const Projects: React.FC = () => {
   const [currentIndex, setCurrentIndex] = useState(0);
   const [direction, setDirection] = useState(0);
   const { t } = useLanguage();

   const projectData = t.projects.items[currentIndex];

   const paginate = (newDirection: number) => {
      setDirection(newDirection);
      setCurrentIndex((prev) => {
         let nextIndex = prev + newDirection;
         if (nextIndex < 0) nextIndex = PROJECTS.length - 1;
         if (nextIndex >= PROJECTS.length) nextIndex = 0;
         return nextIndex;
      });
   };

   const currentProject = PROJECTS[currentIndex];

   const variants = {
      enter: (direction: number) => ({
         x: direction > 0 ? 50 : -50,
         opacity: 0,
      }),
      center: {
         zIndex: 1,
         x: 0,
         opacity: 1,
      },
      exit: (direction: number) => ({
         zIndex: 0,
         x: direction < 0 ? 50 : -50,
         opacity: 0,
      }),
   };

   return (
      <section id="projects" className="py-32 bg-surface relative overflow-hidden">
         <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6 border-b border-border pb-8"
            >
               <div>
                  <span className="text-sm font-bold text-textSub/50 uppercase tracking-widest mb-2 block">Selected Works</span>
                  <h2 className="font-display text-4xl md:text-5xl font-bold text-textMain tracking-tight">
                     {t.projects.title} <span className="text-primary">{t.projects.titleHighlight}</span>
                  </h2>
               </div>
               <div className="hidden md:flex items-center gap-2 text-textSub text-sm font-medium bg-white px-5 py-2.5 rounded-full border border-border shadow-sm">
                  <CreditCard size={16} className="text-primary" /> Live Interactive Demos
               </div>
            </motion.div>

            <div className="relative">
               {/* Main Slider Content */}
               <div className="min-h-auto md:min-h-[700px] overflow-visible">
                  <AnimatePresence initial={false} custom={direction} mode="wait">
                     <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
                     >
                        {/* Visual Area - Interactive Browser Mockup */}
                        <div className="lg:col-span-8">
                           <div className="relative">
                              {/* Decorative elements behind browser */}
                              <div className={`absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full blur-3xl -z-10 hidden md:block`} />
                              <div className={`absolute -bottom-10 -right-10 w-60 h-60 bg-gradient-to-tl from-blue-500/20 to-emerald-500/20 rounded-full blur-3xl -z-10 hidden md:block`} />

                              <BrowserWindow>
                                 {currentProject.id === 1 && <DashboardDemo />}
                                 {currentProject.id === 2 && <FintechDemo />}
                                 {currentProject.id === 3 && <ProductCardDemo />}
                              </BrowserWindow>
                           </div>
                        </div>

                        {/* Content Area */}
                        <div className="lg:col-span-4 flex flex-col justify-center">
                           <div className="mb-6">
                              <span className="text-primary font-bold text-xs tracking-widest uppercase mb-2 block">Case Study 0{currentProject.id}</span>
                              <h3 className="font-display text-4xl lg:text-5xl font-bold text-textMain leading-[1.1] mb-4">
                                 {projectData.title}
                              </h3>
                              <p className="text-textSub leading-relaxed font-sans text-base lg:text-lg break-keep mb-6">
                                 {projectData.description}
                              </p>
                           </div>

                           <div className="mb-8">
                              <span className="text-xs font-bold text-textSub/50 uppercase tracking-widest mb-3 block">Tech Stack</span>
                              <div className="flex flex-wrap gap-2">
                                 {currentProject.tech.map((t, i) => (
                                    <span key={i} className="px-3 py-1 text-xs font-bold rounded-full bg-white border border-border text-slate-600 shadow-sm">
                                       {t}
                                    </span>
                                 ))}
                              </div>
                           </div>

                           {/* Problem & Solution Inline Block */}
                           <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-5 space-y-4 mb-6">
                              <div>
                                 <div className="flex items-center gap-2 text-xs font-bold text-red-500 uppercase tracking-wider mb-1">
                                    <Target size={14} /> {t.projects.problem}
                                 </div>
                                 <p className="text-sm text-textSub leading-relaxed line-clamp-2">
                                    {projectData.problem}
                                 </p>
                              </div>
                              <div className="w-full h-px bg-slate-100" />
                              <div>
                                 <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">
                                    <Zap size={14} /> {t.projects.solution}
                                 </div>
                                 <p className="text-sm text-textSub leading-relaxed line-clamp-3">
                                    {projectData.solution}
                                 </p>
                              </div>
                           </div>

                           <div className="flex items-center gap-2 text-sm text-textSub bg-primary/5 px-4 py-2 rounded-lg border border-primary/10">
                              <Zap size={14} className="text-primary" />
                              <span>{t.projects.tryDemo} <strong className="text-primary">{t.projects.tryDemoHighlight}</strong>{t.projects.tryDemoSuffix}</span>
                           </div>
                        </div>
                     </motion.div>
                  </AnimatePresence>
               </div>

               {/* Navigation Controls */}
               <div className="flex gap-4 absolute bottom-0 right-0 z-20">
                  <button
                     onClick={() => paginate(-1)}
                     className="p-4 rounded-full bg-white border border-border shadow-md text-slate-600 hover:text-primary hover:border-primary transition-all active:scale-95"
                  >
                     <ChevronLeft size={24} />
                  </button>
                  <button
                     onClick={() => paginate(1)}
                     className="p-4 rounded-full bg-white border border-border shadow-md text-slate-600 hover:text-primary hover:border-primary transition-all active:scale-95"
                  >
                     <ChevronRight size={24} />
                  </button>
               </div>

               {/* Pagination Dots */}
               <div className="absolute -bottom-12 left-0 flex gap-2">
                  {PROJECTS.map((_, i) => (
                     <button
                        key={i}
                        onClick={() => {
                           const direction = i > currentIndex ? 1 : -1;
                           setDirection(direction);
                           setCurrentIndex(i);
                        }}
                        className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-12 bg-textMain' : 'w-4 bg-slate-300 hover:bg-slate-400'}`}
                     />
                  ))}
               </div>

            </div>
         </div>
      </section>
   );
};

export default Projects;