import { BrowserRouter,Routes,Route } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css'
import 'animate.css';
import Login from './component/Login';
const App = () => {
  return (
    <div>
     <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App