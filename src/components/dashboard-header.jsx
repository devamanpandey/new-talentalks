import { Bell, CircleHelp, Search } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function DashboardHeader() {
  return (
    <header className="h-[54px] border-b bg-white">
      <div className="flex h-full items-center justify-between px-6">

        {/* Search */}
        <div className="relative w-[365px]">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

          <Input
            placeholder="Search candidates, jobs, interviews, or type / to navigate..."
            className="h-8 pl-9 text-xs"
          />
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2">

          {/* Notification */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="relative size-9"
              >
                <Bell className="size-[18px] text-violet-700" />

                <span className="absolute right-2 top-2 size-1.5 rounded-full bg-red-500" />
              </Button>
            </TooltipTrigger>

            <TooltipContent>
              Notifications
            </TooltipContent>
          </Tooltip>

          {/* Help */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="size-9"
              >
                <CircleHelp className="size-[18px]" />
              </Button>
            </TooltipTrigger>

            <TooltipContent>
              Help
            </TooltipContent>
          </Tooltip>

          {/* Avatar */}
          <Avatar className="ml-1 size-7">
            <AvatarFallback className="bg-violet-100 text-xs text-violet-700">
              J
            </AvatarFallback>
          </Avatar>

        </div>
      </div>
    </header>
  )
}