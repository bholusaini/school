import Card from "../shared/card"
import schoollogo from "../../assets/school.png"
import Chart from 'chart.js/auto'
import { useEffect, useRef } from "react"
const Dashboard = () => {

const BarChartRef = useRef<HTMLCanvasElement | null>(null);
const PieChartRef = useRef<HTMLCanvasElement | null>(null);
const BarChartInstanceRef = useRef<Chart | null>(null)
const PieChartInstanceRef = useRef<Chart | null>(null)

useEffect(()=>{

  BarChartInstanceRef.current = barChart();
  PieChartInstanceRef.current= pieChart()

  return ()=>{

    if(BarChartInstanceRef.current){
      BarChartInstanceRef.current.destroy()
      BarChartInstanceRef.current=null
    }
    if(PieChartInstanceRef.current){
      PieChartInstanceRef.current.destroy()
      PieChartInstanceRef.current=null
    }
  }

},[])

  const barChart = (): Chart| null => {
    const data = [
      { year: 2010, count: 10 },
      { year: 2011, count: 20 },
      { year: 2012, count: 15 },
      { year: 2013, count: 25 },
      { year: 2014, count: 22 },
      { year: 2015, count: 30 },
      { year: 2016, count: 28 },
    ];

    const canvas = BarChartRef.current;
    if (!canvas) 
      return null;

    const ctx = canvas.getContext("2d");

    if (!ctx) 
      return null;

    if(BarChartInstanceRef.current)
      BarChartInstanceRef.current.destroy()

    return new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.map(row => row.year),
        datasets: [
          {
            label: 'Acquisitions by year',
            data: data.map(row => row.count),
            backgroundColor: '#3b82f6',
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
          }
        }
      }
    });
  };

  const pieChart = (): Chart | null => {

  const canvas = PieChartRef.current;
  if (!canvas) 
    return null;

  const ctx = canvas.getContext("2d");
  if (!ctx) 
    return null;
  if(PieChartInstanceRef.current)
      PieChartInstanceRef.current.destroy()

  return new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }]
    },

    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        }
      }
    }
  });
  
 
  return null;
};

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

    <div className="p-4">
      <Card>
        <div className="grid grid-cols-2 items-center gap-2 w-full ">
          <div className="flex flex-col gap -2 w-full h-full  justify-center items-center"> 
            <h1 className="text-2xl font-semibold text-black">Admission Overview</h1>  
            <canvas ref={BarChartRef}></canvas>
          </div>

          <div  className="flex flex-col gap -2 w-full h-96 justify-center items-center">  
            <h1 className="text-2xl font-semibold text-black">Payment Status</h1> 
            <canvas ref={PieChartRef}></canvas>         
          </div>         
        </div>
      </Card>
    </div>
  </>
 )}

export default Dashboard