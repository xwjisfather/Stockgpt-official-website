"use client";
import { FC, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext'; // 导入认证 hook
import Login from './Login'; // 导入登录组件
import Register from './Register';

// 定义 NavItem 接口
interface NavItem {
  href: string;
  label: string;
  isExternal: boolean;
}

// NavLink 属性接口
interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  target?: string;
  rel?: string;
}

// NavLink 组件 - 用于桌面端
const NavLink: FC<NavLinkProps> = ({ 
  href, 
  children, 
  isActive, 
  onClick,
  target,
  rel 
}) => (
  <motion.a
    href={href}
    onClick={onClick}
    target={target}
    rel={rel}
    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all cursor-pointer
      ${isActive 
        ? 'bg-slate-800/15 text-slate-800' 
        : 'text-slate-700 hover:text-slate-800 hover:bg-slate-800/10'
      }`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.a>
);

// MobileNavLink 组件 - 用于移动端
const MobileNavLink: FC<NavLinkProps> = ({ 
  href, 
  children, 
  isActive, 
  onClick,
  target,
  rel 
}) => (
  <motion.a
    href={href}
    onClick={onClick}
    target={target}
    rel={rel}
    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all cursor-pointer block
      ${isActive 
        ? 'bg-slate-800/15 text-slate-800' 
        : 'text-slate-700 hover:text-slate-800 hover:bg-slate-800/10'
      }`}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    {children}
  </motion.a>
);

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false); // 添加登录模态框状态
  const { isAuthenticated, logout } = useAuth(); // 使用认证 hook
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  // 导航项配置
  const navItems: NavItem[] = [
    { href: "home", label: "首页", isExternal: false },
    { href: "fund", label: "智富汇基金", isExternal: false },
    { href: "pricing", label: "订阅计划", isExternal: false },
    { href: "contact", label: "联系我们", isExternal: false },
    { href: "https://tradingwithai.org/zh", label: "聊天机器人", isExternal: true }
  ];

  const renderAuthButtons = () => {
    return (
      <div className="flex items-center gap-2">
        {isAuthenticated ? (
          <button
            onClick={logout}
            className="px-4 py-1.5 text-xs md:text-sm font-medium text-white bg-red-500 hover:bg-red-600 
            rounded-full transition-all duration-200 shadow-sm hover:shadow-md whitespace-nowrap"
          >
            退出登录
          </button>
        ) : (
          <>
            <button
              onClick={() => setShowLoginModal(true)}
              className="px-4 py-1.5 text-xs md:text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 
              rounded-full transition-all duration-200 shadow-sm hover:shadow-md whitespace-nowrap"
            >
              登录
            </button>
            <button
              onClick={() => setShowRegisterModal(true)}
              className="px-4 py-1.5 text-xs md:text-sm font-medium text-slate-700 bg-white hover:bg-gray-50 
              rounded-full transition-all duration-200 shadow-sm hover:shadow-md border border-gray-200 whitespace-nowrap"
            >
              注册
            </button>
          </>
        )}
      </div>
    );
  };

  // 更新的导航点击处理函数
  const handleNavClick = (item: NavItem, e: React.MouseEvent<HTMLAnchorElement>) => {
    if (item.isExternal) {
      e.preventDefault();
      if (!isAuthenticated && item.href === "https://tradingwithai.org/zh") {
        // 未登录点击聊天机器人，显示登录模态框
        setShowLoginModal(true);
      } else {
        // 已登录或其他外部链接，直接打开
        window.open(item.href, '_blank', 'noopener,noreferrer');
      }
    } else {
      e.preventDefault();
      scrollToSection(item.href);
    }
    setIsMenuOpen(false);
  };

  // 监听滚动，更新当前活动项
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems
        .filter(item => !item.isExternal)
        .map(item => ({
          id: item.href,
          element: document.getElementById(item.href)
        }));

      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        if (section.element) {
          const sectionTop = section.element.offsetTop;
          const sectionBottom = sectionTop + section.element.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveTab(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 控制移动端菜单打开时的背景滚动
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // 滚动到指定部分
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80; // 导航栏高度
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveTab(sectionId);
    }
  };

  return (
    <>
      <nav className="fixed w-full z-50 top-2 md:top-4">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="nav-glass-card rounded-full h-12 flex items-center justify-between px-4 md:px-6 shadow-lg">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 
                className="text-slate-800 text-base md:text-lg font-semibold cursor-pointer" 
                onClick={() => scrollToSection('home')}
              >
                智富汇
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <NavLink 
                  key={item.href}
                  href={item.isExternal ? item.href : `#${item.href}`}
                  isActive={activeTab === item.href}
                  onClick={(e) => handleNavClick(item, e)}
                  target={item.isExternal ? "_blank" : undefined}
                  rel={item.isExternal ? "noopener noreferrer" : undefined}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:block">
              {renderAuthButtons()}
            </div>

           {/* Mobile Menu Button */}
<div className="flex md:hidden items-center space-x-2">
  {/* Mobile Auth Buttons */}
  {!isAuthenticated && (
    <button
      onClick={() => setShowLoginModal(true)}
      className="px-3 py-1 text-xs font-medium text-white bg-blue-500 hover:bg-blue-600 
      rounded-full transition-all duration-200 shadow-sm hover:shadow-md whitespace-nowrap"
    >
      登录
    </button>
  )}
  <button 
    onClick={() => setIsMenuOpen(!isMenuOpen)}
    className="p-2 rounded-full hover:bg-slate-800/10 transition-colors"
    aria-label={isMenuOpen ? "关闭菜单" : "打开菜单"}
  >
    <svg 
      className="w-6 h-6 text-slate-800" 
      fill="none" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth="2" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
    >
      {isMenuOpen ? (
        <path d="M6 18L18 6M6 6l12 12" />
      ) : (
        <path d="M4 6h16M4 12h16M4 18h16" />
      )}
    </svg>
  </button>
</div>

            {/* Help Button */}
            <div className="hidden md:flex items-center space-x-3">
              <button 
                className="w-8 h-8 rounded-full bg-slate-800/10 flex items-center justify-center hover:bg-slate-800/20 transition-colors"
                aria-label="帮助"
              >
                <span className="text-slate-800 text-sm">?</span>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <>
                {/* 背景遮罩 */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/20 md:hidden"
                  onClick={() => setIsMenuOpen(false)}
                />
                
                {/* 菜单内容 */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="md:hidden absolute left-4 right-4 mt-2 py-2 nav-glass-card rounded-2xl shadow-lg"
                >
                  <div className="flex flex-col space-y-1 px-2">
                    {navItems.map((item) => (
                      <MobileNavLink
                        key={item.href}
                        href={item.isExternal ? item.href : `#${item.href}`}
                        isActive={activeTab === item.href}
                        onClick={(e) => handleNavClick(item, e)}
                        target={item.isExternal ? "_blank" : undefined}
                        rel={item.isExternal ? "noopener noreferrer" : undefined}
                      >
                        {item.label}
                      </MobileNavLink>
                    ))}
                    {/* Mobile Menu Auth Buttons */}
                    {isAuthenticated ? (
                      <button
                        onClick={logout}
                        className="px-4 py-2 mt-2 w-full text-sm font-medium text-white bg-red-500 hover:bg-red-600 
                        rounded-xl transition-all duration-200 text-left"
                      >
                        退出登录
                      </button>
                    ) : (
                      <div className="mt-2 space-y-2 px-2">
                        <button
                          onClick={() => {
                            setShowLoginModal(true);
                            setIsMenuOpen(false);
                          }}
                          className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 
                          rounded-xl transition-all duration-200 text-left"
                        >
                          登录
                        </button>
                        <button
                          onClick={() => {
                            setShowRegisterModal(true);
                            setIsMenuOpen(false);
                          }}
                          className="w-full px-4 py-2 text-sm font-medium text-slate-700 bg-white hover:bg-gray-50 
                          rounded-xl transition-all duration-200 text-left border border-gray-200"
                        >
                          注册
                        </button>
                      </div>
                    )}
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* 登录注册模态框 */}
      <Login isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
      <Register isOpen={showRegisterModal} onClose={() => setShowRegisterModal(false)} />
    </>
  );
}