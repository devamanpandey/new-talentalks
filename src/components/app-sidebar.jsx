import { LogOut } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Logo from "@/assets/logo.png";
import { sideBarItems } from "@/lib/data";

export function AppSidebar({ user, onSignOut }) {
  return (
    <Sidebar>
      <SidebarHeader className="px-4 py-5">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="h-8 w-auto"  />
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {sideBarItems.map((item) => {
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className="gap-4 text-base font-[400] py-6 text-[#223180] active:font-medium hover:font-medium"
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t px-4 py-4">
        <div className="flex items-center gap-3 mb-3">
          <Avatar className="h-9 w-9">
            <AvatarFallback className="bg-primary text-primary-foreground">
              {user?.initials ?? "JN"}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-base font-medium text-primary">
              {user?.name ?? "John"}
            </span>
            <span className="text-xs text-muted-foreground">
              {user?.role ?? "Super Admin · Technical Team"}
            </span>
          </div>
        </div>
        <button
          onClick={onSignOut}
          className="flex items-center gap-2 text-base text-primary text-muted-foreground hover:text-foreground transition-colors"
        >
          <LogOut className="h-4 w-4" />
          Log out
        </button>
      </SidebarFooter>
    </Sidebar>
  );
}
