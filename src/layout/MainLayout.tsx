import Header from "@/components/homeComponents/header/Header"
import Footer from "@/components/productComponents/Footer"
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