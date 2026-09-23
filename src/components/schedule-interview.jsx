import { useState } from "react"
import { X, CalendarDays, Clock, UploadCloud } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

function FieldSelect({ label, placeholder, options = [] }) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label className="text-xs text-slate-500">{label}</Label>
      <Select>
        <SelectTrigger className="h-10 w-full rounded-md border-slate-200 bg-white text-sm shadow-none">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.length > 0 ? (
            options.map((opt) => (
              <SelectItem key={opt} value={opt}>
                {opt}
              </SelectItem>
            ))
          ) : (
            <SelectItem value="placeholder">{placeholder}</SelectItem>
          )}
        </SelectContent>
      </Select>
    </div>
  )
}

function FieldInput({ label, placeholder, icon: Icon, type = "text" }) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label className="text-xs text-slate-500">{label}</Label>
      <div className="relative">
        <Input
          type={type}
          placeholder={placeholder}
          className="h-10 rounded-md border-slate-200 bg-white pr-9 text-sm shadow-none"
        />
        {Icon && (
          <Icon className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
        )}
      </div>
    </div>
  )
}

// Controlled: parent owns `open` state and passes it down.
export default function ScheduleInterviewDrawer({ open, onOpenChange }) {
  const [fileName, setFileName] = useState(null)

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-[400px] gap-0 overflow-y-auto p-0 sm:max-w-[400px]">
        {/* Header */}
        <SheetHeader className="flex flex-row items-start justify-between space-y-0 border-b px-5 py-4">
          <div>
            <SheetTitle className="text-base font-semibold text-slate-900">
              Schedule Interview
            </SheetTitle>
            <p className="mt-0.5 text-xs text-slate-400">
              from open jobs only
            </p>
          </div>
          <SheetClose asChild>
            <button className="rounded-full p-1 text-slate-400 hover:bg-slate-100">
              <X className="size-4" />
            </button>
          </SheetClose>
        </SheetHeader>

        {/* Form */}
        <div className="flex flex-col gap-4 px-5 py-4">
          <FieldSelect label="Client" placeholder="Above" />

          <FieldSelect
            label="Job"
            placeholder="Salesforce Developer Aug 12'24"
          />

          <div className="grid grid-cols-2 gap-3">
            <FieldInput label="Req Body" placeholder="17/09/2024" />
            <FieldInput label="Req ID" placeholder="1234" />
          </div>

          <FieldInput
            label="Interview Date"
            placeholder="17-08-2024"
            icon={CalendarDays}
          />

          <div>
            <Label className="text-xs text-slate-500">Time</Label>
            <p className="mb-1.5 text-[11px] text-slate-400">
              (system generated, next time slot)
            </p>
            <div className="relative">
              <Input
                placeholder="11:00 AM PDT"
                className="h-10 rounded-md border-slate-200 bg-white pr-9 text-sm shadow-none"
              />
              <Clock className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
            </div>
          </div>

          <FieldInput label="Candidate Name" placeholder="Ravi Verma" />

          <FieldInput
            label="Candidate Email"
            placeholder="ravi@email.com"
            type="email"
          />

          {/* Resume upload */}
          <div className="flex flex-col gap-1.5">
            <Label className="text-xs text-slate-500">Resume File</Label>
            <label className="flex cursor-pointer flex-col items-center justify-center gap-1 rounded-md border border-dashed border-violet-200 bg-violet-50/50 px-4 py-6 text-center hover:bg-violet-50">
              <UploadCloud className="size-5 text-violet-400" />
              <span className="text-xs text-slate-500">
                {fileName ?? (
                  <>
                    Drag & drop, or{" "}
                    <span className="font-medium text-primary">browse</span>
                  </>
                )}
              </span>
              <input
                type="file"
                className="hidden"
                onChange={(e) => setFileName(e.target.files?.[0]?.name)}
              />
            </label>
          </div>

          <FieldSelect
            label="Camera 2"
            placeholder="Multiple cameras for interview"
          />
        </div>

        {/* Footer */}
        <div className="flex items-center gap-3 border-t px-5 py-4">
          <SheetClose asChild>
            <Button
              variant="outline"
              className="h-10 flex-1 border-violet-300 text-violet-700 hover:bg-violet-50"
            >
              Cancel
            </Button>
          </SheetClose>
          <Button className="h-10 flex-1 bg-violet-800 text-white hover:bg-violet-900">
            Confirm schedule
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}