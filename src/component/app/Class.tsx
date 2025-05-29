import { useState } from "react"
import Button from "../shared/button"
import Card from "../shared/card"
import Drawer from "../shared/drawer"
import IconButton from "../shared/iconButton"
import Form from "../shared/form"
import Input from "../shared/input"
import { useLocation } from "react-router-dom"

const Class = () => {
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
                        <Button onClick={()=>setOpen(!open)}> + New Class</Button>
                    </div>
                </div>

            </Card>
        </div>

       
         <Drawer 
            title="Add a new class" 
            open={open}
            onClose={()=>setOpen(false)}
        >
          <Form className="grid grid-cols-2 gap-4">
           
           <div className="flex flex-col gap-2 "> 
             <label >Class</label>
                <Input name="class" type="text" placeholder="class"/>
           </div>

           <div className="flex flex-col gap-2 "> 
             <label >Fee</label>
                <Input name="fee" type="number" placeholder="10000"/>
           </div>
           <div className="flex flex-col gap-2 "> 
             <label >Class Teacher's</label>
               <select className=" border border-gray-200 px-3 py-2"> 
                 <option>Er.Saurav</option>
                 <option>Er.Saurav</option>
                 <option>Er.Saurav</option>
                 <option>Er.Saurav</option>
                 <option>Er.Saurav</option>
               </select>
           </div>
        
           <div className="flex flex-col gap-2 "> 
             <label >Sections's</label>
             <Input name="section" type="text" placeholder="A,B,C,D" />
           </div>
           
           <div className="w-fit"><Button type="danger"> Add Now</Button></div>
           
          </Form>
        </Drawer>


        <div className="p-4"> 
            <Card>
            <div className="grid grid-cols-4 gap-8 ">
                <Card>
                <div className="flex flex-col items-center gap-2">
                    <div className="bg-purple-600 p-6 rounded-b-md text-white text-2xl font-bold">kg</div>
                <div className="flex justify-center items-center gap-4">
                        <IconButton type="success" icon="edit-line"/>
                        <IconButton type="danger" icon="delete-bin-line"/>
                    </div>
                    </div>
                </Card>
                <Card>
                <div className="flex flex-col items-center gap-2">
                    <div className="bg-purple-600 p-6 rounded-b-md text-white text-2xl font-bold">kg</div>
                <div className="flex justify-center items-center gap-4">
                        <IconButton type="success" icon="edit-line"/>
                        <IconButton type="danger" icon="delete-bin-line"/>
                    </div>
                    </div>
                </Card>
                <Card>
                <div className="flex flex-col items-center gap-2">
                    <div className="bg-purple-600 p-6 rounded-b-md text-white text-2xl font-bold">kg</div>
                <div className="flex justify-center items-center gap-4">
                        <IconButton type="success" icon="edit-line"/>
                        <IconButton type="danger" icon="delete-bin-line"/>
                    </div>
                    </div>
                </Card>
                <Card>
                <div className="flex flex-col items-center gap-2">
                    <div className="bg-purple-600 p-6 rounded-b-md text-white text-2xl font-bold">kg</div>
                <div className="flex justify-center items-center gap-4">
                        <IconButton type="success" icon="edit-line"/>
                        <IconButton type="danger" icon="delete-bin-line"/>
                    </div>
                    </div>
                </Card>
                <Card>
                <div className="flex flex-col items-center gap-2">
                    <div className="bg-purple-600 p-6 rounded-b-md text-white text-2xl font-bold">kg</div>
                <div className="flex justify-center items-center gap-4">
                        <IconButton type="success" icon="edit-line"/>
                        <IconButton type="danger" icon="delete-bin-line"/>
                    </div>
                    </div>
                </Card>
                <Card>
                <div className="flex flex-col items-center gap-2">
                    <div className="bg-purple-600 p-6 rounded-b-md text-white text-2xl font-bold">kg</div>
                <div className="flex justify-center items-center gap-4">
                        <IconButton type="success" icon="edit-line"/>
                        <IconButton type="danger" icon="delete-bin-line"/>
                    </div>
                    </div>
                </Card>
                <Card>
                <div className="flex flex-col items-center gap-2">
                    <div className="bg-purple-600 p-6 rounded-b-md text-white text-2xl font-bold">kg</div>
                <div className="flex justify-center items-center gap-4">
                        <IconButton type="success" icon="edit-line"/>
                        <IconButton type="danger" icon="delete-bin-line"/>
                    </div>
                    </div>
                </Card>
                <Card>
                <div className="flex flex-col items-center gap-2">
                    <div className="bg-purple-600 p-6 rounded-b-md text-white text-2xl font-bold">kg</div>
                <div className="flex justify-center items-center gap-4">
                        <IconButton type="success" icon="edit-line"/>
                        <IconButton type="danger" icon="delete-bin-line"/>
                    </div>
                    </div>
                </Card>
                <Card>
                <div className="flex flex-col items-center gap-2">
                    <div className="bg-purple-600 p-6 rounded-b-md text-white text-2xl font-bold">kg</div>
                <div className="flex justify-center items-center gap-4">
                        <IconButton type="success" icon="edit-line"/>
                        <IconButton type="danger" icon="delete-bin-line"/>
                    </div>
                    </div>
                </Card>
                <Card>
                <div className="flex flex-col items-center gap-2">
                    <div className="bg-purple-600 p-6 rounded-b-md text-white text-2xl font-bold">kg</div>
                <div className="flex justify-center items-center gap-4">
                        <IconButton type="success" icon="edit-line"/>
                        <IconButton type="danger" icon="delete-bin-line"/>
                    </div>
                    </div>
                </Card>
                <Card>
                <div className="flex flex-col items-center gap-2">
                    <div className="bg-purple-600 p-6 rounded-b-md text-white text-2xl font-bold">kg</div>
                <div className="flex justify-center items-center gap-4">
                        <IconButton type="success" icon="edit-line"/>
                        <IconButton type="danger" icon="delete-bin-line"/>
                    </div>
                    </div>
                </Card>
                <Card>
                <div className="flex flex-col items-center gap-2">
                    <div className="bg-purple-600 p-6 rounded-b-md text-white text-2xl font-bold">kg</div>
                <div className="flex justify-center items-center gap-4">
                        <IconButton type="success" icon="edit-line"/>
                        <IconButton type="danger" icon="delete-bin-line"/>
                    </div>
                    </div>
                </Card>
                <Card>
                <div className="flex flex-col items-center gap-2">
                    <div className="bg-purple-600 p-6 rounded-b-md text-white text-2xl font-bold">kg</div>
                <div className="flex justify-center items-center gap-4">
                        <IconButton type="success" icon="edit-line"/>
                        <IconButton type="danger" icon="delete-bin-line"/>
                    </div>
                    </div>
                </Card>
            
            </div>
            </Card>
        </div>
    </>
  )
}

export default Class