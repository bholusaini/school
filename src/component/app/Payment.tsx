
import { useState } from "react"
import Button from "../shared/button"
import Card from "../shared/card"
import Drawer from "../shared/drawer"
import IconButton from "../shared/iconButton"
import Form from "../shared/form"
import Input from "../shared/input"
import { useLocation } from "react-router-dom"
import schoolLogo from "../../assets/school.png"

const Payment = () => {
    const [open,setOpen] =useState(false)
    const {pathname} = useLocation()
    const getPathname = (path:string)=>{
           const fristPath = path.split("/").pop()
          
           return fristPath
    }
  return (
    <>
        <div className="p-4">            
            <Card>
                <div className="flex flex-col items-center gap-2 ">
                    <img src={schoolLogo} alt="LOGO" className="w-[80px]" />
                    <h1 className=" font-semibold text-black">CodingOtt International School</h1>
                    <p>Make you child creative</p>
                    <small>www.codeschool.com</small>
                </div>
            </Card>
        </div>
        
        <div className="p-4">
            <Card >
                <div className="flex justify-between">
                    <div  className="flex justify-center items-center gap-2 ">
                        <IconButton icon="arrow-left-fill"/>
                        <label>{getPathname(pathname)}</label>
                    </div>
                    <div>
                        <Button onClick={()=>setOpen(!open)}> + Add Payment</Button>
                    </div>
                </div>

            </Card>
        </div>
        
        <Drawer 
            title="New Payment" 
            open={open}
            onClose={()=>setOpen(false)}
        >
            <Form className="grid grid-cols-2 gap-4">            
                <div className="flex flex-col gap-2 "> 
                    <label >Id</label>
                    <Input name="id" type="text" placeholder=" student id"/>
                </div>

                <div className="flex flex-col gap-2 "> 
                    <label >Student</label>
                    <Input name="student" type="text" placeholder="Bksarswal"/>
                </div>

                <div className="flex flex-col gap-2 "> 
                    <label >Fateher</label>
                    <Input name="Father" type="text"/>                    
                </div>

                <div className="flex flex-col gap-2 "> 
                    <label >Mobile</label>
                    <Input name="mobile" type="tel"/>                    
                </div>
                <div className="flex flex-col gap-2 "> 
                    <label >Status</label>
                    <Input name="Status" type="text"/>                    
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
                        <tr className=" bg-yellow-200 "> 
                            <th className=" text-center py-2">Id</th>
                            <th className="text-center">Student</th>
                            <th className="text-center">Father's Name</th>
                            <th className="text-center">Mobile</th>
                            <th className="text-center">Status</th>
                            <th className="text-center">Date</th>
                        </tr>
                    </thead>
                    <tbody className="space-y-2">
                        
                        {

                            Array(12).fill("bk").map(()=>(
                                <tr className="border-b border-b-zinc-200 ">
                                    <td className=" text-center ">SdfsFS</td>
                                    <td className=" text-center  py-2 ">
                                        <div className=" flex justify-center items-center gap-0.5">                              
                                            <img src={schoolLogo} alt="student " className="rounded-full w-13"/>
                                            <div className="flex flex-col items-center gap-0.5">
                                                <h1 className="text-black font-semibold text-xl">Bksarswal</h1>
                                                <small className="text-zinc-400">Class -B</small>                            
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-center">Father</td>
                                    <td className="text-center">99999999</td>
                                    <td className="text-center "> <small className="bg-green-300 rounded px-1">paid</small></td>
                                    <td className="text-center">June 2, 2025 </td>                            
                                </tr>                    
                            ))
                        }                                       
                                          
                    </tbody>
                </table>
                </div>
            </Card>
        </div>
    </>
  )
}

export default Payment