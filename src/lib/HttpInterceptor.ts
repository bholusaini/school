import axios from "axios"

const HttpInterceptor = axios.create({
    baseURL:"http://localhost:8080",
    withCredentials:true,
      headers: {
    "Content-Type": "application/json",
  },
})

export default HttpInterceptor