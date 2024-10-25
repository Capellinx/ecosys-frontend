

export default function ResetPasswordLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body
         >
            <div className="container relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0 p-10 sm:p-0">
               <div className="relative hidden h-full flex-col bg-muted p-10 text-black lg:flex dark:border-r">
                  <div className="absolute inset-0 overflow-hidden">
                  </div>
                  <div className="relative z-20 mt-auto">
                     <blockquote className="space-y-2">
                        <p className="text-sm text-[#1A714E]">
                           &ldquo;EcoSys, a ferramenta que muda a forma que você controla sua unidade de conservação.&rdquo;
                        </p>
                     </blockquote>
                  </div>
               </div>
            </div>
             {children}
         </body>
      </html>
   );
}