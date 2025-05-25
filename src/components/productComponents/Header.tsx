import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="layout-container mx-auto flex h-full max-w-7xl flex-col px-4">
        <div className="flex items-center justify-between whitespace-nowrap py-4">
          <a className="text-2xl font-bold text-slate-800" href="#">
            یابنده ابزارهای هوش مصنوعی
          </a> {/* AI Tool Finder */}
          <nav className="flex items-center gap-4">
            <a className="text-slate-600 hover:text-slate-800" href="#">
              کشف کنید
            </a> {/* Discover */}
            <a className="text-slate-600 hover:text-slate-800" href="#">
              ثبت ابزار
            </a> {/* Submit Tool */}
            <button className="flex items-center justify-center rounded-md bg-slate-800 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700">
              ورود
            </button> {/* Sign In */}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;