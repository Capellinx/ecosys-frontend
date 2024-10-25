"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Label } from '@/components/ui/label';
import {
   Command,
   CommandEmpty,
   CommandGroup,
   CommandInput,
   CommandItem,
   CommandList,
} from "@/components/ui/command"
import {
   Popover,
   PopoverContent,
   PopoverTrigger,
} from "@/components/ui/popover"

const frameworks = [
   {
      value: "REVIS Arquipélago de Alcatrazes",
      label: "REVIS Arquipélago de Alcatrazes",
   },
   {
      value: "RESEX de Mandira",
      label: "RESEX de Mandira",
   },
   {
      value: "ESEC Tupiniquins",
      label: "ESEC Tupiniquins",
   },
   {
      value: "ARIE Ilha do Ameixal",
      label: "ARIE Ilha do Ameixal",
   },
   {
      value: "APA de Cananéia-Iguape-Peruíbe",
      label: "APA de Cananéia-Iguape-Peruíbe",
   },
].sort((a, b) => a.label.localeCompare(b.label))

export function UnityConservationList() {
   const [open, setOpen] = React.useState(false)
   const [value, setValue] = React.useState("")

   return (
      <div className="space-y-2">
         <Label>Unidade</Label>
         <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
               <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="w-full justify-between"
               >
                  {value
                     ? frameworks.find((framework) => framework.value === value)?.label
                     : "Selecione sua unidade..."}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
               </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
               <Command>
                  <CommandInput placeholder="Procure sua unidade..." />
                  <CommandList>
                     <CommandEmpty>Nenhuma unidade encontrada.</CommandEmpty>
                     <CommandGroup>
                        {frameworks.map((framework) => (
                           <CommandItem
                              key={framework.value}
                              value={framework.value}
                              className="cursor-pointer"
                              onSelect={(currentValue) => {
                                 setValue(currentValue === value ? "" : currentValue)
                                 setOpen(false)
                              }}
                           >
                              <Check
                                 className={cn(
                                    "mr-2 h-4 w-4",
                                    value === framework.value ? "opacity-100" : "opacity-0",
                                 )}
                              />
                              {framework.label}
                           </CommandItem>
                        ))}
                     </CommandGroup>
                  </CommandList>
               </Command>
            </PopoverContent>
         </Popover>
      </div>
   )
}
