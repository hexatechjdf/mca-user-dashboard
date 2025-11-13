import { UploadCloud } from "lucide-react";
import PageBreadcrumb from "../common/PageBreadCrumb";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

export default function UserProfileSkeleton() {
  return (
    <>
      {/* --- Page Header / Breadcrumb --- */}
      <PageBreadcrumb pageTitle="Profile" />

      {/* --- Outer Container --- */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
        <h3 className="mb-5 text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-7">
          Profile
        </h3>

        <div className="space-y-6">
          {/* --- User Meta Section --- */}
          <div className="bg-background border rounded-xl p-6 flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex items-center gap-6">
              <Skeleton className="h-20 w-20 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-5 w-40" />
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-28" />
              </div>
            </div>
            <div>
              <Skeleton className="h-11 w-22 rounded-full" />
            </div>
          </div>

          {/* --- Business Information Section --- */}
          <div className="bg-background border rounded-xl p-6">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <Skeleton className="h-5 w-50 mb-8" />
              <Skeleton className="h-11 w-22 rounded-full" />
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-5 lg:gap-7 2xl:gap-x-18">
              {Array.from({ length: 15 }).map((_, i) => (
                <div key={i}>
                  <Skeleton className="h-3 w-24 mb-4" />
                  <Skeleton className="h-4 w-36" />
                </div>
              ))}
            </div>
          </div>

          {/* --- Owner Information Section --- */}
          <div className="bg-background border rounded-xl p-6">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <Skeleton className="h-5 w-50 mb-8" />
              <Skeleton className="h-11 w-22 rounded-full" />
            </div>

            <div className="space-y-4">
              {Array.from({ length: 2 }).map((_, i) => (
                <div key={i} className="border rounded-lg p-4">
                  <Skeleton className="h-4 w-32 mb-8" />
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-5 lg:gap-7 2xl:gap-x-18">
                    {Array.from({ length: 14 }).map((_, j) => (
                      <div key={j}>
                        <Skeleton className="h-3 w-24 mb-4" />
                        <Skeleton className="h-4 w-28" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- All Documents Section --- */}
          <div className="bg-background border rounded-xl p-6">
            <Skeleton className="h-5 w-50 mb-8" />

            <div className="w-full flex flex-col flex-1">
              <div className="w-full flex justify-between gap-2 mb-4 bg-accent p-1 rounded-md">
                <Skeleton className="h-10 w-1/3 rounded-md shadow-sm" />
                <Skeleton className="h-10 w-1/3 rounded-md shadow-sm" />
                <Skeleton className="h-10 w-1/3 rounded-md shadow-sm" />
              </div>
              <div className="w-full flex justify-between gap-2 mb-4 bg-accent p-1 rounded-md px-30">
                <Skeleton className="h-10 w-1/3 rounded-md shadow-sm" />
                <Skeleton className="h-10 w-1/3 rounded-md shadow-sm" />
                <Skeleton className="h-10 w-1/3 rounded-md shadow-sm" />
              </div>

              <div className="space-y-4">
                {Array.from({ length: 1 }).map((_, i) => (
                  <div key={i} className="border rounded-md p-2">
                    <Skeleton className="h-10 w-full rounded-md" />
                  </div>
                ))}

                <div className="border border-dashed bg-accent p-[26px] rounded-[10px] flex flex-col items-center justify-center text-center space-y-2 mb-3">
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-[#DEDEDE1A] shadow-sm">
                  </div>
                  <Skeleton className="h-4 w-32 rounded-md shadow-sm" />
                  <Skeleton className="h-3 w-24 rounded-md shadow-sm" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
