"use client"

import * as React from "react"
import {
  Frame,
  Map,
  PieChart,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/app/(pages)/(required auth)/dashboard/components/nav-main"
import { NavProjects } from "@/app/(pages)/(required auth)/dashboard/components/nav-projects"
import { NavUser } from "@/app/(pages)/(required auth)/dashboard/components/nav-user"
import { TeamSwitcher } from "@/app/(pages)/(required auth)/dashboard/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Lucas Capella Moreira dos Santos",
    email: "capellaaa7@gmail.com",
    avatar: "/perfil.jpeg",
  },
  navMain: [
    {
      title: "Painel de controle",
      url: "/dashboard",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Questionários",
          url: "/questionnaires",
        },
        {
          title: "Analise",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Orientações",
      url: "#",
      icon: Frame,
    },
    {
      name: "Documentos",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Visitação",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="bg-black" collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
