
import { useEffect, useState } from "react"
import Button from "../shared/button"
import Card from "../shared/card"
import Drawer from "../shared/drawer"
import IconButton from "../shared/iconButton"
import Form, { type FormDataType } from "../shared/form"
import Input from "../shared/input"
import {  useLocation } from "react-router-dom"
import schoolLogo from "../../assets/school.png"
import HttpInterceptor from "../../lib/HttpInterceptor"
import { toast } from "react-toastify"
import CatchError from "../../lib/CatchError"



const Subject = () => {
    const [open,setOpen] =useState(false)
    const {pathname} = useLocation()
    const [subject,setSubject] = useState<any[]>([])

    const getPathname = (path:string)=>{
        const fristPath = path.split("/").pop()          
        return fristPath
    }
 
    const createSubject = async(values:FormDataType)=>{
        try{
            console.log("hi");
            const {data} = await HttpInterceptor.post("/subject", values)        
            console.log(data);        
            toast.success(data.message);
        }
        catch(err:unknown)
        {
            CatchError(err)
        }
    }

    useEffect(()=>{
        fetchSubject()
    },[])

    const fetchSubject = async ( )=>{

        try{
            const  {data} = await HttpInterceptor.get("/subject")
            setSubject(data)
          
        }
        catch(err:unknown)
        {
            CatchError(err)
        }
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
                        <Button onClick={()=>setOpen(!open)}> + New Subject</Button>
                    </div>
                </div>

            </Card>
        </div>
       
         <Drawer 
            title="Add a new Subject" 
            open={open}
            onClose={()=>setOpen(false)}
        >
          <Form className="grid grid-cols-2 gap-4" onValue={createSubject}>           
            <div className="flex flex-col gap-2 "> 
                <label >Subject's Name</label>
                <Input name="subjectName" type="text" placeholder=" Enter Subject Name"/>
            </div>

            <div className="flex flex-col gap-2 "> 
                <label >Full Mark's</label>
                <Input name="fullMark" type="number" placeholder="90"/>
            </div>          
            
            <div className="w-fit"><Button type="danger"> Add Now</Button></div>           
          </Form>
        </Drawer>

        <div className="p-4"> 
            <Card>
                <div className="grid grid-cols-4 gap-8 ">
                    {
                    subject &&  subject.map((item,index)=>(
                        <Card key={index}>
                            <div  className="flex flex-col items-center gap-2">
                                <div className=" p-4 rounded-b-md  text-6xl font-bold"><i className="ri-book-3-fill"></i></div>
                                <div className="flex flex-col justify-center items-center gap-2">
                                    <h1 className="text-2xl font-semibold text-black">{item.subjectName}</h1>
                                    <h3>{item.fullMark}</h3>
                                </div>
                                <div className="flex justify-center items-center gap-4">
                                    <IconButton type="success" icon="edit-line"/>
                                    <IconButton type="danger" icon="delete-bin-line"/>
                                </div>
                            </div>
                        </Card>   
                    ))
                    }                            
                </div>
            </Card>
        </div>
    </>
  )
}

export default Subject