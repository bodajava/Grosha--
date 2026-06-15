"use client";

import { cn } from "@/lib/utils";

interface SeasonalCalendarProps {
  months: number[]; // Array of 12 numbers: 0 for off, 1 for peak
}

export const SeasonalCalendar = ({ months = [] }: SeasonalCalendarProps) => {
  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  return (
    <div className="bg-white border border-[#eae9db] shadow-sm hover:shadow-ambient transition-all duration-300 rounded-[2.5rem] p-10">
      <h3 className="text-xl font-heading font-black text-[#38382f] mb-8 flex items-center gap-3 uppercase tracking-tight">
        <span className="w-3 h-3 rounded-full bg-[#f8d472] animate-pulse" />
        Seasonal Harvest Calendar
      </h3>
      
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-3">
        {monthNames.map((month, index) => {
          const isPeak = months && months[index] === 1;
          return (
            <div
              key={month}
              className="flex flex-col items-center gap-2"
            >
              <div
                className={cn(
                  "w-full aspect-square rounded-xl flex items-center justify-center text-[10px] font-black uppercase tracking-tighter transition-all duration-300",
                  isPeak 
                    ? "bg-[#366b7a] text-white shadow-md scale-105"
                    : "bg-[#f0eee2] text-[#9f9d96] border border-[#eae9db]"
                )}
              >
                {month}
              </div>
              <span className={cn(
                "text-[9px] uppercase font-black tracking-widest",
                isPeak ? "text-[#366b7a]" : "text-[#9f9d96]"
              )}>
                {isPeak ? "Peak" : "Off"}
              </span>
            </div>
          );
        })}
      </div>
      
      <p className="mt-8 text-[#9f9d96] text-xs italic font-medium">
        * Harvest seasons vary slightly based on annual weather patterns in the Egyptian Delta.
      </p>
    </div>
  );
};
