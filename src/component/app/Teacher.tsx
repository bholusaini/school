import Avatar from "../shared/avatar"
import Button from "../shared/button"
import Card from "../shared/card"
import logo from "../../assets/student.png"
import { useLocation } from "react-router-dom"
import Drawer from "../shared/drawer"
import Form, { type FormDataType } from "../shared/form"
import Input from "../shared/input"
import { useEffect, useState } from "react"
import IconButton from "../shared/iconButton"
import schoolLogo from "../../assets/school.png"
import HttpInterceptor from "../../lib/HttpInterceptor"
import { toast } from "react-toastify"

const Teacher = () => {
  const {pathname} = useLocation()
  const [open,setOpen] = useState(false)
  const [teacher,setTeacher] = useState<any[]>([])


  const getPathname = (path:string)=>{
    const fristPath = path.split('/').pop()
    const finalPath = fristPath?.split("-").join(" ")
    return finalPath
  }

  const createTeacher = async(values:FormDataType)=>{
    console.log("hi");
    const {data} = await HttpInterceptor.post("/teacher",values)
    console.log(data);
    toast.success(data.message)
  } 
 
  useEffect(()=>{
    fetchTeacher()
  },[])

  const fetchTeacher = async()=>{
    const {data} = await HttpInterceptor.get("/teacher")
    console.log(data);
    setTeacher(data)
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
        <Card>
          <div className="flex justify-between">
            <div className="flex justify-center items-center gap-2"> 
                <IconButton icon="arrow-left-line"></IconButton>
                <label>{getPathname(pathname)}</label>
            </div>
                
            <div className="flex bg-cyan-300 hover:bg-cyan-500 rounded px-3 py-2" onClick={()=>setOpen(!open)}>
              <i className="ri-add-fill"></i>
                New Teacher
            </div>              
          </div>
        </Card>
      </div>

      <Drawer 
      title="Add a New Teacher"
      open={open}
      onClose={()=>setOpen(false)}
      >         
        <Form onValue={createTeacher} className=" grid grid-cols-2 gap-6"> 
          <div className=" w-full flex flex-col gap-2">
            <label>Teacher`s Name</label>
            <Input name="teacherName" type="text" placeholder="Enter Teacher name"/>
          </div>   

          <div className=" w-full flex flex-col gap-2">
            <label>Gender</label>
            <select  className="border border-gray-300 px-3 py-2"> 
              <option>male</option>
              <option>famel</option>
              <option>Others</option>
            </select>
          </div>

          <div className=" w-full flex flex-col gap-2">
            <label>DOB</label>
            <Input name="dob" type="date" />
          </div>
        
          <div className=" w-full flex flex-col gap-2">
            <label>Religion</label>
            <select  className="border border-gray-300 px-3 py-2"> 
              <option>Hindu</option>
              <option>Jain</option>
              <option>Muslim</option>
              <option>Other</option>
            </select>
          </div>

          <div className=" w-full flex flex-col gap-2">
            <label>Mobile</label>
            <Input name="mobile" type="text" placeholder="Enter mobile number" />
          </div> 
          
          <div className=" w-full flex flex-col gap-2">
            <label>Email</label>
            <Input name="email" type="text" placeholder="Enter email" />
          </div>
          
          <div className=" w-full flex flex-col gap-2">
            <label>Qualification</label>
            <select  className="border border-gray-300 px-3 py-2"> 
              <option>Graduate</option>
              <option>Masters</option>                                    
            </select>
          </div>

          <div className=" w-full flex flex-col gap-2">
            <label>Address</label>
            <Input name="address" type="text" placeholder="Enter address" />
          </div>

          <div className=" w-full flex flex-col gap-2">
            <label>City</label>
            <Input name="city" type="text" placeholder="Enter city" />
          </div>

          <div className=" w-full flex flex-col gap-2">
            <label>State</label>
            <Input name="state" type="text" placeholder="Enter state" />
          </div>

          <div className=" w-full flex flex-col gap-2">
            <label>Country</label>
            <Input name="country" type="text" placeholder="Enter country" />
          </div>

          <div className=" w-full flex flex-col gap-2">
            <label>Pincode</label>
            <Input name="pincode" type="number" placeholder="Enter pincode" />
          </div>         

          <div className=" w-full flex flex-col gap-2">
            <label>Subjects</label>
             <select
                multiple
                name="subject"
                className="border border-gray-300 px-3 py-2"
              >
                <option value="English">English</option>
                <option value="Math">Math</option>
                <option value="Science">Science</option>
              </select>
          </div>

           <div className=" w-full flex flex-col gap-2">
            <label>Previous School</label>
            <Input name="previousschool" type="text" placeholder="Enter previous school" />
          </div>

          <Button type="warning">Add New teacher</Button>
        </Form>
      </Drawer>             

      <div className="p-4  ">
        <div className=" min-h-screen grid grid-cols-4 gap-2  p-4 bg-white rounded">   
          {

            teacher && teacher.map((item,index)=>(
               <Card key={index}>
                <div className="flex flex-col gap-2">                
                    <div className="w-full flex justify-center">
                      <div className="flex w-[100px] h-[100px] rounded-full border-3 border-amber-200 justify-center " >
                      <Avatar image={logo} size="lg"></Avatar>
                      </div> 
                    </div>

                    <div className="flex flex-col gap-1 items-center"> 
                      <h1 className="text-xl  font-bold">{item.teacherName}</h1>
                      <label >{item.email}</label>
                      <label >{item.mobile}</label>
                    </div>
                    
                    <div className="flex justify-center gap-2">
                      <label className="border border-gray-200 px-2 py-1">{item.subject[0]}</label>
                      <label className="border border-gray-200 px-2 py-1">{item.subject[0]}</label>
                      <label className="border border-gray-200 px-2 py-1">Mat</label>
                      <label className="border border-gray-200 px-2 py-1">Com</label>
                  </div>
              </div>
            </Card>         
            ))

            // Array(12).fill("bksarswal").map(()=>(              
            // <Card >
            //   <div className="flex flex-col gap-2">                
            //       <div className="w-full flex justify-center">
            //         <div className="flex w-[100px] h-[100px] rounded-full border-3 border-amber-200 justify-center " >
            //         <Avatar image={logo} size="lg"></Avatar>
            //         </div> 
            //       </div>

            //       <div className="flex flex-col gap-1 items-center"> 
            //         <h1 className="text-xl  font-bold">bksarswal</h1>
            //         <label >bksarswal@gmail.com</label>
            //         <label >7092428976</label>
            //       </div>
                  
            //       <div className="flex justify-center gap-2">
            //         <label className="border border-gray-200 px-2 py-1">sci</label>
            //         <label className="border border-gray-200 px-2 py-1">Eng</label>
            //         <label className="border border-gray-200 px-2 py-1">Mat</label>
            //         <label className="border border-gray-200 px-2 py-1">Com</label>
            //     </div>
            //   </div>
            // </Card>          
            // ))
          }
                
        </div>
      </div>
    </>
  )
}

export default Teacher