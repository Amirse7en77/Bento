import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-800 via-slate-900 to-black text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-2 md:text-right lg:grid-cols-4">
          <div>
            <h3 className="mb-3 text-lg font-semibold text-white">یابنده ابزارهای هوش مصنوعی</h3> {/* AI Tool Finder */}
            <p className="text-sm">بهترین ابزارهای هوش مصنوعی را برای افزایش بهره‌وری خود کشف کنید.</p> {/* Discover the best AI tools to supercharge your productivity. */}
          </div>
          <div>
            <h4 className="mb-3 font-semibold text-white">پیوندهای سریع</h4> {/* Quick Links */}
            <ul className="space-y-2 text-sm">
              <li><a className="hover:text-white hover:underline" href="#">درباره ما</a></li> {/* About Us */}
              <li><a className="hover:text-white hover:underline" href="#">تماس</a></li> {/* Contact */}
              <li><a className="hover:text-white hover:underline" href="#">وبلاگ</a></li> {/* Blog */}
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-semibold text-white">حقوقی</h4> {/* Legal */}
            <ul className="space-y-2 text-sm">
              <li><a className="hover:text-white hover:underline" href="#">سیاست حفظ حریم خصوصی</a></li> {/* Privacy Policy */}
              <li><a className="hover:text-white hover:underline" href="#">شرایط خدمات</a></li> {/* Terms of Service */}
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-semibold text-white">ارتباط با ما</h4> {/* Connect */}
            <div className="flex justify-center gap-4 md:justify-end">
              <a className="text-slate-400 hover:text-white" href="#" aria-label="Facebook">
                <svg aria-hidden="true" className="size-6" fill="currentColor" viewBox="0 0 24 24">
                  <path clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12Z" fillRule="evenodd"></path>
                </svg>
              </a>
              <a className="text-slate-400 hover:text-white" href="#" aria-label="Twitter">
                <svg aria-hidden="true" className="size-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a className="text-slate-400 hover:text-white" href="#" aria-label="LinkedIn">
                <svg aria-hidden="true" className="size-6" fill="currentColor" viewBox="0 0 24 24">
                  <path clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12.011c0 4.07.228 5.34.652 6.612.395 1.155.916 2.067 1.83 2.981.913.915 1.826 1.436 2.981 1.83C8.73 23.772 9.93 24 12 24c2.072 0 3.27-.228 4.539-.652 1.155-.395 2.067-.916 2.981-1.83.915-.913 1.436-1.826 1.83-2.981.424-1.272.652-2.542.652-6.612C22 6.477 17.523 2 12 2Zm6.023 7.473a.62.62 0 0 1-.046.778l-.003.002-.895.894a.586.586 0 0 1-.828 0l-1.906-1.905a.584.584 0 1 0-.828.828l1.905 1.906a.586.586 0 0 1 0 .828l-.894.895-.002.003a.62.62 0 0 1-.778.046l-1.007-.576a.625.625 0 0 1-.313-.539V9.016a.625.625 0 0 1 .938-.54l1.006-.576a.62.62 0 0 1 .778.046l.003.002.895.894a.586.586 0 0 1 0 .828l-1.906 1.905a.584.584 0 1 0 .828.828l1.905-1.906a.586.586 0 0 1 .828 0l.894.895.002.003c.21.21.27.52.157.79Z" fillRule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-10 border-t border-slate-700 pt-8 text-center text-sm">
            <p>© 2024 یابنده ابزارهای هوش مصنوعی. کلیه حقوق محفوظ است. طراحی شده با عشق.</p> {/* © 2024 AI Tool Finder. All rights reserved. Designed with passion. */}
          </div>
        </div>
        </div>
      </footer>
  );
};

export default Footer;