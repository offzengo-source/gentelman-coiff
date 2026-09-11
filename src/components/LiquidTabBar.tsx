import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Home, Scissors, Image as ImageIcon, Star, Phone } from 'lucide-react';
import { NavTabId } from '../types';

interface NavItem {
  id: NavTabId;
  label: string;
  icon: typeof Home;
  targetId: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'hero', label: 'Accueil', icon: Home, targetId: 'hero' },
  { id: 'services', label: 'Services', icon: Scissors, targetId: 'services' },
  { id: 'galerie', label: 'Galerie', icon: ImageIcon, targetId: 'galerie' },
  { id: 'avis', label: 'Avis', icon: Star, targetId: 'avis' },
  { id: 'contact', label: 'Contact', icon: Phone, targetId: 'contact' },
];

export default function LiquidTabBar() {
  const [activeTab, setActiveTab] = useState<NavTabId>('hero');

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const item = NAV_ITEMS[i];
        const element = document.getElementById(item.targetId);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveTab(item.id);
            return;
          }
        }
      }
      setActiveTab('hero');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (targetId: string, tabId: NavTabId) => {
    setActiveTab(tabId);
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = window.innerWidth >= 768 ? 90 : 20;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* DESKTOP STICKY TOP NAVBAR */}
      <header
        id="desktop-navbar"
        className="hidden md:flex fixed top-5 left-1/2 -translate-x-1/2 z-50 items-center justify-between px-6 py-3 rounded-full glass-panel shadow-2xl shadow-black/70 border border-[#d4af37]/25 w-[92%] max-w-4xl"
      >
        {/* Salon Brand */}
        <button
          onClick={() => scrollToSection('hero', 'hero')}
          className="flex items-center gap-3 text-left group cursor-pointer"
        >
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#d4af37] via-[#aa8214] to-[#42320b] p-[1px] flex items-center justify-center shadow-md">
            <div className="w-full h-full rounded-full bg-[#0c0d12] flex items-center justify-center group-hover:bg-[#1a1c24] transition-colors">
              <span className="font-luxury text-sm font-bold text-[#f3e5ab]">G</span>
            </div>
          </div>
          <div>
            <span className="font-luxury font-bold text-base text-[#f5f2eb] tracking-wider block group-hover:text-[#d4af37] transition-colors">
              GENTLEMAN COIF
            </span>
            <span className="text-[10px] text-[#c5a059] uppercase tracking-widest font-medium block">
              Barbershop Tunis
            </span>
          </div>
        </button>

        {/* Liquid Desktop Tabs */}
        <nav className="flex items-center gap-1 bg-[#0c0d12]/80 p-1.5 rounded-full border border-white/5 relative">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                id={`desktop-tab-${item.id}`}
                onClick={() => scrollToSection(item.targetId, item.id)}
                className={`relative px-4 py-2 rounded-full text-xs font-medium transition-colors duration-200 cursor-pointer flex items-center gap-2 z-10 select-none ${
                  isActive ? 'text-[#0c0d12] font-semibold' : 'text-[#d1c7bd] hover:text-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>

                {isActive && (
                  <motion.div
                    layoutId="desktopActiveTabIndicator"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#aa8214] shadow-md shadow-[#d4af37]/30"
                    style={{ zIndex: -1 }}
                    transition={{
                      type: 'spring',
                      stiffness: 420,
                      damping: 32,
                    }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Call Quick Action */}
        <a
          href="tel:52961481"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#d4af37]/20 to-[#aa8214]/30 hover:from-[#d4af37] hover:to-[#aa8214] text-[#f3e5ab] hover:text-[#0c0d12] text-xs font-semibold border border-[#d4af37]/40 transition-all duration-300 shadow-sm"
        >
          <Phone className="w-3.5 h-3.5 fill-current" />
          <span>52 961 481</span>
        </a>
      </header>

      {/* MOBILE FIXED BOTTOM LIQUID TAB BAR */}
      <div
        id="mobile-bottom-tabbar-container"
        className="md:hidden fixed bottom-4 left-0 right-0 z-50 flex justify-center px-3 pointer-events-none"
      >
        <nav
          id="mobile-liquid-tabbar"
          className="pointer-events-auto flex items-center justify-around w-full max-w-md px-2 py-2 rounded-2xl glass-panel shadow-2xl shadow-black/90 border border-[#d4af37]/30 bg-[#0c0d12]/90 backdrop-blur-xl"
        >
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                id={`mobile-tab-${item.id}`}
                onClick={() => scrollToSection(item.targetId, item.id)}
                className={`relative flex flex-col items-center justify-center flex-1 py-1.5 px-1 min-h-[52px] rounded-xl transition-all duration-200 cursor-pointer ${
                  isActive ? 'text-[#f3e5ab]' : 'text-[#8e94a5] hover:text-[#e8dfd8]'
                }`}
              >
                {/* Active Liquid Pill with Spring Animation */}
                {isActive && (
                  <motion.div
                    layoutId="mobileActiveTabIndicator"
                    className="absolute inset-x-1 inset-y-0 rounded-xl bg-gradient-to-b from-[#d4af37]/25 to-[#aa8214]/15 border border-[#d4af37]/40 shadow-inner shadow-[#d4af37]/20"
                    transition={{
                      type: 'spring',
                      stiffness: 450,
                      damping: 30,
                    }}
                  >
                    {/* Glowing morphing top droplet */}
                    <motion.div
                      layoutId="liquidGlowDot"
                      className="absolute -top-[3px] left-1/2 -translate-x-1/2 w-4 h-1 rounded-full bg-[#f3e5ab] shadow-[0_0_8px_#d4af37]"
                      transition={{
                        type: 'spring',
                        stiffness: 500,
                        damping: 25,
                      }}
                    />
                  </motion.div>
                )}

                <Icon
                  className={`w-5 h-5 transition-transform duration-200 relative z-10 ${
                    isActive ? 'scale-110 text-[#f3e5ab]' : 'text-[#8e94a5]'
                  }`}
                />
                <span
                  className={`text-[10px] tracking-wide mt-1 relative z-10 font-medium ${
                    isActive ? 'font-bold text-[#f3e5ab]' : 'text-[#8e94a5]'
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>
      </div>
    </>
  );
}
