import React from 'react'
import { useQuery,useMutation } from '@tanstack/react-query';
import axiosInstance from './axios';


const App = () => {
  // axios.defaults.withCredentials = true;
  const { data: gettest } = useQuery(
    {
      queryKey: ['gettest'],
      queryFn: async () => {
        const { data } = await axiosInstance.get(`/test/get`)
        return data
      }
    }
  );
  const { mutate:gettoken } = useMutation(
    {
        mutationFn: async () => {
            const { data } = await axiosInstance.post('/test/setCSRFTokenSTP')
            return data
        },
        onError:(error)=>{
         console.log(error)
        },
        onSuccess:(data)=>{
          sessionStorage.setItem("csrf",data.csrf_token)
        }
    }
);


const { mutate:checkcsrf } = useMutation(
  {
      mutationFn: async () => {
          const { data } = await axiosInstance.post('/test/checkCSRFTokenSTP')
          return data
      },
      onError:(error)=>{
       console.log(error)
      },
      onSuccess:(data)=>{
        console.log(data)
      }
  }
);
  const handlecsrf=()=>{
    gettoken()
  }
  const validcsrf=()=>{
  checkcsrf()
  }
  return (
    <>
    <div
    onClick={handlecsrf}
    >Get Csrf token</div>
    <div onClick={validcsrf}>
      Check valid csrf or not
    </div>
    </>
  )
}

export default App