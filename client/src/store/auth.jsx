import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
export const AuthContext=createContext();

export const AuthProvider=({children})=>{
const [token,setToken]=useState(localStorage.getItem('token'));
const [user,setUser]=useState('');
const [services,setServices]=useState([]);

    const storeTokenInLs=(serverToken)=>{
        setToken(serverToken);
       return localStorage.setItem("token",serverToken);
    }

    //tackling Logout functionality
    let isLoggedIn=!!token;

    const LogoutUser=()=>{
        setToken("");
        return localStorage.removeItem("token");
    }

    //JWT Authenticatin - to get the currently logged in userdata
    const userAuthentication= async()=>{
        try{
            const response = await fetch('http://localhost:5000/api/auth/user',{
                method:'GET',
                headers:{
                    "Authorization" : `Bearer ${token}`,
                },
            });
            
            if(response.ok){
                const data = await response.json();
                setUser(data.userData);
            }
        }
        catch(err)
        {
            console.error("Error fetching user data");
        }
    }

     useEffect(()=>{
        userAuthentication()
     },[]);

    //Fetching services
    const fetchServices = async () => {
        try{
            const response = await fetch('http://localhost:5000/api/data/service',{
                method:'GET',
            })
            const data = await response.json();
            if (Array.isArray(data.message)) {
                setServices(data.message);
            } else {
                console.error("Invalid services data format:", data.message);
                setServices([]);
            }
        }
        catch(err){
            console.error("Error fetching services : ",err);
        }
    }

    useEffect(()=>{
        fetchServices()
     },[]);
     
    return(
        <AuthContext.Provider value={ {isLoggedIn,storeTokenInLs,LogoutUser,user,services} }>
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
