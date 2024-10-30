'use client'

import { RegisterForm } from "@/components/forms/register-form/register-form"
import Link from "next/link"

export default function Page() {

  return (
      <div className="lg:p-8 h-screen overflow-auto">
        <div className="mx-auto pt-20 flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Bem-vindo ao EcoSys.
            </h1>
            <p className="text-sm text-muted-foreground">
              Registre sua conta e comece a contribuir com sua unidade.
            </p>
          </div>
          <RegisterForm />
        <p className="px-8 text-center text-muted-foreground text-sm flex items-center gap-4 justify-center">
          Já possui uma conta?
          <Link
            href={"/"}
            className="underline underline-offset-4 hover:text-primary font-bold text-[#1E9E6A]"
          >
            Entrar
          </Link>
        </p>
        </div>
      </div>
  )
}