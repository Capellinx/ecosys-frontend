'use client'

import { z } from "zod"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Eye, EyeOff } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { registerFormSchema } from "./register-form.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { listCollaborators } from "./helpers/list-collaborators"
import { maskCpf } from "@/utils/mask-cpf"
import { UnityConservationList } from "./fragments/unity-conservation-list"
import { useRegisterCollaborator } from "./hooks/use-register-collaborator"

export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setshowConfirmPassword] = useState(false)

  const { handleRegisterCollaborator } = useRegisterCollaborator()

  const form = useForm<z.infer<typeof registerFormSchema>>({
    defaultValues: {
      name: "",
      cpf: "",
      email: "",
      password: "",
      confirmPassword: "",
      unity_conservation: "",
    },
    reValidateMode: "onChange",
    resolver: zodResolver(registerFormSchema)
  })

  function submitRegister(data: z.infer<typeof registerFormSchema>) {
    handleRegisterCollaborator(data)
  }

  return (
    <>
      <Form {...form}>
        <form className="space-y-4" onSubmit={form.handleSubmit(submitRegister)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome Completo</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className={form.formState.errors.name ? "border-red-500" : ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="cpf"
            render={({ field }) => (
              <FormItem>
                <FormLabel>CPF</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    value={maskCpf(field.value)}
                    placeholder="000.000.000-00"
                    className={form.formState.errors.cpf ? "border-red-500" : ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefone</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    value={maskPhone(field.value)} // Exibe o telefone formatado
                    onChange={(e) => {
                      // Remove os caracteres indesejados antes de aplicar a máscara
                      const unmaskedValue = e.target.value.replace(/[()\- ]/g, "");

                      // Atualiza o campo com o valor desmascarado
                      field.onChange(unmaskedValue);
                    }}
                    className={form.formState.errors.phone ? "border-red-500" : ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />


          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="exemplo@email.com"
                    className={form.formState.errors.email ? "border-red-500" : ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <UnityConservationList
            control={form.control}
          />

          <FormField
            control={form.control}
            name="personType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tipo de colaborador</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className={form.formState.errors.personType ? "border-red-500 w-full" : "w-full"}>
                      <SelectValue placeholder="Selecione um campo" />
                    </SelectTrigger>
                    <SelectContent ref={field.ref}>
                      {listCollaborators.map((collaborator, _index) => (
                        <SelectItem
                          value={collaborator}
                          key={_index}
                        >
                          {collaborator}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full font-bold bg-[#1E9E6A] hover:bg-[#1A714E] ease-in-out duration-300"
          >
            Cadastrar
          </Button>
        </form>
      </Form>
    </>
  )
}



