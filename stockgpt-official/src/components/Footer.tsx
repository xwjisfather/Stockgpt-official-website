// components/Footer.tsx
'use client';
import { motion } from 'framer-motion';

export default function Footer() {
  const footerLinks = {
    产品服务: [
      { label: "智能分析", href: "#" },
      { label: "投资策略", href: "#" },
      { label: "价格方案", href: "#" },
      { label: "功能更新", href: "#" },
    ],
    关于我们: [
      { label: "公司介绍", href: "#" },
      { label: "加入我们", href: "#" },
      { label: "新闻动态", href: "#" },
      { label: "联系方式", href: "#" },
    ],
    支持服务: [
      { label: "帮助中心", href: "#" },
      { label: "服务条款", href: "#" },
      { label: "隐私政策", href: "#" },
      { label: "服务状态", href: "#" },
    ]
  };

  return (
    <footer className="relative bg-gradient-to-b from-indigo-900 to-purple-900 pt-20 pb-10">
      <div className="container mx-auto px-4">
        {/* 主要内容 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* 品牌栏 */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <h3 className="text-xl font-bold text-white mb-4">
                智富汇 · RichMaster
              </h3>
              <p className="text-white/60 text-sm">
                通过创新科技赋能您的投资未来，打造值得信赖的智能金融服务平台。
              </p>
            </motion.div>

            <div className="flex space-x-4">
              {['微信', '知乎', '微博'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors backdrop-blur-sm"
                >
                  <span className="text-white/60 text-xs">{social[0]}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* 链接栏 */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 rounded-lg backdrop-blur-sm"
            >
              <h4 className="text-white font-medium mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/60 text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* 底部栏 */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/40 text-sm">
              © 2024 智富汇 · RichMaster StockGPT. 保留所有权利
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-white/40 text-sm hover:text-white/60 transition-colors">
                服务条款
              </a>
              <a href="#" className="text-white/40 text-sm hover:text-white/60 transition-colors">
                隐私政策
              </a>
              <a href="#" className="text-white/40 text-sm hover:text-white/60 transition-colors">
                Cookie设置
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 装饰元素 */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-96 bg-purple-500/10 blur-[120px] rounded-full" />
      </div>
    </footer>
  );
}