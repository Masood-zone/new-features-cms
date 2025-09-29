"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import type { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";

// Define the CanteenRecord type
interface CanteenRecord {
  id: number;
  student: {
    name: string;
  };
  settingsAmount: number;
  submitedAt: Date;
  hasPaid: boolean;
  isAbsent: boolean;
  isSubmitted: boolean; // New property to track submission status
}

export const columns = (
  handleUpdateStatus: (
    record: CanteenRecord,
    update: {
      hasPaid: boolean;
      isAbsent: boolean;
    }
  ) => void,
  updatingLoader: boolean,
  onRowSelectionChange?: (rowId: number, isSelected: boolean) => void
): ColumnDef<CanteenRecord>[] => [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => {
          row.toggleSelected(!!value);
          if (onRowSelectionChange) {
            onRowSelectionChange(row.original.id, !!value);
          }
        }}
        aria-label="Select row"
        disabled={row.original.isAbsent}
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "student.name",
    header: "Student Name",
  },
  {
    accessorKey: "settingsAmount",
    header: "Amount",
    cell: ({ row }) => `₵${row.original.settingsAmount.toFixed(2)}`,
  },
  {
    accessorKey: "submitedAt",
    header: "Date",
    cell: ({ row }) => format(new Date(row.original.submitedAt), "PPp"),
  },
  {
    accessorKey: "hasPaid",
    header: "Payment Status",
    cell: ({ row }) =>
      row.original.isAbsent ? (
        <span className="text-yellow-600 font-semibold">Absent</span>
      ) : row.original.hasPaid ? (
        <span className="text-green-600 font-semibold">Paid</span>
      ) : (
        <span className="text-red-600 font-semibold">Unpaid</span>
      ),
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const record = row.original;
      // Disable all action buttons if any record isSubmitted (i.e., after daily submission)
      const disableActions = updatingLoader || record.isSubmitted;
      return (
        <div className="flex space-x-2">
          <Button
            variant={record.hasPaid ? "destructive" : "default"}
            onClick={() =>
              handleUpdateStatus(record, {
                hasPaid: !record.hasPaid,
                isAbsent: false,
              })
            }
            disabled={disableActions}
            size="sm"
          >
            {record.hasPaid ? "Mark as Unpaid" : "Mark as Paid"}
          </Button>
          {!record.hasPaid && !record.isAbsent && (
            <Button
              variant="outline"
              onClick={() =>
                handleUpdateStatus(record, { hasPaid: false, isAbsent: true })
              }
              disabled={disableActions}
              size="sm"
            >
              Mark as Absent
            </Button>
          )}
          {record.isAbsent && (
            <Button
              variant="outline"
              onClick={() =>
                handleUpdateStatus(record, {
                  hasPaid: false,
                  isAbsent: false,
                })
              }
              disabled={disableActions}
              size="sm"
            >
              Mark as Present
            </Button>
          )}
        </div>
      );
    },
  },
];
