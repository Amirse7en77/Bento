import HeroSection from "./../components/homeComponents/heroSection/HeroSection";

import ToolGrid from "./../components/homeComponents/toolGrid/ToolGrid";

import { useSelector } from "react-redux";
import type { RootState } from "./../store/store";
import Sidebar from "./../components/homeComponents/sideBar/SideBar";

const Home = () => {
  const isDrawerOpen = useSelector((state: RootState) => state.drawer.isOpen);

  return (
    <>
      <div className="relative ">
        {isDrawerOpen && (
          <div className="absolute  h-full w-[80%] bg-white shadow-lg z-20 block md:hidden ">
            {" "}
            {/* Example styling for sidebar */}
            <Sidebar />
          </div>
        )}
      </div>
      <div className="layout-container flex h-full grow flex-col dark:bg-gray-900 duration-1000 transition-colors">
        <div className="flex flex-1">
          <main className="flex-1 p-6">
            <HeroSection />
            <div className="flex justify-around ">
              <div className="hidden md:block">
                <Sidebar />
              </div>
              <ToolGrid />
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;
