import React from 'react'
import axiosInstance from './axios';
import { useQuery,useMutation } from '@tanstack/react-query';
const Forget = () => {
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
      const validcsrf=()=>{
        checkcsrf()
        }
  return (
    <div onClick={validcsrf}>
      Check valid csrf or not in forget password page
    </div>
  )
}

export default Forget