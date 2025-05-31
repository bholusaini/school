import { useContext } from "react"
import Context from "../Context"
import Button from "./shared/button"


const Home = () => {
  const {session,setSession} = useContext(Context)
  return (
    <div>
      <Button onClick={()=>setSession("bk@gmail.com")}>useContext</Button>
      {`session is ${session}`}
    </div>
  )
}

export default Home