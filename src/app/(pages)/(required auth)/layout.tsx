
import { ReactNode } from 'react';

import {
   SidebarInset,
   SidebarProvider,
} from "@/components/ui/sidebar"
import { AppSidebar } from './dashboard/fragments/app-sidebar';

export default function DashboardLayout({ children }: { children: ReactNode }) {
   return(
      <SidebarProvider>
         <AppSidebar />
         <SidebarInset>
            {children}
         </SidebarInset>
      </SidebarProvider>
   )
}