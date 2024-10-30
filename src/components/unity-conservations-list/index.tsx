"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
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
import { listUnityConservation } from "./helpers/list-unity-conservation"
import { Control } from "react-hook-form"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { z } from "zod"
import { registerFormSchema } from "../forms/register-form/register-form.schema"

interface IUseFormProps {
   control: Control<z.infer<typeof registerFormSchema>>
}

export function UnityConservationList({ control }: IUseFormProps) {
   const [open, setOpen] = React.useState(false);

   return (
      <div className="space-y-2">
         <FormField
            control={control}
            name="unity_conservation"
            render={({ field }) => (
               <FormItem>
                  <FormLabel>Unidade</FormLabel>
                  <FormControl>
                     <div>
                        <Popover open={open} onOpenChange={setOpen}>
                           <PopoverTrigger asChild>
                              <Button
                                 variant="outline"
                                 role="combobox"
                                 aria-expanded={open}
                                 className={control._formState.errors.unity_conservation ? "border-red-500 w-full justify-between" : "w-full justify-between"}
                              >
                                 {field.value
                                    ? listUnityConservation.find((unityConservation) => unityConservation.value === field.value)?.label
                                    : "Selecione sua unidade"}
                                 <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                              </Button>
                           </PopoverTrigger>
                           <PopoverContent className="w-full p-0">
                              <Command>
                                 <CommandInput placeholder="Procure sua unidade..." />
                                 <CommandList>
                                    <CommandEmpty>Nenhuma unidade encontrada.</CommandEmpty>
                                    <CommandGroup>
                                       {listUnityConservation.map((unityConservation, _index) => (
                                          <CommandItem
                                             key={_index}
                                             value={unityConservation.value}
                                             className="cursor-pointer"
                                             onSelect={(currentValue) => {
                                                field.onChange(currentValue);
                                                setOpen(false);
                                             }}
                                          >
                                             <Check
                                                className={cn(
                                                   "mr-2 h-4 w-4",
                                                   field.value === unityConservation.value ? "opacity-100" : "opacity-0",
                                                )}
                                             />
                                             {unityConservation.label}
                                          </CommandItem>
                                       ))}
                                    </CommandGroup>
                                 </CommandList>
                              </Command>
                           </PopoverContent>
                        </Popover>
                     </div>
                  </FormControl>
                  <FormMessage />
               </FormItem>
            )}
         />
      </div>
   );
}
