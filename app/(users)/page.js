'use client'

import { useRouter } from "next/navigation";
import ProductCards from "../components/ProductCards";
import UserNavbar from "./unavbar/page";

const UserPage =()=>{
    const route = useRouter();
    return(
        <div className="main-container">
        <UserNavbar />
        </div>
    )
}
export default UserPage;