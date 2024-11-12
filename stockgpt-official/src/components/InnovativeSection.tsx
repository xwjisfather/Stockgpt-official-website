// components/FundSection.tsx
'use client';
import { motion } from 'framer-motion';

export default function FundSection() {
const fundFeatures = [
    {
      title: "智能量化策略",
      description: "運用先進的AI算法和大數據分析，實現全天候智能交易，把握最佳投資時機",
      position: "left",
      icon: "📊"
    },
    {
      title: "風險智控系統",
      description: "獨創的多維度風險評估體系，即時監控市場波動，確保資金安全",
      position: "center",
      icon: "🛡️"
    },
    {
      title: "收益最大化",
      description: "透明的投資流程，專業的資產配置，為您實現穩健收益",
      position: "right",
      icon: "📈"
    }
  ];

  return (
    <section id="fund" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            智富匯基金
          </h2>
          <p className="text-2xl text-white/60">
            創新的智能投資解決方案
          </p>
        </motion.div>

        {/* 特色展示 */}
        <div className="relative max-w-5xl mx-auto">
          {/* 发光连接线 */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
          
          {/* 中心装饰 */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
              className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 shadow-[0_0_30px_rgba(147,51,234,0.5)]"
            />
          </div>

          {/* 功能卡片 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {fundFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
                className={`feature-card ${feature.position === 'center' ? 'mt-16' : ''}`}
              >
                <div className="relative glass-card p-8 rounded-xl border border-white/5 backdrop-blur-lg">
                  {/* 顶部发光点 */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <motion.div 
                      animate={{ 
                        boxShadow: ['0 0 20px rgba(147,51,234,0.3)', '0 0 40px rgba(147,51,234,0.6)', '0 0 20px rgba(147,51,234,0.3)']
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-500"
                    />
                  </div>
                  
                  {/* 内容 */}
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-medium mb-3 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 数据展示 */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="flex justify-center gap-12">
            {[
              { value: "50億+", label: "管理資產規模" },
              { value: "25%", label: "年化收益率" },
              { value: "100%", label: "資金安全率" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-white/60">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* 背景效果 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-purple-900/20 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-96 bg-purple-500/10 blur-[120px] rounded-full" />
      </div>
    </section>
  );
}
