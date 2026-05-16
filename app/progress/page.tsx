'use client';

import { ArrowLeft, MoreHorizontal, Activity, Heart, Droplet, Weight } from 'lucide-react';
import Link from 'next/link';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'Mon', value: 44 },
  { name: 'Tue', value: 34 },
  { name: 'Wed', value: 110, active: true },
  { name: 'Thu', value: 47 },
  { name: 'Fri', value: 32 },
  { name: 'Sat', value: 79 },
  { name: 'Sun', value: 24 },
];

export default function ProgressPage() {
  return (
    <div className="flex flex-col min-h-screen pb-24 bg-[#F8F9FA]">
      {/* Header */}
      <header className="px-6 pt-12 pb-4 flex items-center justify-between">
        <Link href="/" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center bg-white shadow-sm active:scale-95 transition-transform text-slate-700">
          <ArrowLeft size={20} />
        </Link>
        <h1 className="text-xl font-outfit font-bold text-slate-900">Statistic</h1>
        <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center bg-white shadow-sm active:scale-95 transition-transform text-slate-700">
          <MoreHorizontal size={20} />
        </button>
      </header>

      <main className="flex-1 px-6 flex flex-col gap-6 mt-4">
        
        {/* Calories Chart Chart */}
        <section className="bg-white rounded-[32px] p-6 shadow-sm border border-slate-50">
          <div className="mb-8">
            <h2 className="text-slate-500 font-medium mb-1">Calories</h2>
            <div className="flex items-end justify-between">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-outfit font-bold text-slate-900 leading-none">1250</span>
                <span className="text-slate-500 font-medium">Kcal</span>
              </div>
              <span className="text-slate-500 text-sm font-medium">Target: 1920 Kcal</span>
            </div>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
                {/* Removed cartesian grid, keeping it clean */}
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 500 }} 
                  dy={10}
                />
                
                <Bar 
                  dataKey="value" 
                  radius={[6, 6, 6, 6]}
                  barSize={20}
                  isAnimationActive={true}
                >
                  {data.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.active ? '#a3e635' : '#f1f5f9'} 
                    />
                  ))}
                  {/* Inline percent labels inside/above bars if required, skipping for crisp look */}
                </Bar>
                {/* Render custom labels for percentages if we want, mimicking design */}
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="grid grid-cols-2 gap-4">
            
          {/* Exercise */}
          <div className="bg-white border border-slate-50 rounded-[32px] p-6 shadow-sm flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-lime-100 flex items-center justify-center text-lime-600">
                <Activity size={16} />
              </div>
              <span className="font-semibold text-slate-700">Exercise</span>
            </div>
            {/* simple bar visualization */}
            <div className="flex items-end gap-1 mb-4 h-8 justify-between">
              {[4,2,3,5,6,4,7,5].map((h, i) => (
                <div key={i} className="w-[10%] bg-lime-400 rounded-sm" style={{height: `${h*10}%`}}></div>
              ))}
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-outfit font-bold text-slate-900">2.0</span>
              <span className="text-slate-500 text-sm">hours</span>
            </div>
          </div>

          {/* BPM */}
          <div className="bg-white border border-slate-50 rounded-[32px] p-6 shadow-sm flex flex-col">
             <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                <Heart size={16} />
              </div>
              <span className="font-semibold text-slate-700">BPM</span>
            </div>
             {/* simple line visualization */}
            <div className="flex items-center mb-4 h-8">
               <svg viewBox="0 0 100 30" className="w-full h-full stroke-red-400 fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                 <path d="M0 15 L20 15 L25 5 L35 28 L45 10 L50 20 L65 15 L100 15" />
               </svg>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-outfit font-bold text-slate-900">86</span>
              <span className="text-slate-500 text-sm">bpm</span>
            </div>
          </div>

          {/* Weight */}
          <div className="bg-white border border-slate-50 rounded-[32px] p-6 shadow-sm flex flex-col justify-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
                 <Weight size={16} />
              </div>
              <span className="font-semibold text-slate-700">Weight</span>
            </div>
          </div>

           {/* Water */}
           <div className="bg-white border border-slate-50 rounded-[32px] p-6 shadow-sm flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
                 <Droplet size={16} />
              </div>
              <span className="font-semibold text-slate-700">Water</span>
            </div>
            {/* Water Drops vis */}
            <div className="flex gap-1 overflow-hidden mt-auto">
               {[1,2,3,4,5,6].map(i => (
                 <svg key={i} width="10" height="14" viewBox="0 0 10 14" className="fill-blue-400">
                    <path d="M5 0C5 0 0 4 0 9C0 11.7614 2.23858 14 5 14C7.76142 14 10 11.7614 10 9C10 4 5 0 5 0Z" />
                 </svg>
               ))}
               <svg width="10" height="14" viewBox="0 0 10 14" className="fill-blue-100">
                  <path d="M5 0C5 0 0 4 0 9C0 11.7614 2.23858 14 5 14C7.76142 14 10 11.7614 10 9C10 4 5 0 5 0Z" />
               </svg>
            </div>
          </div>

        </section>

      </main>
    </div>
  );
}
