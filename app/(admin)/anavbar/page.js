'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import AdminProductCards from '@/app/components/AdminProductCards';
import Image from 'next/image';

const AdminNavbar = () => {
  const route = useRouter();
  return (
    <>
      <div className="header">
        <div className="logo">
          <Image src="/logo.png" alt="Website Logo" width={40} height={40} />
          <span>Admin&apos;s Website</span>
        </div>
        <nav>
          <p onClick={() => route.push("/home")}>Admin Home</p>
          <p onClick={() => route.push("/createblog")}>Create a Blog</p>
          <p onClick={() => route.push("/listofblog")}>List of Blog</p>
          <p onClick={() => route.push("/updateblog")}>Update a Blog</p>
          <p onClick={() => route.push("/adminlogin")}>Admin Login</p>
        </nav>
      </div>
      <AdminProductCards />
    </>
  );
};

export default AdminNavbar;
