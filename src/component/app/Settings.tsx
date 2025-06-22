// src/pages/Settings.tsx
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { toast } from "react-toastify"
import HttpInterceptor from "../../lib/HttpInterceptor"

import Card from "../shared/card"
import schoolLogo from "../../assets/school.png"
import IconButton from "../shared/iconButton"
import Button from "../shared/button"
import Form, { type FormDataType } from "../shared/form"
import Input from "../shared/input"

interface SessionData {
  schoolName: string
  directorName: string
  email: string
  mobile: string
}

const Settings = () => {
  const { pathname } = useLocation()

  const [userData, setUserData] = useState<SessionData>({
    schoolName: "",
    directorName: "",
    email: "",
    mobile: "",
  })

  const getPathname = (path: string) => {
    const firstPath = path.split("/").pop()
    return firstPath?.split("-").join(" ") || ""
  }   

  useEffect(() => {  
    fetchUserData()
  }, [])
 
  const fetchUserData = async () => {
    const {data} = await HttpInterceptor.get("/auth/session")
    setUserData(data)  
  }
 
  const createSchool = async (values:FormDataType) => {
    const {data}= await HttpInterceptor.post(`/school`,values)
    console.log(data)
    toast.success(data.message || "School saved successfully!")  
  }
  
  return (
    <>
      <div className="p-4">
        <Card>
          <div className="flex flex-col items-center gap-2">
            <img src={schoolLogo} alt="LOGO" className="w-[80px]" />
            <h1 className="font-semibold text-black">
              {userData.schoolName || "CodingOtt International School"}
            </h1>
            <p>Make your child creative</p>
            <small>{userData.email || "www.codeschool.com"}</small>
          </div>
        </Card>
      </div>

      <div className="p-4">
        <Card>
          <div className="flex justify-start">
            <div className="flex items-center gap-2">
              <IconButton icon="arrow-left-fill" />
              <label>{getPathname(pathname)}</label>
            </div>
          </div>
        </Card>
      </div>

      <div className="w-full flex gap-4 p-4">
        <div style={{ width: "300px" }}>
          <Card>
            <div className="h-screen flex flex-col items-center gap-2">
              <img src={schoolLogo} alt="LOGO" className="w-[80px]" />
              <h1 className="font-semibold text-black">
                {userData.schoolName || "School Name"}
              </h1>
              <p>Make your child creative</p>
              <small>{userData.email}</small>
            </div>
          </Card>
        </div>

        <div style={{ width: "calc(100% - 300px)" }}>
          <Card>
            <div className="h-screen flex flex-col gap-4">
              <div className="bg-indigo-500 text-white py-2 text-center rounded">
                School Information
              </div>

              <Form onValue={createSchool} className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label>School’s Name</label>
                  <Input
                    name="schoolName"
                    type="text"
                    value={userData.schoolName}
                    readOnly
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label>Director’s Name</label>
                  <Input
                    name="directorName"
                    type="text"
                    value={userData.directorName}
                    readOnly
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label>Email</label>
                  <Input
                    name="email"
                    type="email"
                    value={userData.email}
                    readOnly
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label>Mobile</label>
                  <Input
                    name="mobile"
                    type="tel"
                    value={userData.mobile}
                    readOnly
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label>Tagline</label>
                  <Input
                    name="tagline"
                    type="text"
                    placeholder="make your children creative"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label>ESTD</label>
                  <Input name="estd" type="date" />
                </div>

                <div className="w-full flex flex-col gap-2">
                  <label>Address</label>
                  <Input
                    name="address"
                    type="text"
                    placeholder="Enter address"
                  />
                </div>

                <div className="w-full flex flex-col gap-2">
                  <label>City</label>
                  <Input name="city" type="text" placeholder="Enter city" />
                </div>

                <div className="w-full flex flex-col gap-2">
                  <label>State</label>
                  <Input name="state" type="text" placeholder="Enter state" />
                </div>

                <div className="w-full flex flex-col gap-2">
                  <label>Country</label>
                  <Input
                    name="country"
                    type="text"
                    placeholder="Enter country"
                  />
                </div>

                <div className="w-full flex flex-col gap-2">
                  <label>Pincode</label>
                  <Input
                    name="pincode"
                    type="number"
                    placeholder="Enter pincode"
                  />
                </div>

                <div className="w-fit">
                  <Button type="danger">Add Now</Button>
                </div>
              </Form>
            </div>
          </Card>
        </div>
      </div>
    </>
  )
}

export default Settings
