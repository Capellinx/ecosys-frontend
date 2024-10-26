'use client'
import {
   Select,
   SelectContent,
   SelectGroup,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select"
import { Card, CardTitle, CardDescription, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from '@/components/ui/input';
import { Search, X } from "lucide-react";
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
   Popover,
   PopoverContent,
   PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react";


export default function Page() {
   const [date, setDate] = useState<Date>()


   return (
      <div className="p-5">
         <Card className="p-10 shadow-none flex flex-col md:flex-row items-center justify-between border-none">
            <div className="flex flex-col md:flex-row items-center gap-4">
               <div className="relative">
                  <Input
                     placeholder="Pesquisar formulário..."
                     className=" w-[280px] pl-10"
                  />
                  <Search className="absolute left-3 top-4   text-zinc-500 size-5 -translate-y-1/2" />
               </div>
               <div className="w-full md:w-[280px]">
                  <Select>
                     <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecione um status" />
                     </SelectTrigger>
                     <SelectContent>
                        <SelectGroup>
                           <SelectItem value="Ativo">Ativo</SelectItem>
                           <SelectItem value="Inativo">Inativo</SelectItem>
                           <SelectItem value="Finalizado">Finalizado</SelectItem>
                        </SelectGroup>
                     </SelectContent>
                  </Select>
               </div>
               <div>
                  <Popover>
                     <PopoverTrigger asChild>
                        <Button
                           variant={"outline"}
                           className={cn(
                              "w-[280px] justify-start text-left font-normal mb-4 md:mb-0",
                              !date && "text-muted-foreground"
                           )}
                        >
                           <CalendarIcon />
                           {date ? format(date, "PPP") : <span>Selecione uma data</span>}
                        </Button>
                     </PopoverTrigger>
                     <PopoverContent className="w-auto p-0">
                        <Calendar
                           mode="single"
                           selected={date}
                           onSelect={setDate}
                           initialFocus
                        />
                     </PopoverContent>
                  </Popover>
               </div>
            </div>
            <div className="w-full md:w-auto">
               <Button className=" w-full md:w-auto bg-[#1E9E6A] hover:bg-[#1A714E] ease-in-out duration-300">Criar formulário</Button>
            </div>
         </Card>
         <div className="pl-10">
            <Card className="w-96">
               <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                     Ficha de campo - 2024
                     <X 
                        className="size-4 cursor-pointer" 
                     />
                  </CardTitle>
                  <CardDescription className="pt-5">
                     Formulário da ficha de campo 2024, com o foco em aumentar a produtividade e dados da unidade
                     </CardDescription>
               </CardHeader>
               <CardContent>
                  <p className="text-sm text-muted-foreground">Data de criacão: 01/01/2024</p>
                  <div className="flex gap-4 items-center">
                     <Button className="w-full h-6 rounded-sm bg-zinc-500 mt-4 border-none">
                        Visualizar respostas
                     </Button>
                     <Button className="w-full h-6 rounded-sm bg-blue-500 mt-4 border-none">
                        Editar
                     </Button>
                  </div>
               </CardContent>
            </Card>
         </div>
      </div>
   )
}