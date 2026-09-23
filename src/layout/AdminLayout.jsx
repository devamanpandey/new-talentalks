import {
  SidebarProvider,
  SidebarInset,
} from "@/components/ui/sidebar"

import { AppSidebar } from "@/components/app-sidebar"

import {
  Bell,
  CircleHelp,
  Search,
} from "lucide-react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar"

export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset className="bg-[#f8f9fc]">

        {/* Header */}
        <header className=" border-b py-5 bg-white">
          <div className="flex h-full items-center justify-between px-6">

            {/* Search */}
            <div className="relative w-[365px]">
              <Search
                className="
                  absolute
                  left-3
                  top-1/2
                  size-4
                  -translate-y-1/2
                  text-muted-foreground
                "
              />

              <Input
                placeholder="Search candidates, jobs, interviews, or type / to navigate..."
                className="
                  h-8
                  pl-9
                  text-xs
                  shadow-none
                  placeholder:text-slate-400
                  focus-visible:ring-1
                  focus-visible:ring-violet-200
                "
              />
            </div>

            {/* Right side */}
            <div className="flex items-center gap-2">

              {/* Notification */}
              <Button
                variant="ghost"
                size="icon"
                className="relative size-9"
              >
                <Bell className="size-[18px] text-violet-700" />

                {/* Notification dot */}
                <span className="absolute right-2 top-2 size-1.5 rounded-full bg-red-500" />
              </Button>

              {/* Help */}
              <Button
                variant="ghost"
                size="icon"
                className="size-9"
              >
                <CircleHelp className="size-[18px] text-slate-700" />
              </Button>

              {/* User */}
              <Avatar className="ml-1 size-7">
                <AvatarFallback className="bg-violet-100 text-xs text-violet-700">
                  J
                </AvatarFallback>
              </Avatar>

            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1">
          {children}
        </main>

      </SidebarInset>
    </SidebarProvider>
  )
}