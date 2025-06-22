import Form, { type FormDataType } from "./shared/form"
import Input from "./shared/input"
import login from "../assets/login.jpg"
import logo from "../assets/logo.avif"
import Card from "./shared/card"
import {Link, useNavigate} from "react-router-dom"
import axios from "axios"
import { toast } from "react-toastify"
import CatchError from "../lib/CatchError"


const Signup = () => {
      const navigate = useNavigate()
    const signup = async(values:FormDataType)=>{
            try{
                const {data} = await axios.post("http://localhost:8080/auth/signup", values)
                toast.success(data.message);
                navigate('/login')
            }
            catch(err:unknown)
            {
              CatchError(err)
            }
        }
  return (
    <div className="w-full h-screen overflow-hidden animate__animated animate-fadeIn">
      <div className=" flex justify-center items-center h-screen">
        <img src={login} alt="login" className="w-6/12 rounded"/>
        <div className="  relative -left-40 animate__animated animate__slideInRight "  style={ {zIndex: 10000} } >
          <Card  >
            <div >
              <div className="flex justify-center items-center">
                <img className="w-16" src={logo} alt="logo" />
                <h1 className="text-2xl font-bold text-black">School</h1>
              </div>
              
              <Form onValue={signup} className="w-[300px] space-y-3 px-4">
                <Input                 
                    name="schoolName"
                    placeholder="School name"
                />

                <Input                 
                    name="directorName"
                    placeholder="Director name"
                />

                <Input 
                   type="email"
                    name="email" 
                    placeholder="Emal Id"
                />
 
                <Input 
                    type="tel"
                    name="mobile"
                    placeholder="Mobile"
                />

                <Input 
                       type="password"
                    name="password" 
                    placeholder="Password"
                />

                <div className="w-full flex justify-center "> 
                  <button type="submit"
                    className=" w-full bg-blue-500 py-2 hover:bg-blue-600 text-xl rounded font-semibold text-white ">
                    Signup
                  </button>
                </div>
                
                <div className="flex justify-center gap-2">
                  <p>Already  have an account ? </p>
                  <Link 
                    to={'/login'} 
                    className="text-blue-300 hover:border-b border-b-blue-300">
                    Login
                  </Link>
                </div>
              </Form>
              
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Signup