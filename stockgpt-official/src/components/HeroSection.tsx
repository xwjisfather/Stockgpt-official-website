// components/HeroSection.tsx
'use client';

import { motion } from 'framer-motion';


export default function HeroSection() {

 const stats = [
    {
      percent: "100%",
      label: "安全保障",
      prefix: "為您提供"
    },
    {
      percent: "90%",
      label: "成功率",
      prefix: ""
    },
    {
      percent: "100%",
      label: "客戶滿意度",
      prefix: "為您提供"
    }
  ];

  const partners = [
    '阿里雲',
    '騰訊雲',
    '華為雲',
    '亞馬遜雲',
    '微軟雲'
  ];

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-b from-cyan-400 via-blue-600 to-indigo-900">
      {/* 顶部预留空间 */}
      <div className="h-20 md:h-32 bg-gradient-to-b from-cyan-300 to-cyan-400" />
       {/* 登录/注册按钮 */}
       <div className="absolute top-4 right-4 z-10 flex items-center space-x-4">
       {/* {renderAuthButtons()} */}
      </div>

      {/* 登录和注册模态框 */}
      {/* <Login isOpen={showLogin} onClose={() => setShowLogin(false)} />
      <Register isOpen={showRegister} onClose={() => setShowRegister(false)} /> */}
      

      {/* 深色圆弧 - 使用直接的类名而不是 .dark-arc */}
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-[40vh] md:h-[45vh] bg-indigo-900/90 rounded-b-[50%] backdrop-blur-sm" />
        
        {/* 主标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center pt-16 md:pt-32 px-4"
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-8 md:mb-16">
            賦能現代科技<br />創新未來
          </h1>
        </motion.div>

        {/* 紫色圆形图标 */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="absolute left-1/2 transform -translate-x-1/2 -translate-y-8 z-20"
          style={{ top: '42vh' }}
        >
          <div className="w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center bg-purple-600/50 backdrop-blur-sm">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-purple-400/50 flex items-center justify-center backdrop-blur-sm">
              <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-white/90"></div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 合作伙伴 */}
      <div className="container mx-auto px-4 relative z-10" style={{ marginTop: 'calc(45vh - 3rem)' }}>
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg px-3 py-2 md:px-4 md:py-2 h-8 flex items-center justify-center"
            >
              <span className="text-white/70 text-xs md:text-sm">{partner}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 统计数据部分 */}
      <div className="container mx-auto px-4 relative z-10 mt-16 md:mt-32 mb-8 md:mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-x-16 md:gap-y-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.2 }}
              className="text-center"
            >
              {stat.prefix && (
                <div className="text-white/60 text-xs md:text-sm mb-1">{stat.prefix}</div>
              )}
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.percent}</div>
              <div className="text-white/60 text-xs md:text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 背景装饰 */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full md:w-3/4 h-96 bg-purple-500/10 blur-[120px] rounded-full" />
      </div>
    </section>
  );
}
