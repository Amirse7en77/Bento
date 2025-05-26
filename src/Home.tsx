import Header from "./components/homeComponents/header/Header";

import HeroSection from "./components/homeComponents/heroSection/HeroSection";

import ToolGrid from "./components/homeComponents/toolGrid/ToolGrid";
import Pagination from "./components/homeComponents/pagination/Pagination";
import { useSelector } from "react-redux";
import type { RootState } from "./store/store";
import Sidebar from "./components/homeComponents/sideBar/Sidebar";



const Home = () => {
  const isDrawerOpen = useSelector((state: RootState) => state.drawer.isOpen);

  return (
    <>
      <div className="relative"> 
  

  {isDrawerOpen && (
    <div className="absolute  h-full w-[80%] bg-white shadow-lg z-20"> {/* Example styling for sidebar */}
      <Sidebar />
    </div>
  )}

  
</div>
      <div className="layout-container flex h-full grow flex-col ">
        

        <div className="flex flex-1">
          <main className="flex-1 p-6">
            <HeroSection />
            <div className="flex justify-around ">
              <div className="hidden md:block">
              <Sidebar />
            </div>
            <div >
              <h2 className="text-[#0d141c] text-2xl font-bold leading-tight tracking-[-0.015em] px-4 pb-4 pt-6">
                ابزارهای هوش مصنوعی ویژه
              </h2>

              <ToolGrid />
            </div>
            </div>
            <Pagination />
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;
