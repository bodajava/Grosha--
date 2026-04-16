"use client";

import { motion } from "framer-motion";
import { NutritionData } from "@/lib/data";
import { Zap, Activity } from "lucide-react";

interface NutritionalValuesProps {
  nutrition: NutritionData;
}

export const NutritionalValues = ({ nutrition }: NutritionalValuesProps) => {
  if (!nutrition) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Vitamins */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="bg-white border border-[#eae9db] shadow-sm hover:shadow-ambient transition-shadow rounded-[2rem] p-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-[#f8d472]/20 rounded-2xl">
            <Zap className="w-5 h-5 text-[#7c6103]" />
          </div>
          <h3 className="text-xl font-heading font-bold text-[#38382f]">Vitamins</h3>
        </div>
        
        <div className="space-y-4">
          {nutrition.vitamins?.map((item, idx) => (
            <div key={idx} className="flex justify-between items-center py-2 border-b border-[#eae9db] last:border-0">
              <span className="text-[#65655a] font-medium">{item.label}</span>
              <span className="text-[#38382f] font-bold">{item.value}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Minerals */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="bg-white border border-[#eae9db] shadow-sm hover:shadow-ambient transition-shadow rounded-[2rem] p-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-[#ade2f4]/50 rounded-2xl">
            <Activity className="w-5 h-5 text-[#366b7a]" />
          </div>
          <h3 className="text-xl font-heading font-bold text-[#38382f]">Minerals</h3>
        </div>
        
        <div className="space-y-4">
          {nutrition.minerals?.map((item, idx) => (
            <div key={idx} className="flex justify-between items-center py-2 border-b border-[#eae9db] last:border-0">
              <span className="text-[#65655a] font-medium">{item.label}</span>
              <span className="text-[#38382f] font-bold">{item.value}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
