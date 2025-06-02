import Card from "../shared/card"
import schoollogo from "../../assets/school.png"
const Dashboard = () => {
  return (
    <> 
  <div className="p-4">
    <Card>
      <div className="flex flex-col items-center"> 
      <img src={schoollogo} alt="" className="w-20" />
       <h1 className="text-black font-semibold">CodingOtt International School</h1>
        <label> Make you child creative</label>
         <small>www.codeschool.com</small>
      </div>
    </Card>
  </div>    

  <div className="p-4">
    <Card>
      <div className=" grid grid-cols-4 gap-6 ">   
      
        <div className="rounded p-8  bg-[radial-gradient(circle_404px_at_20.3%_15.9%,_rgba(0,79,255,1)_0%,_rgba(0,240,255,1)_90%)] flex justify-center gap-1" >
          <button className="bg-white px-2 py-1 rounded-full">
             <i className="ri-user-3-line"></i>
          </button>
          <div className="flex flex-col gap-1">
            <h1 className="text-white  text-2xl font-semibold">Student</h1>
            <small className="text-gray-100">4242</small>
          </div>
        </div>    
        
        <div className="rounded p-8  bg-[radial-gradient(circle_farthest-corner_at_10%_20%,_rgba(214,40,40,1)_0%,_rgba(255,195,0,1)_90%)] flex justify-center gap-1" >
          <button className="bg-white px-2 py-1 rounded-full">
             <i className="ri-user-2-line"></i>
          </button>
          <div className="flex flex-col gap-1 ">
            <h1 className="text-white  text-2xl font-semibold">Teacher</h1>
            <small className="text-gray-100">4242</small>
          </div>
        </div>    

        <div className="rounded p-8  bg-[linear-gradient(69.2deg,_rgba(77,143,251,1)_35.3%,_rgba(202,51,255,1)_100.3%)] flex justify-center gap-1" >
          <button className="bg-white px-2 py-1 rounded-full">
             <i className="ri-empathize-line"></i>
          </button>
          <div className="flex flex-col gap-1">
            <h1 className="text-white  text-2xl font-semibold">Employees</h1>
            <small className="text-gray-100">4242</small>
          </div>
        </div>    

        <div className="rounded p-8  bg-[radial-gradient(circle_1588px_at_-27.3%_144%,_rgba(255,22,22,1)_0%,_rgba(0,0,0,1)_43.4%,_rgba(0,0,0,1)_65.8%,_rgba(255,22,22,1)_100.2%)] flex justify-center gap-1" >
          <button className="bg-white px-2 py-1 rounded-full">
             <i className="ri-bookmark-line"></i>
          </button>
          <div className="flex flex-col gap-1">
            <h1 className="text-white  text-2xl font-semibold">Subject</h1>
            <small className="text-gray-100">4242</small>
          </div>
        </div>    


      </div>
    </Card>
  </div>
    </>
  )
}

export default Dashboard