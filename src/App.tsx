import { BrowserRouter,Routes,Route } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css'
import 'animate.css';
import Login from './component/Login';
import Signup from './component/Signup';
import { ToastContainer } from 'react-toastify';
import Home from './component/Home';
import Layout from './component/app/Layout';
import Student from './component/app/Student';
import Dashboard from './component/app/Dashboard';
import Class from './component/app/Class';
import Subject from './component/app/Subject';
import Teacher from './component/app/Teacher';
import Employees from './component/app/Employees';
import Expenses from './component/app/Expenses';
import Salaries from './component/app/Salaries';
import Settings from './component/app/Settings';
import Context from './Context';
import { useState } from 'react';
import Payment from './component/app/Payment';


const App = () => {
  const [session,setSession] = useState(null)
  return (
    <div>
    <Context.Provider value={{session,setSession}}>
     <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/' element={<Home/>}/>

          <Route path='/app' element={<Layout/>}>
            <Route path='dashboard' element={<Dashboard/>}/>
            <Route path='' element={<Dashboard/>}/>
            <Route path='student' element={<Student/>}/>
            <Route path='class' element={<Class/>}/>
            <Route path='subject' element={<Subject/>}/>
            <Route path='teacher' element={<Teacher/>}/>
            <Route path='employees' element={<Employees/>}/>
            <Route path='expenses' element={<Expenses/>}/>
            <Route path='salaries' element={<Salaries/>}/>
            <Route path='settings' element={<Settings/>}/>
            <Route path='payment' element={<Payment/>}/>
                               
        </Route>
      </Routes>
      <ToastContainer/>
    </BrowserRouter>
    </Context.Provider>
    </div>
  )
}

export default App