import Card from "../shared/card"
import schoolLogo from "../../assets/school.png"
import IconButton from "../shared/iconButton"
import Button from "../shared/button"
import {  useLocation } from "react-router-dom"
import Form from "../shared/form"
import Input from "../shared/input"

const Settings = () => {
  const {pathname} = useLocation()
  const getPathname = (path:string)=>{
    const fristPath = path.split('/').pop()
    const finalPath = fristPath?.split("-").join(" ")
    return finalPath
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
          <div className="flex justify-start">
            <div  className="flex justify-center items-center gap-2 ">
              <IconButton icon="arrow-left-fill"/>
              <label>{getPathname(pathname)}</label>
            </div>              
          </div>
        </Card>
      </div>
      
      <div className=" w-full  flex gap-4 p-4 ">
        <div style={{width:"300PX"}}>
          <Card>
            <div className=" h-screen flex flex-col items-center gap-2 ">
              <img src={schoolLogo} alt="LOGO" className="w-[80px]" />
              <h1 className=" font-semibold text-black">CodingOtt International School</h1>
              <p>Make you child creative</p>
              <small>www.codeschool.com</small>
            </div>
          </Card>
        </div> 

        <div  style={{width:'calc(100% - 300px)'}}>
          <Card>             
            < div className=" h-screen flex flex-col gap-4">
              <div className="bg-indigo-500 text-white py-2 text-center rounded">School infromations</div>
              <Form className="grid grid-cols-2 gap-4">        
                <div className="flex flex-col gap-2 "> 
                  <label >School`s Name</label>
                    <Input name="schoolname" type="text" placeholder=" Enter School Name"/>
                </div>

                <div className="flex flex-col gap-2 "> 
                  <label >Director`s Name</label>
                    <Input name="directorname" type="text" placeholder="Director`s Name"/>
                </div>
                <div className="flex flex-col gap-2 "> 
                  <label >Tagline</label>
                    <Input name="dagline" type="text" placeholder="make your children creative"/>
                </div>
                <div className="flex flex-col gap-2 "> 
                  <label >ESTD</label>
                    <Input name="estd" type="date" />
                </div>
                <div className="flex flex-col gap-2 "> 
                  <label >Mobile</label>
                    <Input name="mobile" type="tel" placeholder="Enter your mobile number" />
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
                
                <div className="w-fit"><Button type="danger"> Add Now</Button></div>
            
              </Form>
            </div>              
          </Card>
        </div>
      </div>
    </>

    
  )
}

export default Settings