import { Outlet } from "react-router-dom";
import Header from "../components/Header"

const root = () => {
    return(
     <div>
        <Header />
        <Outlet />
     </div>
    )
}

export default root;