// components/StatsSection.tsx
'use client';
import { motion } from 'framer-motion';

export default function StatsSection() {
  const stats = [
    {
      percent: "100%",
      label: "Security",
      prefix: "Gives You"
    },
    {
      percent: "90%",
      label: "Success Rate",
      prefix: ""
    },
    {
      percent: "100%",
      label: "Satisfaction",
      prefix: "Gives You"
    }
  ];

  return (
    <section id="stats" className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-x-16 gap-y-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
              className="text-center"
            >
              {stat.prefix && (
                <div className="text-white/60 text-sm mb-1">{stat.prefix}</div>
              )}
              <div className="text-4xl font-bold text-white mb-2">{stat.percent}</div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 装饰性背景元素 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-32 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>
    </section>
  );
}