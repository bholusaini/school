import { Link } from "react-router-dom"
import Card from "../shared/card"
import Button from "../shared/button"
import Avatar from "../shared/avatar"
import logo from "../../assets/student.png"


const Layout = () => {
  return (
    <div className="min-h-screen  bg-gray-100">

        <aside className="  h-screen  fixed left-0 overflow-auto bg-linear-to-r from-purple-500 via-indigo-500 to-blue-500  " style={{width:"150px"}}>
            
             
             <div className="flex flex-col justify-center items-center gap-8 mt-4">

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
                     <label>Students</label>
                  </div>
                     
                     <div className="flex bg-rose-300 hover:bg-rose-500 rounded px-3 py-2">
                       <i className="ri-add-fill"></i>
                         Admition
                     </div>
                    
                </div>
             </Card>
           </div>

            
        <div className="p-4 mt-18 ">
          <div className=" min-h-screen grid grid-cols-4 gap-2  p-4 bg-white rounded">
          
            <Card >
              <div className="flex flex-col gap-2">
                 
                 <div className="w-full flex justify-center">
                   <div className="flex w-[100px] h-[100px] rounded-full border-3 border-amber-200 justify-center " >
                    <Avatar image={logo} size="lg"></Avatar>
                   </div> 
                 </div>

                  <div className="flex flex-col gap-1 items-center"> 
                    <h1 className="text-xl  font-bold">bksarswal</h1>
                    <label >bksarswal@gmail.com</label>
                    <label >7092428976</label>
                  </div>

                 <div className="flex justify-between">
                   <Button type="secondary">Class-6</Button>
                   <Button type="danger">Roll-12</Button>
                </div>

              </div>
            </Card>
           
            <Card >
              <div className="flex flex-col gap-2">
                 
                 <div className="w-full flex justify-center">
                   <div className="flex w-[100px] h-[100px] rounded-full border-3 border-amber-200 justify-center " >
                    <Avatar image={logo} size="lg"></Avatar>
                   </div> 
                 </div>

                  <div className="flex flex-col gap-1 items-center"> 
                    <h1 className="text-xl  font-bold">bksarswal</h1>
                    <label >bksarswal@gmail.com</label>
                    <label >7092428976</label>
                  </div>

                 <div className="flex justify-between">
                   <Button type="secondary">Class-6</Button>
                   <Button type="danger">Roll-12</Button>
                </div>

              </div>
            </Card>
           
            <Card >
              <div className="flex flex-col gap-2">
                 
                 <div className="w-full flex justify-center">
                   <div className="flex w-[100px] h-[100px] rounded-full border-3 border-amber-200 justify-center " >
                    <Avatar image={logo} size="lg"></Avatar>
                   </div> 
                 </div>

                  <div className="flex flex-col gap-1 items-center"> 
                    <h1 className="text-xl  font-bold">bksarswal</h1>
                    <label >bksarswal@gmail.com</label>
                    <label >7092428976</label>
                  </div>

                 <div className="flex justify-between">
                   <Button type="secondary">Class-6</Button>
                   <Button type="danger">Roll-12</Button>
                </div>

              </div>
            </Card>
           
            <Card >
              <div className="flex flex-col gap-2">
                 
                 <div className="w-full flex justify-center">
                   <div className="flex w-[100px] h-[100px] rounded-full border-3 border-amber-200 justify-center " >
                    <Avatar image={logo} size="lg"></Avatar>
                   </div> 
                 </div>

                  <div className="flex flex-col gap-1 items-center"> 
                    <h1 className="text-xl  font-bold">bksarswal</h1>
                    <label >bksarswal@gmail.com</label>
                    <label >7092428976</label>
                  </div>

                 <div className="flex justify-between">
                   <Button type="secondary">Class-6</Button>
                   <Button type="danger">Roll-12</Button>
                </div>

              </div>
            </Card>
           
            <Card >
              <div className="flex flex-col gap-2">
                 
                 <div className="w-full flex justify-center">
                   <div className="flex w-[100px] h-[100px] rounded-full border-3 border-amber-200 justify-center " >
                    <Avatar image={logo} size="lg"></Avatar>
                   </div> 
                 </div>

                  <div className="flex flex-col gap-1 items-center"> 
                    <h1 className="text-xl  font-bold">bksarswal</h1>
                    <label >bksarswal@gmail.com</label>
                    <label >7092428976</label>
                  </div>

                 <div className="flex justify-between">
                   <Button type="secondary">Class-6</Button>
                   <Button type="danger">Roll-12</Button>
                </div>

              </div>
            </Card>
           
            <Card >
              <div className="flex flex-col gap-2">
                 
                 <div className="w-full flex justify-center">
                   <div className="flex w-[100px] h-[100px] rounded-full border-3 border-amber-200 justify-center " >
                    <Avatar image={logo} size="lg"></Avatar>
                   </div> 
                 </div>

                  <div className="flex flex-col gap-1 items-center"> 
                    <h1 className="text-xl  font-bold">bksarswal</h1>
                    <label >bksarswal@gmail.com</label>
                    <label >7092428976</label>
                  </div>

                 <div className="flex justify-between">
                   <Button type="secondary">Class-6</Button>
                   <Button type="danger">Roll-12</Button>
                </div>

              </div>
            </Card>
           
            <Card >
              <div className="flex flex-col gap-2">
                 
                 <div className="w-full flex justify-center">
                   <div className="flex w-[100px] h-[100px] rounded-full border-3 border-amber-200 justify-center " >
                    <Avatar image={logo} size="lg"></Avatar>
                   </div> 
                 </div>

                  <div className="flex flex-col gap-1 items-center"> 
                    <h1 className="text-xl  font-bold">bksarswal</h1>
                    <label >bksarswal@gmail.com</label>
                    <label >7092428976</label>
                  </div>

                 <div className="flex justify-between">
                   <Button type="secondary">Class-6</Button>
                   <Button type="danger">Roll-12</Button>
                </div>

              </div>
            </Card>
           
            <Card >
              <div className="flex flex-col gap-2">
                 
                 <div className="w-full flex justify-center">
                   <div className="flex w-[100px] h-[100px] rounded-full border-3 border-amber-200 justify-center " >
                    <Avatar image={logo} size="lg"></Avatar>
                   </div> 
                 </div>

                  <div className="flex flex-col gap-1 items-center"> 
                    <h1 className="text-xl  font-bold">bksarswal</h1>
                    <label >bksarswal@gmail.com</label>
                    <label >7092428976</label>
                  </div>

                 <div className="flex justify-between">
                   <Button type="secondary">Class-6</Button>
                   <Button type="danger">Roll-12</Button>
                </div>

              </div>
            </Card>
           
            <Card >
              <div className="flex flex-col gap-2">
                 
                 <div className="w-full flex justify-center">
                   <div className="flex w-[100px] h-[100px] rounded-full border-3 border-amber-200 justify-center " >
                    <Avatar image={logo} size="lg"></Avatar>
                   </div> 
                 </div>

                  <div className="flex flex-col gap-1 items-center"> 
                    <h1 className="text-xl  font-bold">bksarswal</h1>
                    <label >bksarswal@gmail.com</label>
                    <label >7092428976</label>
                  </div>

                 <div className="flex justify-between">
                   <Button type="secondary">Class-6</Button>
                   <Button type="danger">Roll-12</Button>
                </div>

              </div>
            </Card>
           
            <Card >
              <div className="flex flex-col gap-2">
                 
                 <div className="w-full flex justify-center">
                   <div className="flex w-[100px] h-[100px] rounded-full border-3 border-amber-200 justify-center " >
                    <Avatar image={logo} size="lg"></Avatar>
                   </div> 
                 </div>

                  <div className="flex flex-col gap-1 items-center"> 
                    <h1 className="text-xl  font-bold">bksarswal</h1>
                    <label >bksarswal@gmail.com</label>
                    <label >7092428976</label>
                  </div>

                 <div className="flex justify-between">
                   <Button type="secondary">Class-6</Button>
                   <Button type="danger">Roll-12</Button>
                </div>

              </div>
            </Card>
           
            <Card >
              <div className="flex flex-col gap-2">
                 
                 <div className="w-full flex justify-center">
                   <div className="flex w-[100px] h-[100px] rounded-full border-3 border-amber-200 justify-center " >
                    <Avatar image={logo} size="lg"></Avatar>
                   </div> 
                 </div>

                  <div className="flex flex-col gap-1 items-center"> 
                    <h1 className="text-xl  font-bold">bksarswal</h1>
                    <label >bksarswal@gmail.com</label>
                    <label >7092428976</label>
                  </div>

                 <div className="flex justify-between">
                   <Button type="secondary">Class-6</Button>
                   <Button type="danger">Roll-12</Button>
                </div>

              </div>
            </Card>
           
            
          </div>
        </div>
        </section>

      
    </div>
  )
}

export default Layout