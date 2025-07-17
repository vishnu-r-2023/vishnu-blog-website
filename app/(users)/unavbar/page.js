'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import ProductCards from '@/app/components/ProductCards';
const UserNavbar = () => {
  const route = useRouter();
  return (
    <>
    <div className="header">
      <div className="logo">
        <img src={"logo.png"} alt="Website Logo" />
        <span>User's Website</span>
      </div>
      <nav>
        <p onClick={()=>route.push("/")}>User Home</p>
        <p onClick={()=>route.push("/help")}>Help Center</p>
        <p onClick={()=>route.push("/search")}>Search Feed</p>
        <p onClick={()=>route.push("/cart")}>Cart</p>
        <p onClick={()=>route.push("/userlogin")}>Login</p>
      </nav>
    </div>
    <ProductCards />
    </>
  );
};

export default UserNavbar;
