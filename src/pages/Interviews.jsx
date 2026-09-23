import { Clock, Briefcase, Video, CalendarDays, Circle } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import LiveMonitoringTable from "@/components/dashboard-table";
import { useState } from "react";
import FiltersBar from "@/components/FiltersBar";
import { Button } from "@/components/ui/button";
import ScheduleInterviewDrawer from "@/components/schedule-interview";

export default function Interviews() {
  const [selected, setSelected] = useState(1);
  const [scheduleOpen, setScheduleOpen] = useState(false);

  const stats = [
    {
      id: 1,
      icon: Briefcase,
      label: "On-going",
      value: "18",
      subtext: "Across all teams",
      isActive: true,
    },
    {
      id: 2,
      icon: Video,
      label: "Pending Today",
      value: "2",
      subtext: "Being monitored right now →",
      isActive: false,
    },
    {
      id: 3,
      icon: CalendarDays,
      label: "Upcoming",
      value: "4",
      subtext: "Pending, not yet started →",
      isActive: false,
    },
    {
      id: 4,
      icon: Clock,
      label: "Completed",
      value: "6",
      subtext: "Scheduled ahead →",
      isActive: false,
    },
  ];

  return (
    <div className="min-h-screen p-8">
      <div className="mb-8 flex items-start justify-between">
        <div>
          <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">
            Pipeline
          </p>
          <h1 className="text-3xl font-bold text-slate-900 mt-1">Interviews</h1>
          <p className="text-sm text-slate-600 mt-2">
            Track And manage all interviews across you teams
          </p>
        </div>

       <div className="flex items-center gap-4">
  <Select defaultValue="all">
    <SelectTrigger className="!h-10 w-40 !rounded-md text-sm">
      <SelectValue />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="all">All teams</SelectItem>
      <SelectItem value="sales">Sales</SelectItem>
      <SelectItem value="engineering">Engineering</SelectItem>
    </SelectContent>
  </Select>

  <Button
    className="!h-10 !rounded-md px-4 text-sm font-medium leading-none"
    onClick={() => setScheduleOpen(!scheduleOpen)}
  >
    + Schedule Now
  </Button>

  <ScheduleInterviewDrawer open={scheduleOpen} onOpenChange={setScheduleOpen} />
</div>
      </div>

      <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((stat) => {
          const isActive = stat.id === selected;

          return (
            <button
              key={stat.id}
              onClick={() => setSelected(stat.id)}
              className={`flex cursor-pointer items-center justify-between rounded-sm  px-5 py-3 transition-all ${
                isActive
                  ? "bg-primary text-white"
                  : "border border-slate-200 bg-white text-slate-700 hover:border-slate-200"
              }`}
            >
              <span className="flex items-center gap-2 text-sm font-medium">
                {stat.icon && (
                  <Circle className="size-2.5 fill-emerald-400 text-emerald-400" />
                )}
                {stat.label}
              </span>

              <span
                className={`flex size-6 items-center justify-center rounded-full text-xs font-semibold ${
                  isActive
                    ? "bg-white text-primary"
                    : "bg-violet-50 text-primary"
                }`}
              >
                {stat.value}
              </span>
            </button>
          );
        })}
      </div>

      <FiltersBar />

      <LiveMonitoringTable />
    </div>
  );
}
