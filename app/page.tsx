import { Home, BarChart2, ScanLine, Gift, Menu as MenuIcon, Bell, Calendar as CalendarIcon, Flame, Droplet, Plus, Footprints } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { format, addDays, startOfWeek } from 'date-fns';

export default function DashboardPage() {
  const today = new Date();
  const weekStart = startOfWeek(today, { weekStartsOn: 1 }); // Start on Monday
  const weekDays = Array.from({ length: 7 }).map((_, i) => addDays(weekStart, i));

  return (
    <div className="flex flex-col min-h-screen pb-24">
      {/* Header */}
      <header className="px-6 pt-12 pb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-sm">
            <Image
              src="https://picsum.photos/seed/portrait/100/100"
              alt="Profile"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
              unoptimized
            />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Good morning!</p>
            <h1 className="text-xl font-outfit font-bold text-slate-900 leading-tight">Jordan Eagle</h1>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center bg-white shadow-sm active:scale-95 transition-transform" aria-label="Calendar">
            <CalendarIcon size={18} className="text-slate-700" />
          </button>
          <button className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center bg-white shadow-sm relative active:scale-95 transition-transform" aria-label="Notifications">
             <span className="absolute top-2 right-2 w-2 h-2 bg-lime-500 rounded-full border-2 border-white"></span>
            <Bell size={18} className="text-slate-700" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-6 flex flex-col gap-8">
        
        {/* Weekly Progress Card */}
        <section>
          <div className="bg-slate-900 rounded-[32px] p-6 shadow-2xl flex items-center justify-between relative overflow-hidden text-white">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-lime-400/20 rounded-full blur-3xl"></div>
            <div className="z-10 w-3/5">
              <div className="flex items-center gap-2 mb-2">
                <Flame size={16} className="text-lime-400" />
                <span className="text-sm font-semibold text-lime-400">Daily intake</span>
              </div>
              <h2 className="text-3xl font-outfit font-bold text-white leading-tight mb-4">
                Your Weekly<br/>Progress
              </h2>
            </div>
            {/* Progress Circle (Simplified CSS implementation for now, or SVG) */}
            <div className="z-10 relative flex-shrink-0 mr-2 border border-slate-700 rounded-full p-2">
               <svg viewBox="0 0 36 36" className="w-20 h-20 -rotate-90">
                  <path
                    className="text-slate-800 fill-none stroke-current"
                    strokeWidth="4"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-lime-400 fill-none stroke-current"
                    strokeWidth="4"
                    strokeDasharray="60, 100" // Example progress (60%)
                    strokeLinecap="round"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-xl font-bold font-outfit leading-none text-white">6</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Days</span>
                </div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="grid grid-cols-2 gap-4">
          <div className="bg-white border border-slate-50 rounded-[32px] p-6 shadow-sm flex flex-col justify-between">
            <div className="flex justify-between items-start mb-4">
              <span className="text-sm font-medium text-slate-500">Step to<br/>walk</span>
              <div className="p-3 bg-orange-50 text-orange-500 rounded-2xl">
                 <Footprints size={20} />
              </div>
            </div>
            <p className="text-3xl font-outfit font-bold text-slate-900 mt-2">5,500 <span className="text-lg font-normal text-slate-400">steps</span></p>
          </div>
          <div className="bg-white border border-slate-50 rounded-[32px] p-6 shadow-sm flex flex-col justify-between">
            <div className="flex justify-between items-start mb-4">
              <span className="text-sm font-medium text-slate-500">Drink<br/>Water</span>
              <div className="p-3 bg-blue-50 text-blue-500 rounded-2xl">
                 <Droplet size={20} />
              </div>
            </div>
            <p className="text-3xl font-outfit font-bold text-slate-900 mt-2">12 <span className="text-lg font-normal text-slate-400">glass</span></p>
          </div>
        </section>

        {/* Calendar Strip */}
        <section>
          <div className="flex items-center justify-between mb-4">
             <h3 className="font-outfit font-bold text-lg text-slate-900">{format(today, 'MMMM yyyy')}</h3>
             <div className="flex gap-2">
               <button className="w-8 h-8 text-slate-400 hover:text-slate-800 flex items-center justify-center" aria-label="Previous week">←</button>
               <button className="w-8 h-8 text-slate-400 hover:text-slate-800 flex items-center justify-center" aria-label="Next week">→</button>
             </div>
          </div>
          <div className="flex justify-between">
            {weekDays.map((date, i) => {
              const isToday = format(date, 'yyyy-MM-dd') === format(today, 'yyyy-MM-dd');
              return (
                <div key={i} className="flex flex-col items-center gap-2">
                  <span className="text-xs font-medium text-slate-400">{format(date, 'EE').charAt(0)}</span>
                  <div className={`w-10 h-10 flex items-center justify-center rounded-full font-bold text-sm ${isToday ? 'bg-lime-400 text-slate-900 shadow-md shadow-lime-200' : 'text-slate-700'}`}>
                    {format(date, 'dd')}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Meals */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center justify-between p-6 bg-white border border-slate-50 rounded-[32px] shadow-sm">
             <div>
               <h4 className="font-bold text-slate-900 mb-1">Breakfast</h4>
               <div className="flex items-center gap-1 text-sm font-medium text-slate-500">
                 <Flame size={14} className="text-orange-400" />
                 <span>456 - 512 kcal</span>
               </div>
             </div>
             <div className="flex items-center gap-3">
               <div className="flex -space-x-3">
                 <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-slate-100 relative">
                   <Image src="https://picsum.photos/seed/food1/60/60" alt="Meal" fill className="object-cover" unoptimized/>
                 </div>
               </div>
               <button className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors">
                  <Plus size={20} />
               </button>
             </div>
          </div>

          <div className="flex items-center justify-between p-6 bg-white border border-slate-50 rounded-[32px] shadow-sm">
             <div>
               <h4 className="font-bold text-slate-900 mb-1">Lunch time</h4>
               <div className="flex items-center gap-1 text-sm font-medium text-slate-500">
                 <Flame size={14} className="text-orange-400" />
                 <span>456 - 512 kcal</span>
               </div>
             </div>
             <div className="flex items-center gap-3">
               <div className="flex -space-x-3">
                 <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-slate-100 relative">
                   <Image src="https://picsum.photos/seed/food2/60/60" alt="Meal" fill className="object-cover" unoptimized/>
                 </div>
               </div>
               <button className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors">
                  <Plus size={20} />
               </button>
             </div>
          </div>
        </section>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 w-full max-w-md bg-white border-t border-slate-100 px-6 py-4 flex items-center justify-between rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.05)] z-50">
        <Link href="/" className="flex flex-col items-center gap-1 text-slate-900">
          <Home size={22} className="stroke-2" />
          <span className="text-[10px] font-bold">Home</span>
        </Link>
        <Link href="/progress" className="flex flex-col items-center gap-1 text-slate-400">
          <BarChart2 size={22} className="stroke-[1.5]" />
          <span className="text-[10px] font-medium">Progress</span>
        </Link>
        
        {/* FAB */}
        <div className="relative -top-6">
          <button className="w-16 h-16 bg-lime-400 rounded-[24px] flex items-center justify-center shadow-lg shadow-lime-200/50 text-slate-900 active:scale-95 transition-transform border-4 border-white">
            <ScanLine size={28} className="stroke-2" />
          </button>
        </div>

        <button className="flex flex-col items-center gap-1 text-slate-400">
          <Gift size={22} className="stroke-[1.5]" />
          <span className="text-[10px] font-medium">Rewards</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-slate-400">
          <MenuIcon size={22} className="stroke-[1.5]" />
          <span className="text-[10px] font-medium">Menu</span>
        </button>
      </nav>
    </div>
  );
}
