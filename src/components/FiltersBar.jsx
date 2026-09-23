import { CalendarDays } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

function FilterField({ label, placeholder, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-xs text-slate-500">{label}</span>
      {children ?? (
        <Select>
          <SelectTrigger className="h-9 w-[160px] rounded-md border-slate-200 bg-white text-sm text-slate-700 shadow-none">
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{placeholder}</SelectItem>
          </SelectContent>
        </Select>
      )}
    </div>
  )
}

export default function FiltersBar() {
  return (
    <div className="w-full rounded-2xl border border-violet-100 bg-violet-50/60 p-5 my-10">
      <h3 className="mb-4 text-sm font-semibold text-slate-900">Filters</h3>

      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="flex flex-wrap items-end gap-4">
          <FilterField label="Managers" placeholder="All Managers" />
          <FilterField label="Recruiter" placeholder="All Recruiter" />
          <FilterField label="Client" placeholder="All Client" />
          <FilterField label="Interview Status" placeholder="Status" />

          {/* Date Range — styled as a trigger with a calendar icon */}
          <div className="flex flex-col gap-1.5">
            <span className="text-xs text-slate-500">Date Range</span>
            <button
              type="button"
              className="flex h-9 w-[180px] items-center justify-between rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-400 shadow-none hover:bg-slate-50"
            >
              Select Date Range
              <CalendarDays className="size-4 text-slate-400" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="h-9 border-violet-300 text-violet-700 hover:bg-violet-50"
          >
            Reset
          </Button>
          <Button className="h-9 bg-violet-800 text-white hover:bg-violet-900">
            Apply
          </Button>
        </div>
      </div>
    </div>
  )
}