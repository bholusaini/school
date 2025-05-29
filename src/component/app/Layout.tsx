import { Link,Outlet} from "react-router-dom"
import Card from "../shared/card"
const Layout = () => {
 

  return (
    <div className="min-h-screen  bg-gray-100">

        <aside className="  h-screen  fixed left-0 overflow-auto bg-linear-to-r from-purple-500 via-indigo-500 to-blue-500  " style={{width:"150px"}}>
            
             
             <div className="flex flex-col justify-center items-center gap-8 mt-4">

               <div  className="w-fit px-3 py-3 flex flex-col gap-1 justify-center items-center text-center rounded bg-gray-50 hover:bg-gray-200 ">
                <i className="ri-dashboard-line"></i>
                <Link to={"/app/dashboard" }  >Dashboard</Link>
              </div>
               <div  className="w-fit px-3 py-3 flex flex-col gap-1 justify-center items-center text-center rounded bg-gray-50 hover:bg-gray-200 ">
                <i className="ri-dashboard-line"></i>
                <Link to={"/app/student" }  >Student</Link>
              </div>
               <div  className="w-fit px-3 py-3 flex flex-col gap-1 justify-center items-center text-center rounded bg-gray-50 hover:bg-gray-200 ">
                <i className="ri-dashboard-line"></i>
                <Link to={"/app/class" }  >Class</Link>
              </div>
               <div  className="w-fit px-3 py-3 flex flex-col gap-1 justify-center items-center text-center rounded bg-gray-50 hover:bg-gray-200 ">
                <i className="ri-dashboard-line"></i>
                <Link to={"/dashboard" }  >Dashboard</Link>
              </div>
               <div  className="w-fit px-3 py-3 flex flex-col gap-1 justify-center items-center text-center rounded bg-gray-50 hover:bg-gray-200 ">
                <i className="ri-dashboard-line"></i>
                <Link to={"/dashboard" }  >Dashboard</Link>
              </div>
               <div  className="w-fit px-3 py-3 flex flex-col gap-1 justify-center items-center text-center rounded bg-gray-50 hover:bg-gray-200 ">
                <i className="ri-dashboard-line"></i>
                <Link to={"/dashboard" }  >Dashboard</Link>
              </div>
               <div  className="w-fit px-3 py-3 flex flex-col gap-1 justify-center items-center text-center rounded bg-gray-50 hover:bg-gray-200 ">
                <i className="ri-dashboard-line"></i>
                <Link to={"/dashboard" }  >Dashboard</Link>
              </div>
               <div  className="w-fit px-3 py-3 flex flex-col gap-1 justify-center items-center text-center rounded bg-gray-50 hover:bg-gray-200 ">
                <i className="ri-dashboard-line"></i>
                <Link to={"/dashboard" }  >Dashboard</Link>
              </div>
        
               
        
             </div>
        
        </aside>

        <section className="h-screen  flex flex-col ml-[150px]" style={{width:`calc(100%-150px)`}}>
        <Outlet/>
        </section>

      
    </div>
  )
}

export default Layout