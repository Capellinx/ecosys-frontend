'use client'

import Link from "next/link"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function AuthenticationPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Bem-vindo de volta.
            </h1>
            <p className="text-sm text-muted-foreground">
              Faça login com sua conta
            </p>
          </div>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="exemplo@email.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
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
                  <span className="sr-only">Toggle password visibility</span>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-between py-2 ">
              <RadioGroup defaultValue="option-one">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-one" id="option-one" checked={false} />
                  <Label htmlFor="option-one">Lembrar senha</Label>
                </div>
              </RadioGroup>
              <p className="text-sm">
                <Link
                  href="/forgot-password">
                  Esqueceu a senha?
                </Link>
              </p>
            </div>
            <Button type="submit" className="w-full font-bold bg-[#1E9E6A] hover:bg-[#1A714E] ease-in-out duration-300">
              Entrar
            </Button>
          </form>
          <p className="px-8 text-center text-muted-foreground text-sm flex items-center gap-4 justify-center">
            Não possui uma conta?
            <Link
              href={"/register"}
              className="underline underline-offset-4 hover:text-primary font-bold text-[#1E9E6A]"
            >
              Cadastre-se
            </Link>
          </p>
          {/* <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p> */}
        </div>
      </div>
  )
}