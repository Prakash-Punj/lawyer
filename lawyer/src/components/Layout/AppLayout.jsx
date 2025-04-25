import { Outlet } from "react-router-dom"
import { Footer } from "../UI/Footer"
import { Header } from "../UI/Header"
import { UpperHeader } from "../UI/UpperHeader"

export const AppLayout = () => {
    return(
        <div className="layout">
            <UpperHeader />
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}