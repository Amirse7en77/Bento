import React from 'react';
import Header from './components/homeComponents/header/Header';
import Sidebar from './components/homeComponents/sideBar/SideBar';
import HeroSection from './components/homeComponents/heroSection/HeroSection';

import ToolGrid from './components/homeComponents/toolGrid/ToolGrid';
import Pagination from './components/homeComponents/pagination/Pagination';
import ToolDetail from './ToolDetail';

const App: React.FC = () => {
  return (
    // The dir="rtl" is set on the html tag in public/index.html,
    // so no need to repeat it here unless you want to dynamically control it.
    <>
    <div className="layout-container flex h-full grow flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <HeroSection />
          
          <h2 className="text-[#0d141c] text-2xl font-bold leading-tight tracking-[-0.015em] px-4 pb-4 pt-6">
            ابزارهای هوش مصنوعی ویژه
          </h2>
          <ToolGrid />
          <Pagination />
        </main>
      </div>
    </div>
    <ToolDetail />
    </>
  );
};

export default App;