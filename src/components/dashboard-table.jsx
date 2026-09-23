import React from "react";

const rows = [
  {
    reqId: "1234",
    client: "Meta",
    clientColor: "#0866FF",
    title: "Salesforce Developer",
    candidate: "Renu Achar",
    manager: "Brian",
    recruiter: "Steve",
    started: "10:02 AM",
    cameras: ["#7C3AED", "#F59E0B"],
  },
  {
    reqId: "5678",
    client: "Google",
    clientColor: "#4285F4",
    title: "Java Developer",
    candidate: "Devika Rao",
    manager: "Joseph",
    recruiter: "Scott",
    started: "10:14 AM",
    cameras: ["#7C3AED", "#F59E0B"],
  },
];

function ClientLogo({ client, color }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span
        className="flex h-4 w-4 items-center justify-center rounded-full text-[10px] font-bold text-white"
        style={{ backgroundColor: color }}
      >
        {client[0]}
      </span>
      <span className="text-sm text-slate-700">{client}</span>
    </span>
  );
}

export default function LiveMonitoringTable() {
  return (
    <div className="mx-auto w-full  rounded-2xl border border-slate-200 bg-white p-5 shadow-sm pb-20">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>
          <h2 className="text-sm font-semibold text-slate-900">Live now</h2>
        </div>
        <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-medium text-violet-600">
          {rows.length} in progress
        </span>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead className="bg-[#F1F5F9]">
            <tr className="border-b border-slate-100 ">
              {["Req ID", "Client", "Title", "Candidate", "Manager", "Recruiter", "Started", "Cameras", ""].map(
                (col) => (
                  <th
                    key={col}
                    className="whitespace-nowrap px-3 py-4 text-xs font-medium text-slate-400"
                  >
                    {col}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.reqId}
                className="border-b border-slate-50 last:border-0 hover:bg-slate-50/60"
              >
                <td className="whitespace-nowrap px-3 py-3 text-sm text-slate-500">
                  {row.reqId}
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                  <ClientLogo client={row.client} color={row.clientColor} />
                </td>
                <td className="whitespace-nowrap px-3 py-3 text-sm text-slate-700">
                  {row.title}
                </td>
                <td className="whitespace-nowrap px-3 py-3 text-sm font-semibold text-slate-900">
                  {row.candidate}
                </td>
                <td className="whitespace-nowrap px-3 py-3 text-sm text-slate-500">
                  {row.manager}
                </td>
                <td className="whitespace-nowrap px-3 py-3 text-sm text-slate-500">
                  {row.recruiter}
                </td>
                <td className="whitespace-nowrap px-3 py-3 text-sm text-slate-500">
                  {row.started}
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                  <div className="flex items-center gap-1">
                    {row.cameras.map((c, i) => (
                      <span
                        key={i}
                        className="h-2 w-2 rounded-full"
                        style={{ backgroundColor: c }}
                      />
                    ))}
                  </div>
                </td>
                <td className="whitespace-nowrap px-3 py-3 text-right">
                  <button className="rounded-lg border border-violet-200 px-4 py-1.5 text-xs font-semibold text-violet-600 transition-colors hover:bg-violet-50">
                    Monitor
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}