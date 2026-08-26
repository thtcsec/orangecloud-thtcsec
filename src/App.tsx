import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Community } from './components/Community';
import { Career } from './components/Career';
import { Skills } from './components/Skills';
import { Mentor } from './components/Mentor';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [lang, setLang] = useState<'vi' | 'en'>(() => {
    const saved = localStorage.getItem('pref_lang');
    return (saved === 'en' || saved === 'vi') ? saved : 'vi';
  });

  const handleSetLang = (newLang: 'vi' | 'en') => {
    setLang(newLang);
    localStorage.setItem('pref_lang', newLang);
    document.documentElement.lang = newLang;
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="min-h-screen bg-[#0b0f19] text-[#e2e8f0] font-sans selection:bg-[#F38020]/30 selection:text-[#FFA940]">
      <Navbar lang={lang} setLang={handleSetLang} />
      <main>
        <Hero lang={lang} />
        <About lang={lang} />
        <Projects lang={lang} />
        <Community lang={lang} />
        <Career lang={lang} />
        <Skills lang={lang} />
        <Mentor lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
};

export default App;
