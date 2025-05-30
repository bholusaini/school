import {  Link,Outlet} from "react-router-dom"
const Layout = () => {
 
  const Menu =[
    {
      icon:"line-chart-line",
      href:"/app/dashboard",
      label:"Dashboard"

    },

    {
      icon:"user-line",
      href:"/app/student",
      label:"Student"

    },
    {
      icon:"artboard-line",
      href:"/app/class",
      label:"Class"

    },
    {
      icon:"user-2-line",
      href:"/app/teacher",
      label:"Teacher"

    },
    {
      icon:"empathize-line",
      href:"/app/employees",
      label:"Employee"

    },
    {
      icon:"wallet-3-line",
      href:"/app/expenses",
      label:"Expenses"

    },
    {
      icon:"bookmark-line",
      href:"/app/subject",
      label:"Subject"

    },
    {
      icon:"bank-line",
      href:"/app/salaries",
      label:"Salaries"

    },
  
    {
      icon:"settings-2-line",
      href:"/app/Settings",
      label:"Settings"

    },
    
  ]
 
  return (
    <div className="min-h-screen  bg-gray-100">

        <aside className="  h-screen  fixed left-0 overflow-auto bg-linear-to-r from-purple-500 via-indigo-500 to-blue-500  " style={{width:"150px"}}>
            
             
             <div className=" w-[100px] flex flex-col  items-center gap-8 text-center ml-4 mt-4">

              {
                Menu.map((item,index)=>(

                  <Link to={item.href}  key={index} className="w-full  px-3 py-3 flex flex-col gap-1 items-center text-center rounded bg-gray-50 hover:bg-gray-200 " >  
                   <i className={`ri-${item.icon}`}></i>
                   <label>
                    {item.label}
                   </label>
                  </Link>
            
                ))
              }
      
             </div>
        
        </aside>

        <section className="h-screen  flex flex-col ml-[150px]" style={{width:`calc(100%-150px)`}}>
        <Outlet/>
        </section>

      
    </div>
  )
}

export default Layout