'use client'

import { useRouter } from "next/navigation";

const UserLogin =()=>{
    const route = useRouter();
    return(
        <div style={{background:"linear-gradient(135deg, #ec8b46ff 0%, #c92500c3 100%)",minHeight:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div className="login-container">
            <h1>User Login Page</h1>
            <p>Please enter your credentials to log in.</p>
            {/* <form> */}
            <div style={{display:'flex',justifyContent: 'center',flexDirection:'column',alignItems:'center'}}>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
                <button type="submit" onClick={()=>route.push('/unavbar')}>Login</button>
            </div>
            {/* </form> */}
        </div>
        </div>
    )
}
export default UserLogin;