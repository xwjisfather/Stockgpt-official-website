import { motion } from "framer-motion";

// components/ContactSection.tsx
export default function ContactSection() {
    const faqs = [
      {
        question: "智富汇提供哪些服务？",
        answer: "我们提供全方位的智能投资解决方案，包括股票分析、市场趋势预测、个性化投资建议和实时市场动态追踪等服务。"
      },
      {
        question: "如何保证投资建议的质量？",
        answer: "我们采用先进的AI技术，结合专业金融团队的审核，确保每个投资建议都经过严格的分析和验证。"
      },
      {
        question: "平台如何保障用户的数据安全？",
        answer: "我们使用银行级别的加密技术保护用户数据，严格遵守隐私保护协议，确保您的投资数据安全。"
      },
      {
        question: "如何开始使用智富汇服务？",
        answer: "只需简单注册账号，即可体验我们的基础服务。升级至专业版可享受更全面的投资分析工具。"
      }
    ];
  
    const testimonials = [
      {
        content: "智富汇帮助我更好地理解市场动态，提供的分析非常专业，对投资决策很有帮助！",
        author: "专业投资者"
      },
      {
        content: "AI分析准确度很高，市场预测和风险提示功能特别实用，值得推荐。",
        author: "理财经理"
      },
      {
        content: "界面直观友好，新手也能快速上手，客服响应及时，体验很好。",
        author: "个人投资者"
      }
    ];

    return (
      <section id="contact" className="py-12 sm:py-16 md:py-24 relative bg-gradient-to-b from-blue-900 to-purple-900">
        {/* 产品介绍 */}
        <div className="container mx-auto px-4 mb-12 sm:mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto px-4 sm:px-6"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
              智富汇 · RichMaster StockGPT
            </h2>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              将为投资者提供创新的金融体验。通过我们的先进技术和专业团队，我们有信心在未来的市场中取得成功。期待您的支持和合作。
            </p>
          </motion.div>
        </div>
  
        {/* 用户评价 */}
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-4"
            >
              用户心声<br />
              <span className="text-white/60 text-lg sm:text-xl">真实反馈</span>
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
                <p className="text-sm sm:text-base text-white/80 mb-3 sm:mb-4">"{item.content}"</p>
                <div className="text-white/60 text-xs sm:text-sm">{item.author}</div>
              </motion.div>
            ))}
          </div>
  
          {/* 常见问题 */}
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">
              常见问题
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
  
          {/* 社区加入 */}
          <div className="text-center mt-12 sm:mt-16 md:mt-20">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">
              加入我们的<br />
              投资者社区
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