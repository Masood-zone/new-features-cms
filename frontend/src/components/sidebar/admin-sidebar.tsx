import type * as React from "react";
import { ChevronsUpDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";
import Logo from "../../assets/svgs/logo.svg";
import { super_nav } from "./data";
import { useAuthStore } from "@/store/authStore";

export function AdminSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const { user } = useAuthStore();
  const mainUser = user?.user;
  const { state, isMobile } = useSidebar();

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="w-full border-b p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground w-full"
                >
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                    <img
                      src={Logo || "/placeholder.svg"}
                      alt="Logo"
                      className="w-6 h-6"
                    />
                  </div>
                  {(state === "expanded" || isMobile) && (
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold text-xs sm:text-sm">
                        Canteen Management System
                      </span>
                    </div>
                  )}
                  {(state === "expanded" || isMobile) && (
                    <ChevronsUpDown className="ml-auto size-4" />
                  )}
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                align="start"
                side={isMobile ? "bottom" : "right"}
                sideOffset={4}
              >
                <DropdownMenuLabel className="text-xs text-muted-foreground">
                  System
                </DropdownMenuLabel>
                <DropdownMenuItem className="gap-2 p-2">
                  <div className="flex size-6 items-center justify-center rounded-sm border">
                    <img
                      src={Logo || "/placeholder.svg"}
                      alt="Logo"
                      className="w-4 h-4"
                    />
                  </div>
                  <span className="text-sm">Canteen Management System</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={super_nav.navMain} />
      </SidebarContent>
      <SidebarFooter className="p-2">
        {mainUser && (
          <NavUser user={{ ...mainUser, token: user.token, user: user.user }} />
        )}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
