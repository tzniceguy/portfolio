import { User } from "lucide-react";

export default function Hero() {
  return (
    <div className="my-16 space-y-6">
      <div className="flex justify-between gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="flex flex-col gap-2 text-xl font-bold sm:text-3xl leading-tight">
            <span>I am Joe, a full stack engineer</span>
            <span>
              building stunning applications using{" "}
              <span className="text-indigo-600 dark:text-indigo-400">
                modern technologies
              </span>
              .
            </span>
          </h1>

          <div className="text-muted-foreground text-sm">
            Dar Es Salaam • UTC/GMT +3
          </div>
        </div>
        <div className="hidden md:block size-28">
          <div className="rounded-full overflow-hidden border border-gray-200 dark:border-gray-700">
            <User className="w-full h-full text-blue-400 p-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
