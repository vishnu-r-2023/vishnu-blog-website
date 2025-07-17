'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import AdminProductCards from '@/app/components/AdminProductCards';
const AdminNavbar = () => {
  const route = useRouter();
  return (
    <>
    <div className="header">
      <div className="logo">
        <img src={"logo.png"} alt="Website Logo" />
        <span>Admin's Website</span>
      </div>
      <nav>
        <p onClick={()=>route.push("/home")}>Admin Home</p>
        <p onClick={()=>route.push("/createblog")}>Create a Blog</p>
        <p onClick={()=>route.push("/listofblog")}>List of Blog</p>
        <p onClick={()=>route.push("/updateblog")}>Update a Blog</p>
        <p onClick={()=>route.push("/adminlogin")}>Admin Login</p>
      </nav>
    </div>
    <AdminProductCards />
    </>
  );
};

export default AdminNavbar;
