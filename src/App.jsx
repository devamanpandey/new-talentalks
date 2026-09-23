import { Calendar, Clock, Briefcase, Video } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import LiveMonitoringTable from "./components/dashboard-table";

export default function App() {
  const stats = [
    {
      id: 1,
      icon: Briefcase,
      label: "Active Jobs",
      value: "18",
      subtext: "Across all teams",
      isActive: true,
    },
    {
      id: 2,
      icon: Video,
      label: "Interviews - Ongoing",
      value: "2",
      subtext: "Being monitored right now →",
      isActive: false,
    },
    {
      id: 3,
      icon: Clock,
      label: "Interviews - Today",
      value: "4",
      subtext: "Pending, not yet started →",
      isActive: false,
    },
    {
      id: 4,
      icon: Calendar,
      label: "Interviews - Upcoming",
      value: "6",
      subtext: "Scheduled ahead →",
      isActive: false,
    },
  ];


  return (
    <div className="min-h-screen p-8">
      {/* Header */}
      <div className="mb-8 flex items-start justify-between">
        <div>
          <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">
            Overview
          </p>
          <h1 className="text-3xl font-bold text-slate-900 mt-1">Dashboard</h1>
          <p className="text-sm text-slate-600 mt-2">
            Here's what's happening with your hiring today.
          </p>
        </div>

        <Select defaultValue="All Teams">
          <SelectTrigger className="w-40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All Teams">All teams</SelectItem>
            <SelectItem value="Sales">Sales</SelectItem>
            <SelectItem value="Engineering">Engineering</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4  gap-4 mb-8">
        {stats.map((stat) => {
          const IconComponent = stat.icon;
          return (
            <div
              key={stat.id}
              className={`rounded-lg p-5 transition-all cursor-pointer ${
                stat.isActive
                  ? "bg-white border-2 border-blue-500 shadow-md"
                  : "bg-white border border-slate-200 hover:shadow-sm"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`p-2 rounded-lg ${
                    stat.isActive ? "bg-blue-50" : "bg-slate-50"
                  }`}
                >
                  <IconComponent
                    className={`w-5 h-5 ${
                      stat.isActive ? "text-blue-600" : "text-slate-600"
                    }`}
                  />
                </div>
                <h3 className="text-xs font-medium text-slate-600">
                  {stat.label}
                </h3>
              </div>

              <div className="mb-2">
                <div className="text-3xl font-bold text-slate-900">
                  {stat.value}
                </div>
              </div>

              <p className="text-xs text-slate-600">{stat.subtext}</p>
            </div>
          );
        })}
      </div>
      <LiveMonitoringTable />
    </div>
  );
}
