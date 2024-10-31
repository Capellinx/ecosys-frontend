'use client'

import { useMutation } from "@tanstack/react-query"
import { z } from "zod"
import { registerFormSchema } from "../register-form.schema"
import { api } from "@/services/api"
import { AxiosError } from "axios"
import toast from "react-hot-toast"
import { useRouter } from 'next/navigation';

export function useRegisterCollaborator() {
   const router = useRouter()
   const toastId = 'register-toast'

   const { mutate, isPending } = useMutation({
      mutationKey: ["registerCollaborator"],
      mutationFn: async (values: z.infer<typeof registerFormSchema>) => {
         await onSubmitCollaborator(values)
      },
      onMutate: () => {
         toast.loading("Registrando colaborador...", {
            id: toastId
         })
      },
      onError: (err) => {
         toast.error(err.message, {
            id: toastId
         })
      },
      onSuccess: () => {
         toast.success("Cadastro realizado com sucesso!", {
            id: toastId
         })
         router.replace("/login")
      },
   })
   

   async function onSubmitCollaborator(values: z.infer<typeof registerFormSchema>): Promise<void> {
      try {
         const { data } = await api.post("/collaborator", values)

         return data
      } catch (error) {
         if(error instanceof AxiosError) {
            throw new Error(error.response?.data.error)
         }
      }

   }
   return {
      handleRegisterCollaborator: mutate,
      isLoading: isPending
   }
}
