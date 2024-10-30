import axios, { AxiosError } from "axios"

export const api = axios.create({
   baseURL: process.env.NEXT_PUBLIC_APIURL
})

axios.interceptors.response.use(
   function(response){
      console.log(response)
      return response
   },
   function (error) {
      if(error instanceof AxiosError){
         if(error.response?.status === 500) {
            console.log(error.response.status)
            throw new Error("Server Error")
         }

         if(error.response?.status === 401) {
            console.log(error.response.status)
            throw new Error("Unauthenticated")
         }

         if(error.response?.status === 404) {
            console.log(error.response.status)
            throw new Error("Not found")
         }
      }
   }
)