import Header from "@/components/common/Header"
import Footer from "@/components/common/Footer"
import { Outlet } from "react-router-dom"


const MainLayout = () => {
  return (
    <>
    <Header/>
    <div>
        <Outlet/>
    </div>
    <Footer/>
    </>
  )
}

export default MainLayout