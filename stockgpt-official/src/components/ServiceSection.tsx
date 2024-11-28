// components/PricingSection.tsx
'use client';
import { motion } from 'framer-motion';

export default function PricingSection() {
  const plans = [
    {
      title: "基礎版",
      price: "19",
      period: "/月",
      features: [
        "最多5個項目",
        "基礎數據分析",
        "24/7技術支持",
        "1個團隊成員"
      ],
      popularTag: false,
      icon: "🚀"
    },
    {
      title: "專業版",
      price: "49",
      period: "/月",
      features: [
        "無限項目數量",
        "高級數據分析",
        "優先技術支持",
        "5個團隊成員"
      ],
      popularTag: true,
      icon: "⭐"
    },
    {
      title: "企業版",
      price: "99",
      period: "/月",
      features: [
        "定製解決方案",
        "專屬技術支持",
        "API接口訪問",
        "無限團隊成員"
      ],
      popularTag: false,
      icon: "🏢"
    }
  ];

  return (
    <section id="pricing" className="py-12 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-3xl font-bold text-center text-white mb-8 md:mb-16"
        >
          全套服務方案<br />
          <span className="text-white/60">靈活訂閱計劃</span>
        </motion.h2>

        <div className="flex flex-col md:flex-row justify-center md:gap-8 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, rotateY: -30 }}
              animate={{ opacity: 1, rotateY: 0 }}
              transition={{ delay: index * 0.2 }}
              className="pricing-card w-full md:w-80 relative"
            >
              <div className="glass-card p-6 md:p-8 rounded-lg h-full border-l border-white/10 relative overflow-hidden">
                {plan.popularTag && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-blue-500 px-3 py-1 rounded-full text-xs text-white">
                    熱門選擇
                  </div>
                )}
                <div className="text-2xl md:text-3xl mb-4">{plan.icon}</div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-3">
                  {plan.title}
                </h3>
                <div className="flex items-baseline mb-4 md:mb-6">
                  <span className="text-sm text-white/60 mr-1">$</span>
                  <span className="text-2xl md:text-3xl font-bold text-white">{plan.price}</span>
                  <span className="text-white/60 ml-1">{plan.period}</span>
                </div>
                <div className="space-y-2 md:space-y-3">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-white/60 text-sm md:text-base">
                      <span className="mr-2">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-6 md:mt-8 py-2.5 md:py-3 px-6 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm md:text-base font-medium hover:opacity-90 transition-opacity"
                >
                  立即開始
                </motion.button>
              </div>
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
