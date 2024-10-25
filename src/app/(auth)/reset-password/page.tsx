import { ResetPasswordForm } from "@/components/forms/reset-password-form/reset-password-form";


export default function Page() {

   return (
      <div className="lg:p-8">
         <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
               <h1 className="text-2xl font-semibold tracking-tight">
                  Esqueceu sua senha?
               </h1>
               <p className="text-sm text-muted-foreground">
                  Coloque seu email para recuperar sua senha.
               </p>
            </div>
            <ResetPasswordForm />
         </div>
      </div>
   )

}