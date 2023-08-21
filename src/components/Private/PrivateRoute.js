import { Outlet, Navigate } from 'react-router-dom'
import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";

const PrivateRoutes = () => {
    const [authUser, setAuthUser] = useState(null);
    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
          if (user) {
            setAuthUser(user);
          } else {
            setAuthUser(null);
          }
        });
    
        return () => {
          listen();
        };
      }, []);
    
    return(
     
        <div>
      {authUser ? (
        <>
          <Outlet/> 
        </>
      ) : (
        <Navigate to="/404"/>
      )}
    </div>
           
      
          
    )
}

export default PrivateRoutes