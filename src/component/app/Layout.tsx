import { Link, useLocation ,Outlet} from "react-router-dom"
import Card from "../shared/card"
const Layout = () => {
 const {pathname} = useLocation()
  const getPathname = (path:string)=>{
    const fristPath = path.split('/').pop()
    const finalPath = fristPath?.split("-").join(" ")
    return finalPath
  }

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
               <div  className="w-fit px-3 py-3 flex flex-col gap-1 justify-center items-center text-center rounded bg-gray-50 hover:bg-gray-200 ">
                <i className="ri-dashboard-line"></i>
                <Link to={"/dashboard" }  >Dashboard</Link>
              </div>
        
               
        
             </div>
        
        </aside>

        <section className="h-screen  flex flex-col ml-[150px]" style={{width:`calc(100%-150px)`}}>
           <div className="h-2 p-4">
             <Card>
                <div className="flex justify-between">
                  <div>
                     <i className="ri-arrow-left-line"></i>
                     <label>{getPathname(pathname)}</label>
                  </div>
                     
                     <div className="flex bg-rose-300 hover:bg-rose-500 rounded px-3 py-2">
                       <i className="ri-add-fill"></i>
                         Admition
                     </div>
                    
                </div>
             </Card>
           </div>

            
        <div className="p-4 mt-18 ">
         <Outlet/>
        </div>
        </section>

      
    </div>
  )
}

export default Layout