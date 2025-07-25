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

const Student = () => {
  const {pathname} = useLocation()
  const [open,setOpen] = useState(false)
  const [student,setStudent] = useState<any[]>([])

  const getPathname = (path:string)=>{
      const fristPath = path.split('/').pop()
      const finalPath = fristPath?.split("-").join(" ")
      return finalPath
  }

  const createStudent = async (values:FormDataType)=>{
    const {data} = await HttpInterceptor.post('/student',values)
    console.log(data);
    toast.success(data.message)
  }
 
  useEffect(()=>{
    fetchStudent()
  },[])

  const fetchStudent = async ()=>{
    const {data} = await HttpInterceptor.get('/student')
    setStudent(data)
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
                Admition
            </div>              
          </div>
        </Card>
      </div>

      <Drawer 
      title="New admission"
      open={open}
      onClose={()=>setOpen(false)}
      >         
        <Form onValue={createStudent} className=" grid grid-cols-2 gap-6"> 
            <div className=" w-full flex flex-col gap-2">
              <label>Student`s Name</label>
              <Input name="studentName" type="text" placeholder="Enter student name"/>
            </div>
          
            <div className=" w-full flex flex-col gap-2">
              <label>Father`s Name</label>
              <Input name="fatherName" type="text" placeholder="Enter father's name"/>
            </div>

            <div className=" w-full flex flex-col gap-2">
              <label>Mother`s Name</label>
              <Input name="motherName" type="text" placeholder="Enter mother's name"/>
            </div>

            <div className=" w-full flex flex-col gap-2">
              <label>Gender</label>
              <select className="border border-gray-300 px-3 py-2"> 
                <option>Male</option>
                <option>Famel</option>
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
              <Input name="mobile" type="tel" placeholder="Enter mobile number" />
            </div>

            <div className=" w-full flex flex-col gap-2">
              <label>Email</label>
              <Input name="email" type="email" placeholder="Enter email" />
            </div>
            
            <div className=" w-full flex flex-col gap-2">
              <label>Class</label>
              <select name="class"  className="border border-gray-300 px-3 py-2"> 
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>                        
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
              <label>Previous School</label>
              <Input name="previousschool" type="text" placeholder="Enter previous school" />
            </div>

            <div className=" w-full flex flex-col gap-2">
              <label>Section</label>
              <select  className="border border-gray-300 px-3 py-2"> 
                <option>A</option>
                <option>B</option>
                <option>C</option>
              </select>
            </div>

            <Button type="warning">Take Admition Now</Button>
        </Form>
      </Drawer>             

      <div className="p-4 ">
        <div className=" min-h-screen grid grid-cols-4 gap-2  p-4 bg-white rounded">  
          {
            student && student.map((item,index)=>(

          <Card key={index} >
            <div className="flex flex-col gap-2">
                
                <div className="w-full flex justify-center">
                  <div className="flex w-[100px] h-[100px] rounded-full border-3 border-amber-200 justify-center " >
                  <Avatar image={logo} size="lg"></Avatar>
                  </div> 
                </div>

                <div className="flex flex-col gap-1 items-center"> 
                  <h1 className="text-xl  font-bold">{item.studentName}</h1>
                  <label >{item.email}</label>
                  <label >7092428976</label>
                </div>

                <div className="flex justify-between">
                  <Button type="secondary">{item.class}</Button>
                  <Button type="danger">{item.roll}</Button>
              </div>

            </div>
          </Card>

            ))
          }      
         
        </div>
      </div>
    </>
  )
}

export default Student