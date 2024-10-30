
import { useMutation } from "@tanstack/react-query"
import { z } from "zod"
import { registerFormSchema } from "../register-form.schema"
import { api } from "@/services/api"
import { AxiosError } from "axios"

export function useRegisterCollaborator() {

   const { mutate, isPending } = useMutation({
      mutationKey: ["registerCollaborator"],
      mutationFn: async (values: z.infer<typeof registerFormSchema>) => {
         await onSubmitCollaborator(values)
      }
   })

   async function onSubmitCollaborator(values: z.infer<typeof registerFormSchema>): Promise<void> {
      try {
         const { data } = await api.post("/collaborator", values)

         return data
      } catch (error) {
         if(error instanceof AxiosError) {
            console.log("Deu ruim")
         }
      }

   }
   return {
      handleRegisterCollaborator: mutate,
      isLoading: isPending
   }
}
