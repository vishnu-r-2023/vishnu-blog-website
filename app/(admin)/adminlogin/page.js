'use client'

import { useRouter } from "next/navigation";

const AdminLogin =()=>{
    const route = useRouter();
    return(
        <div style={{background:"linear-gradient(135deg, #888481ff 0%, #ba8377c3 100%)",minHeight:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div className="login-container">
            <h1>Admin Login Page</h1>
            <p>Please enter your credentials to log in.</p>
            {/* <form> */}
            <div style={{display:'flex',justifyContent: 'center',flexDirection:'column',alignItems:'center'}}>
                <label htmlFor="Adminname">Admin Name:</label>
                <input type="text" id="Adminname" name="Adminname" required />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
                <button className="admin-btn" type="submit" onClick={()=>route.push('/anavbar')}>Login</button>
            </div>
            {/* </form> */}
        </div>
        </div>
    )
}
export default AdminLogin;