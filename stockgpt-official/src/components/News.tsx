import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface NewsData {
  flashNewsGuid: string;
  flashNewsLink: string;
  generateDate: string;
  id: number;
  language: string;
  pubDate: string;
  slug: string;
  sourceId: number;
  status: string;
  summary: string;
  title: string;
}

const MotionArticle = motion.article;

export function News() {
  const [news, setNews] = useState<NewsData[]>([]);
  const [page, setPage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const fetchNews = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://tradingwithaiservice-f0drbtcthje3chbp.eastasia-01.azurewebsites.net/api/flashnews?language=zh"
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data: NewsData[] = await response.json();
      // 确保数据不重复
      const newData = data.slice(page * 30, (page + 1) * 30);
      setNews(prevNews => {
        const existingIds = new Set(prevNews.map(item => item.id));
        const uniqueNewData = newData.filter(item => !existingIds.has(item.id)&& item.language === 'zh');
        return [...prevNews, ...uniqueNewData];
      });
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  useEffect(() => {
    const handleScroll = () => {
      if (!loading && containerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
        if (scrollTop + clientHeight >= scrollHeight - 100) {
          setPage(prevPage => prevPage + 1);
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [loading]);

  

  // 使用 id 作为 key，因为它应该是唯一的
  return (
    <section id="news" className="w-full bg-[#0B2FFF] bg-gradient-to-b from-[#0B2FFF] to-[#0B0B6B] relative overflow-hidden py-12 sm:py-16 md:py-24">
      {/* 背景光晕效果 */}
      <div className="absolute top-0 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-blue-600/20 rounded-full blur-[128px]"></div>
      <div className="absolute bottom-0 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-blue-400/20 rounded-full blur-[128px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* 标题部分 */}
        <div className="mb-8 sm:mb-12 md:mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600">
              最新市场消息
            </span>
          </h2>
        </div>

        {/* 新闻网格 - 修改为单列、双列和三列响应式布局 */}
        <div 
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 relative z-10 max-h-[600px] sm:max-h-[700px] lg:max-h-[800px] overflow-y-auto pr-2 sm:pr-4 styled-scrollbar"
        >
          {news.map((item, index) => (
            <MotionArticle
              key={`${item.id}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              {/* 卡片 */}
              <div className="relative rounded-xl sm:rounded-2xl bg-gradient-to-b from-[#2240FF] to-[#1A1A8F] p-4 sm:p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                {/* 发光边框效果 */}
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                
                <div className="relative">
                  {/* 日期标签 */}
                  <div className="flex justify-end mb-3 sm:mb-4">
                    <span className="text-xs sm:text-sm text-blue-300 bg-blue-500/10 px-2 sm:px-3 py-1 rounded-full">
                      {new Date(item.pubDate).toLocaleDateString('zh-CN', {
                        month: 'short',
                        day: 'numeric'
                      })}
                    </span>
                  </div>

                  {/* 标题 */}
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white/90 group-hover:text-white transition-colors duration-300 line-clamp-2">
                    {item.title}
                  </h3>

                  {/* 摘要 */}
                  <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 line-clamp-3">
                    {item.summary}
                  </p>

                  {/* 链接按钮 */}
                  <a
                    href={item.flashNewsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm sm:text-base text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    <span className="relative">
                      了解更多
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                    </span>
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 transform transition-transform duration-200 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </MotionArticle>
          ))}
        </div>

        {/* 加载动画 */}
        {loading && (
          <div className="text-center mt-8 sm:mt-12">
            <div className="inline-block h-8 w-8 sm:h-10 sm:w-10 animate-spin rounded-full border-3 sm:border-4 border-solid border-blue-400 border-r-transparent"></div>
          </div>
        )}
      </div>

      {/* 自定义滚动条 */}
      <style jsx global>{`
        .styled-scrollbar::-webkit-scrollbar {
          width: 4px;
          @media (min-width: 640px) {
            width: 6px;
          }
        }
        .styled-scrollbar::-webkit-scrollbar-track {
          background: rgba(59, 130, 246, 0.1);
          border-radius: 3px;
        }
        .styled-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.3);
          border-radius: 3px;
        }
        .styled-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(59, 130, 246, 0.5);
        }
      `}</style>
    </section>
  );
}