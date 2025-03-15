import { createContext, useContext } from "react";
import { useState } from "react";
export const AuthContext=createContext();

export const AuthProvider=({children})=>{
const [token,setToken]=useState(localStorage.getItem('token'));

    const storeTokenInLs=(serverToken)=>{
       return localStorage.setItem("token",serverToken);
    }

    //tackling Logout functionality
    let isLoggedIn=!!token;

    const LogoutUser=()=>{
        setToken("");
        return localStorage.removeItem("token");
    }

    return(
        <AuthContext.Provider value={ {isLoggedIn,storeTokenInLs,LogoutUser} }>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth=()=>{
    const authContextValue= useContext(AuthContext);
    if(!authContextValue){
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return authContextValue;
}
