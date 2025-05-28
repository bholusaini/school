import { BrowserRouter,Routes,Route } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css'
import 'animate.css';
import Login from './component/Login';
import Signup from './component/Signup';
import { ToastContainer } from 'react-toastify';
import Home from './component/Home';
import Layout from './component/app/Layout';
const App = () => {
  return (
    <div>
  
     <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/app' element={<Layout/>}/>
      </Routes>
      <ToastContainer/>
    </BrowserRouter>
    </div>
  )
}

export default App