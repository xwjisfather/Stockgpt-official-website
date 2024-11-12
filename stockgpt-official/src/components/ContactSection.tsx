import { motion } from "framer-motion";

// components/ContactSection.tsx
export default function ContactSection() {
    const faqs = [
      {
        question: "智富匯提供哪些服務？",
        answer: "我們提供全方位的智能投資解決方案，包括股票分析、市場趨勢預測、個性化投資建議和實時市場動態追蹤等服務。"
      },
      {
        question: "如何保證投資建議的質量？",
        answer: "我們採用先進的AI技術，結合專業金融團隊的審核，確保每個投資建議都經過嚴格的分析和驗證。"
      },
      {
        question: "平臺如何保障用戶的數據安全？",
        answer: "我們使用銀行級別的加密技術保護用戶數據，嚴格遵守隱私保護協議，確保您的投資數據安全。"
      },
      {
        question: "如何開始使用智富匯服務？",
        answer: "只需簡單註冊賬號，即可體驗我們的基礎服務。升級至專業版可享受更全面的投資分析工具。"
      }
    ];
  
    const testimonials = [
      {
        content: "智富匯幫助我更好地理解市場動態，提供的分析非常專業，對投資決策很有幫助！",
        author: "專業投資者"
      },
      {
        content: "AI分析準確度很高，市場預測和風險提示功能特別實用，值得推薦。",
        author: "理財經理"
      },
      {
        content: "界面直觀友好，新手也能快速上手，客服響應及時，體驗很好。",
        author: "個人投資者"
      }
    ];

    return (
      <section id="contact" className="py-12 sm:py-16 md:py-24 relative bg-gradient-to-b from-blue-900 to-purple-900">
{/* 產品介紹 */}
        <div className="container mx-auto px-4 mb-12 sm:mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto px-4 sm:px-6"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
              智富匯 · RichMaster GPT
            </h2>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              將為投資者提供創新的金融體驗。通過我們的先進技術和專業團隊，我們有信心在未來的市場中取得成功。期待您的支持和合作。
            </p>
          </motion.div>
        </div>
  
        {/* 用戶評價 */}
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-4"
            >
              用戶心聲<br />
              <span className="text-white/60 text-lg sm:text-xl">真實反饋</span>
            </motion.h2>
          </div>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20">
            {testimonials.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="glass-card p-4 sm:p-6 rounded-lg backdrop-blur-sm"
              >
                <p className="text-sm sm:text-base text-white/80 mb-3 sm:mb-4">{item.content}</p>
                <div className="text-white/60 text-xs sm:text-sm">{item.author}</div>
              </motion.div>
            ))}
          </div>
  
          {/* 常见问题 */}
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">
              常見問題
            </h3>
            <div className="space-y-3 sm:space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-4 sm:p-6 rounded-lg"
                >
                  <h4 className="text-white font-medium mb-2 text-sm sm:text-base">{faq.question}</h4>
                  <p className="text-white/60 text-xs sm:text-sm">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
  
          {/* 社區加入 */}
          <div className="text-center mt-12 sm:mt-16 md:mt-20">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">
              加入我們的<br />
              投資者社區
            </h3>
            <div className="flex justify-center gap-3 sm:gap-4">
              {['微信', '知乎', '微博'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm"
                >
                  <span className="text-white/60 text-xs sm:text-sm">{social[0]}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
  
        {/* 装饰性背景元素 */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-24 sm:h-32 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </div>
  
        {/* 添加玻璃态效果的样式 */}
        <style jsx global>{`
          .glass-card {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s ease;
          }
          
          .glass-card:hover {
            background: rgba(255, 255, 255, 0.08);
            transform: translateY(-2px);
          }
          
          @media (max-width: 640px) {
            .glass-card {
              backdrop-filter: blur(8px);
            }
          }
        `}</style>
      </section>
    );
}
