'use client'

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Eye, EyeOff } from "lucide-react"

import { useState } from "react";
import { CardTitle } from "@/components/ui/card";

export default function Page() {
   const [showPassword, setShowPassword] = useState(false)

   return (
      <form className="space-y-4">
         <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[450px] p-10 ">
            <CardTitle className="text-center text-xl">Redefinir Senha</CardTitle>
            <p className="text-sm text-muted-foreground text-center  ">
               Insira sua nova senha e confirme.
            </p>
            <div className="space-y-2">
               <Label htmlFor="new-password">Nova Senha</Label>
               <div className="relative">
                  <Input
                     id="new-password"
                     type={showPassword ? "text" : "password"}
                     required
                  />
                  <Button
                     type="button"
                     variant="ghost"
                     size="icon"
                     className="absolute right-2 top-1/2 -translate-y-1/2"
                     onClick={() => setShowPassword(!showPassword)}
                  >
                     {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                     ) : (
                        <Eye className="h-4 w-4" />
                     )}
                  </Button>
               </div>
            </div>
            <div className="space-y-2">
               <Label htmlFor="confirm-new-password">Confirmar nova senha</Label>
               <div className="relative">
                  <Input
                     id="confirm-new-password"
                     type={showPassword ? "text" : "password"}
                     required
                  />
                  <Button
                     type="button"
                     variant="ghost"
                     size="icon"
                     className="absolute right-2 top-1/2 -translate-y-1/2"
                     onClick={() => setShowPassword(!showPassword)}
                  >
                     {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                     ) : (
                        <Eye className="h-4 w-4" />
                     )}
                  </Button>
               </div>
            </div>
            <Button type="submit" className="w-full font-bold bg-[#1E9E6A] hover:bg-[#1A714E] ease-in-out duration-300">
               Redefinir senha
            </Button>
         </div>
      </form>
   )
}