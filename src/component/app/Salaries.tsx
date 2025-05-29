
import { useState } from "react"
import Button from "../shared/button"
import Card from "../shared/card"
import Drawer from "../shared/drawer"
import IconButton from "../shared/iconButton"
import Form from "../shared/form"
import Input from "../shared/input"
import { useLocation } from "react-router-dom"

const Salaries = () => {
    const [open,setOpen] =useState(false)
    const {pathname} = useLocation()

    const getPathname = (path:string)=>{
           const fristPath = path.split("/").pop()
          
           return fristPath
    }
  return (
    <>
        <div className="p-4">
            <Card >
                <div className="flex justify-between">
                    <div  className="flex justify-center items-center gap-2 ">
                     <IconButton icon="arrow-left-fill"/>
                     <label>{getPathname(pathname)}</label>
                    </div>
                    <div>
                        <Button onClick={()=>setOpen(!open)}> + Add Salary</Button>
                    </div>
                </div>

            </Card>
         </div>

       
         <Drawer 
            title="New Salary" 
            open={open}
            onClose={()=>setOpen(false)}
        >
          <Form className="grid grid-cols-2 gap-4">
           
           <div className="flex flex-col gap-2 "> 
             <label >Employee</label>
                <Input name="employee" type="text" placeholder=" bksarswal"/>
           </div>

           <div className="flex flex-col gap-2 "> 
             <label >Salary</label>
                <Input name="salary" type="number" placeholder="0.00"/>
           </div>

           <div className="flex flex-col gap-2 "> 
             <label >Description</label>
                <Input name="description" type="text"/>
                
           </div>

           <div className="flex flex-col gap-2 "> 
             <label >Date</label>

                <Input name="date" type="date"/>
           </div>
          
           
           <div className="w-fit"><Button type="danger"> Add Now</Button></div>
           
          </Form>
        </Drawer>


        <div className="p-4"> 
            <Card>
              <div> 
                <table className="w-full">
                    <thead >
                      <tr className=" bg-gray-200 "> 
                         <th className=" text-center py-2">Employee</th>
                        <th className="text-center">Description</th>
                        <th className="text-center">Salary</th>
                        <th className="text-center">Date</th>
                        <th className="text-center">Action</th></tr>
                    </thead>
                    <tbody >
                        
                        <tr className="border-b border-b-zinc-200 ">
                            <td className=" text-center ">bksarswal</td>
                            <td className="text-center">My  salaries</td>
                            <td className="text-center">₹40000</td>
                            <td className="text-center">June 2, 2025 10:00 Am</td>
                            <td className="flex justify-center text-center gap-2 py-2 ">
                                <IconButton type="success" icon="edit-line"/>
                                <IconButton type="danger" icon="delete-bin-line"/>
                            </td>
                        </tr>
                        <tr className="border-b border-b-zinc-200 ">
                            <td className=" text-center ">bksarswal</td>
                            <td className="text-center">My  salaries</td>
                            <td className="text-center">₹40000</td>
                            <td className="text-center">June 2, 2025 10:00 Am</td>
                            <td className="flex justify-center text-center gap-2 py-2 ">
                                <IconButton type="success" icon="edit-line"/>
                                <IconButton type="danger" icon="delete-bin-line"/>
                            </td>
                        </tr>
                        <tr className="border-b border-b-zinc-200 ">
                            <td className=" text-center ">bksarswal</td>
                            <td className="text-center">My  salaries</td>
                            <td className="text-center">₹40000</td>
                            <td className="text-center">June 2, 2025 10:00 Am</td>
                            <td className="flex justify-center text-center gap-2 py-2 ">
                                <IconButton type="success" icon="edit-line"/>
                                <IconButton type="danger" icon="delete-bin-line"/>
                            </td>
                        </tr>
                        <tr className="border-b border-b-zinc-200 ">
                            <td className=" text-center ">bksarswal</td>
                            <td className="text-center">My  salaries</td>
                            <td className="text-center">₹40000</td>
                            <td className="text-center">June 2, 2025 10:00 Am</td>
                            <td className="flex justify-center text-center gap-2 py-2 ">
                                <IconButton type="success" icon="edit-line"/>
                                <IconButton type="danger" icon="delete-bin-line"/>
                            </td>
                        </tr>
                        <tr className="border-b border-b-zinc-200 ">
                            <td className=" text-center ">bksarswal</td>
                            <td className="text-center">My  salaries</td>
                            <td className="text-center">₹40000</td>
                            <td className="text-center">June 2, 2025 10:00 Am</td>
                            <td className="flex justify-center text-center gap-2 py-2 ">
                                <IconButton type="success" icon="edit-line"/>
                                <IconButton type="danger" icon="delete-bin-line"/>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
              </div>
            </Card>
        </div>
    </>
  )
}

export default Salaries