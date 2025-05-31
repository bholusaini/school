import { useContext } from "react"
import Context from "../Context"


const Home = () => {
  const x = useContext(Context)
  return (
    <div>{x}</div>
  )
}

export default Home