import { useContext, useEffect } from "react"
import { Outlet, Navigate } from "react-router-dom"
import HttpInterceptor from "./lib/HttpInterceptor"
import Context from "./Context"

const Guard = ()=>{
    const {session, setSession} = useContext(Context)

    useEffect(()=>{
        getSession()
    },[])

    const getSession= async()=>{
        try{
            const {data} = await HttpInterceptor.get("/auth/session")
            setSession(data)
        }
        catch(err)
        {
            setSession(false)
        }
    }

    if(session === null)
        return null

    if(session === false)
        return <Navigate to="/login" />

    return <Outlet />


}

export default Guard