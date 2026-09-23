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
import { Link } from "react-router";
import { useLocation } from "react-router";

export function AppSidebar({ user, onSignOut }) {
  const location = useLocation()
  return (
    <Sidebar>
      <SidebarHeader className="p-4 pt-5">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="h-8 w-auto" />
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {sideBarItems.map((item) => {
                return (
                  <SidebarMenuItem key={item.title} className={'py-1'}>
                    <Link to={item?.url}>
                      <SidebarMenuButton
                        asChild
                        isActive={location.pathname===item?.url}
                        className="gap-4 text-base font-[400] py-5 text-[#223180] active:font-medium hover:font-medium"
                      >
                        <item.icon />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className=" px-4 ">
        <div className="flex  items-center gap-3 mb-3 border-t border-dotted pt-5">
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
