import Form from "./shared/form"
import Input from "./shared/input"
import login from "../assets/login.jpg"
import logo from "../assets/logo.avif"
import Card from "./shared/card"
import {Link} from "react-router-dom"


const Signup = () => {
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
              
              <Form className="w-[300px] space-y-3 px-4">
                <Input
                    name="fullname"
                    placeholder="Enter your name"
                />

                <Input 
                    name="email" 
                    placeholder="Enter Emal"
                />
 
                <Input 
                    name="mobile"
                    placeholder="Enter mobile"
                />

                <Input 
                    name="password" 
                    placeholder="Enter password"
                />

                <div className="w-full flex justify-center "> 
                  <button 
                    className=" w-full bg-blue-500 py-2 hover:bg-blue-600 text-xl rounded font-semibold text-white ">
                    Login
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