

'use client'

import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function ForgotPasswordForm() {

   return (
      <>
         <form className="space-y-4">
            <div className="space-y-2">
               <Label htmlFor="email">Email</Label>
               <Input id="email" type="email" placeholder="exemplo@email.com" required />
            </div>
            <Button type="submit" className="w-full font-bold bg-[#1E9E6A] hover:bg-[#1A714E] ease-in-out duration-300">
               Recuperar
            </Button>
         </form>
         <p className="px-8 text-center text-muted-foreground text-sm flex items-center gap-4 justify-center">
            Lembrou da sua senha?
            <Link
               href={"/"}
               className="underline underline-offset-4 hover:text-primary font-bold text-[#1E9E6A]"
            >
               Entrar
            </Link>
         </p>
      </>
   )
}