import { Skeleton } from "@/components/ui/skeleton";

export function TableSkeleton() {
  return (
    <div className="container w-full mx-auto py-10 px-4 sm:px-0 lg:px-0">
      <DataTableSkeleton />
    </div>
  );
}

function DataTableSkeleton() {
  return (
    <div className="flex flex-col space-y-5">
      <div className="w-full h-16 bg-primary">
        <span className="flex items-center justify-center h-full text-white font-semibold text-lg">
          Select a class to see their canteen records.
        </span>
      </div>
      <div className="w-full h-16 bg-gray-300" />
      <div className="w-full h-16 bg-gray-300" />
      <div className="w-full h-16 bg-gray-300" />
    </div>
  );
}

export function PaleTableSkeleton() {
  return (
    <div className="flex flex-col space-y-5">
      <Skeleton className="w-full h-16 bg-gray-300" />
      <Skeleton className="w-full h-16 bg-gray-300" />
      <Skeleton className="w-full h-16 bg-gray-300" />
      <Skeleton className="w-full h-16 bg-gray-300" />
    </div>
  );
}

export function CardsSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="grid auto-rows-min gap-4 md:grid-cols-3">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="aspect-video rounded-xl bg-gray-300" />
      ))}
    </div>
  );
}
